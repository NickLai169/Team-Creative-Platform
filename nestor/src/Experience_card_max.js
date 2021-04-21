// import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
// import { Button, InputGroup, FormControl, Col } from 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';



const Experience_card_max = () => {
  return (
      <div>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Description" />
        </Form.Group>
        
        <Form.Row className="align-items-center">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
                Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            <Row>
                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Row>
            {/* <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                Username
            </Form.Label>
            <InputGroup>
                <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
            </InputGroup>
            </Col>
            <Col xs="auto" className="my-1">
            <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
            </Col>
            <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
            </Col> */}
        </Form.Row>
      </div>
      
    // <nav className="navbar">
    //   <h1>The Dojo Blog</h1>
    //   <div className="links">
    //     <Link to="/">Home</Link>
    //     <Link to="/create" style={{ 
    //       color: 'white', 
    //       backgroundColor: '#f1356d',
    //       borderRadius: '8px' 
    //     }}>New Blog</Link>
    //   </div>
    // </nav>
  );
}
 
export default Experience_card_max;