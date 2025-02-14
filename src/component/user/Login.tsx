import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/UserService';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/my');
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className='login-box'>
          <div className='login-header'>
            <h3> 로그인 </h3>
          </div>
          <FloatingLabel
            controlId='floatingInput'
            label='이메일'
            className='mb-3'
          >
            <Form.Control
              type='email'
              placeholder='name@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='비밀번호'>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <Button
            onClick={handleLogin}
            type='button'
            className='btn btn-primary mt-3'
          >
            로그인
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
