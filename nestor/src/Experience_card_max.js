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
import React, { useEffect, useState } from 'react';

// class InputTag extends React.Component {
//     constructor() {
//       super();
      
//       this.state = {
//         tags: [
//           'Tags',
//           'Input'
//         ]
//       };
//     }
    
//     removeTag = (i) => {
//       const newTags = [ ...this.state.tags ];
//       newTags.splice(i, 1);
//       this.setState({ tags: newTags });
//     }
  
//     inputKeyDown = (e) => {
//       const val = e.target.value;
//       if (e.key === 'Enter' && val) {
//         if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
//           return;
//         }
//         this.setState({ tags: [...this.state.tags, val]});
//         this.tagInput.value = null;
//       } else if (e.key === 'Backspace' && !val) {
//         this.removeTag(this.state.tags.length - 1);
//       }
//     }
// }

const Experience_card_max = (props) => {
    // const [count, setCount] = useState(0);
    // const tag_fella = new InputTag();
    // const tags = tag_fella.state;
    const [experience, setExperience] = useState([
        {
          experience_type: "work",
          icon: "https://www.preipobuzz.com/wp-content/uploads/2020/08/1_Q41fN5j195jaksG8An983g-1024x1024.jpg",
          description: "SWE at Kiwibot :D\n",
          start_date: "January 2019",
          currently_here: false,
          end_date: "March 2020",
          tags: ["Project", "SWE", "Web Design", "Unpaid Internship", "Startup"]
        },
        {
          experience_type: "Education",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png",
          description: "Student at UCB :D\n",
          start_date: "January 2019",
          currently_here: true,
          end_date: "N/A",
          tags: ["Hello", "DarknesS", "my", "old", "Friend"]
        }
      ])[0];

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

                    <Form.Group>
                        <Row>
                            <Col>
                                <h4 class="card-titles-dates-start">
                                    Start Date
                                </h4>
                                <Form.Control type="text" size="sm" class="entry-box" placeholder={ experience.start_date }/>
                            </Col>
                            <Col>
                                <h4 class="card-titles-dates-end">
                                    End Date
                                </h4>
                                <Form.Control type="text" size="sm" class="entry-box" placeholder={ experience.end_date }/>
                            </Col>
                            <Col>
                                <br/>
                                <br/>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                    label="Currently Here"
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    
                    <Form.Group>
                        <Row>
                            <Col>
                                <h4 class="card-titles">
                                    Tags
                                </h4>
                                <Form.Control type="text" size="sm" class="entry-box" placeholder="tags"/>
                            </Col>
                        </Row>
                    </Form.Group>
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