import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
    <>
      <FloatingLabel controlId='floatingInput' label='이메일' className='mb-3'>
        <Form.Control type='email' placeholder='name@example.com' />
      </FloatingLabel>
      <FloatingLabel controlId='floatingPassword' label='비밀번호'>
        <Form.Control type='password' placeholder='Password' />
      </FloatingLabel>
    </>
  );
}

export default LoginForm;
