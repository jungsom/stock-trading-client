import { Button, Form, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>주식 거래 프로그램</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto gap-3'>
            <Nav.Link href='/'>홈</Nav.Link>
            <Nav.Link href='stock'>주식 골라보기</Nav.Link>
            <Nav.Link href='my'>내 계좌</Nav.Link>
            <Form className='d-flex w-20'>
              <FormControl
                type='search'
                placeholder='검색어를 입력하세요.'
                className='me-2'
                aria-label='Search'
                size='sm'
                style={{ flex: 6 }}
              />
              <Button variant='success' size='sm' style={{ flex: 2 }}>
                <FaSearch />
              </Button>
            </Form>
          </Nav>
          <Nav className='mr-auto'>
            <Button href='/login' variant='primary' onClick={handleLogin}>
              {' '}
              로그인{' '}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
