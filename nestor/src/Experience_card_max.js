// import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
// import { Button, InputGroup, FormControl, Col } from 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import InputGroup from 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'bootstrap/dist/css/bootstrap.min.css';
// import { Row } from 'react-bootstrap';
import "./Experience_cards.css";
import useFetch from "./useFetch";
import React, { useEffect, useState} from 'react';



const Experience_card_max = (props) => {
    // const [count, setCount] = useState(0);
    const [experiences, setExperiences] = useState([
        {
          experience_type: "work",
          icon: "https://www.preipobuzz.com/wp-content/uploads/2020/08/1_Q41fN5j195jaksG8An983g-1024x1024.jpg",
          description: "SWE at Kiwibot :D\n",
          start_date: "January 2019",
          currently_here: false,
          end_date: "March 2020"
        },
        {
          experience_type: "Education",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png",
          description: "Student at UCB :D\n",
          start_date: "January 2019",
          currently_here: true,
          end_date: "N/A"
        }
      ]);

    // const [experiences, setExperiences] = useState(null);
    // const [isPending, setIsPending] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //       fetch('http://localhost:8000/experiences')
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then(data => {
    //         setIsPending(false);
    //         setExperiences(data);
    //       })
    //     }, 1);
    //   }, [])
    
    // console.log(experiences);

    // const image = "https://www.preipobuzz.com/wp-content/uploads/2020/08/1_Q41fN5j195jaksG8An983g-1024x1024.jpg";
    // const description = "SWE at Kiwibot :D\n";

    // const image = experiences.icon;
    // const description = experiences.description;

    const experience = experiences[0];

    
    return (
        <div>
            <head>
                <title>
                This is a test
                </title>
                <link rel="stylesheet" href="Experience_cards.css"/>
            </head>

            <Form>
                <body class="red-cell">
                    <img src={ experience.icon } alt="Kiwibot logo" width="180" height="180"/>
                    <h4 class="card-titles">
                        Description
                    </h4>
                    <Form.Group>
                        <Form.Control type="text" class="entry-box" placeholder={ experience.description }/>
                    </Form.Group>

                    <Row>
                        <h4 class="card-titles-dates-start">
                            Start Date
                        </h4>
                        <h4 class="card-titles-dates-end">
                            End Date
                        </h4>
                        <Row>
                            <Col style={{paddingLeft: 20px}}>
                                <Form.Control type="text" size="sm" class="entry-box" placeholder={ experience.start_date }/>
                            </Col>
                            <Col>
                                <Form.Control type="text" size="sm" class="entry-box" placeholder={ experience.end_date }/>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                </body>
            </Form>

        </div>
    );
    
   /*
   return (
       <Form>
           <body class="red-cell">
               <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={ experience.description }/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={ experience.description }/>
                    </Form.Group>
               </Row>
           </body>
       </Form>
   );
   */
}

 
export default Experience_card_max;