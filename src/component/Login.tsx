import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Button } from 'react-bootstrap';

function LoginForm() {
  return (
    <>
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-header'>
          <h3> 로그인 </h3>
        </div>
        <FloatingLabel controlId='floatingInput' label='이메일' className='mb-3'>
          <Form.Control type='email' placeholder='name@example.com' />
        </FloatingLabel>
        <FloatingLabel controlId='floatingPassword' label='비밀번호'>
          <Form.Control type='password' placeholder='Password' />
        </FloatingLabel>
        <Button type='submit' className='btn btn-primary mt-3'> 로그인 </Button>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
