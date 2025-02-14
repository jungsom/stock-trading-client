import { Button, Form, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';

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
          <Form className='d-flex w-25'>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
