import React, { useEffect, useState } from 'react';
import './UserAccount.css';
import { Account } from '../../interfaces/Account';
import {
  depositMoney,
  fetchAccount,
  withdrawMoney
} from '../../services/AccountService';
import { Button, Form, Modal } from 'react-bootstrap';

function UserAccount() {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState<Account>();
  const [transactionType, setTransactionType] = useState<
    'deposit' | 'withdraw'
  >();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (type: 'deposit' | 'withdraw') => {
    setTransactionType(type);
    setShow(true);
  };

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await depositMoney({ balance });
      handleClose();
      window.location.reload();
    } catch (error) {
      alert('입금 실패');
    }
  };

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await withdrawMoney({ balance });
      handleClose();
      window.location.reload();
    } catch (error) {
      alert('출금 실패');
    }
  };

  useEffect(() => {
    fetchAccount().then(setAccount);
  }, []);

  return (
    <>
      <div className='account-container'>
        <div className='account-container-header'>
          <div className='account-bank'>
            {account?.bankName} {account?.bankNumber}
          </div>
          <div className='account-balance'> {account?.balance}원 </div>
        </div>
        <div className='account-container-body'>
          <Button
            variant='success'
            size='sm'
            onClick={() => handleShow('deposit')}
          >
            입금
          </Button>
          <Button
            variant='danger'
            size='sm'
            onClick={() => handleShow('withdraw')}
          >
            출금
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby='contained-modal-title-vcenter'
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title-vcenter'>
                {transactionType === 'deposit'
                  ? '입금을 하시겠습니까?'
                  : '출금을 하시겠습니까?'}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Label>
                    {transactionType === 'deposit'
                      ? '입금할 금액을 입력해 주세요.'
                      : '출금할 금액을 입력해 주세요.'}
                  </Form.Label>
                  <Form.Control
                    placeholder='원'
                    autoFocus
                    onChange={(e) => setBalance(Number(e.target.value))}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='primary'
                onClick={
                  transactionType === 'deposit' ? handleDeposit : handleWithdraw
                }
              >
                확인
              </Button>
              <Button variant='secondary' onClick={handleClose}>
                취소
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default UserAccount;
