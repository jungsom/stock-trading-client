import { Button, Form, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/' className='me-auto'>
          주식 거래 프로그램
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto gap-4'>
            <Nav.Link href='/'>홈</Nav.Link>
            <Nav.Link href='stock'>주식 골라보기</Nav.Link>
            <Nav.Link href='login'>내 주식</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='검색'
              className='me-2'
              aria-label='Search'
              size='sm'
            />
            <Button variant='success' size='sm'>검색</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
