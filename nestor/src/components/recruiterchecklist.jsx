import React from 'react';
//import { ThemeProvider } from 'theme-ui';
//import theme from '@rebass/preset'; 
//import { useTheme, ThemeProvider, withTheme } from '@emotion-theming';
//import { ThemeProvider } from 'emotion-theming';
//import theme from '@rebass/preset'; 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import userimage from 'c:/Users/rucha/Desktop/indeng185/Team-Creative-Platform/nestor/src/images/checkList.jpg';
import Button from 'react-bootstrap/Button';
//import {Container, Row, Col} from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'
  import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms'

/* <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      <div className='boxes'><Box>
        <Label htmlFor='comment'>Name</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>
        <div className='boxes'><Box>
        <Label htmlFor='comment'>Email</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>
        <div className='boxes'><Box>
        <Label htmlFor='comment'>Educational Level</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>
        <div className='boxes'> <Box>
        <Label htmlFor='comment'>Skills</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>
        <div className='boxes'> <Box>
        <Label htmlFor='comment'>Experiences</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>
    </Col>
    <Col xs lg="2">
      <div className='listPic'>
        <Image
        src={userimage}
        sx={{
          width: [ '100%', '50%' ],
          borderRadius: 8,
        }}
      />
      </div>
    </Col>
  </Row>
</Container> */
 /*  export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
    </ThemeProvider> */
const Recruiterchecklist = () => {
    return ( 
        <Container>
            <Row className="justify-content-md-center">
                <Heading
                    fontSize={[ 5, 6, 7 ]}
                    color='primary'>
                    <FaIcons.FaWaveSquare /> 
                    Recruiter's Portal
                </Heading>
            </Row>
            <Row className="justify-content-md-center">
                <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'>
                    John Doe
                </Text>
            </Row> 
            <Row>
                <Button className="buttonJurnee" variant='primary'> Upload Jurnee Company Profile </Button>
            </Row>
            <Row>
                <Col>
                    <Row><Box className="topBox">
                            <Label htmlFor='comment'>Company Name</Label>
                            <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes"> <Label htmlFor='comment'>Job Role</Label>
                            <Textarea
                                id='comment'
                                name='comment'
                            /> 
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'>Job Role Description</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'>Educational Level Required</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'> Required Skills</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'> Required Experience #1 </Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'> Required Experience #2</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'> Required Experience #3</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'> Required Experience #4</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                    <Row>
                        <Box className="boxes">
                            <Label htmlFor='comment'> Required Experience #5</Label>
                                <Textarea
                                id='comment'
                                name='comment'
                            />
                        </Box>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-md-center">
                        <h4 className="imageList">  Sample CheckList </h4>
                    </Row>
                    <Row>
                        <Image className="listPic" src={userimage} thumbnail />
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Button variant='primary'> Submit </Button>
            </Row>
        </Container>
    );
};
export default Recruiterchecklist;

/* 


        <Heading
            fontSize={[ 5, 6, 7 ]}
            color='primary'>
            <FaIcons.FaWaveSquare /> 
            Recruiter's Portal
        </Heading>
        </Row>
        <Row className="justify-content-md-center">
        <Text
            fontSize={[ 3, 4, 5 ]}
            fontWeight='bold'>
            John Doe
        </Text>
        </Row> 
        <Row className="justify-content-md-center">
            <Col xs lg="4">
            </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Button variant='primary' mr={100}> Upload Jurnee Company Profile </Button>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs lg="4">
            <div className='boxes'><Box>
              <Label htmlFor='comment'>Company Name</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'><Box>
              <Label htmlFor='comment'>Job Role</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'><Box>
              <Label htmlFor='comment'>Job Role Description</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'><Box>
              <Label htmlFor='comment'>Educational Level Required</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'> <Box>
              <Label htmlFor='comment'> Required Skills</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'> <Box>
              <Label htmlFor='comment'> Required Experience 1</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'> <Box>
              <Label htmlFor='comment'> Required Experience 2</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'> <Box>
              <Label htmlFor='comment'> Required Experience 3</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'> <Box>
              <Label htmlFor='comment'> Required Experience 4</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
              <div className='boxes'> <Box>
              <Label htmlFor='comment'> Required Experience 5</Label>
              <Textarea
                id='comment'
                name='comment'
              />
              </Box>
              </div>
          </Col>
          <Col xs lg="2">
            <div className='listPic'>
              <Image
              src={userimage}
              sx={{
                width: [ '100%', '50%' ],
                borderRadius: 8,
              }}
            />
            </div>
          </Col>
        </Row>
      </Container>
    );
};
export default Recruiterchecklist;

 */

        /* [
            
        <Heading
            fontSize={[ 5, 6, 7 ]}
            color='primary'>
            <FaIcons.FaWaveSquare /> 
            Marketing Intern
        </Heading>,
        <Text
            fontSize={[ 3, 4, 5 ]}
            fontWeight='bold'>
            Kaiser Permanente
        </Text>, 
        <div className='description'> 
        <h4>  Description </h4> 
        <p>
            Our team needs support developing and improving our marketing and communications. 
            This would include activities such as revising our value proposition, 
            creating a methodology to regularly communicate the accomplishments and impact of our work, 
            establishing branded templates for the team to leverage, and more effectively utilizing the various 
            platforms that today we leverage such as SharePoint as we engage our customers. 
            {/* In addition, to getting the opportunity to present and attain input and commitment to their proposals, 
            the intern would have the opportunity to participate in stakeholder meetings to observe how these 
            materials are leveraged and how they are received. 
        </p>
        </div>,
        //<div className='button'>
        <Button variant='primary' mr={100}> Upload Jurnee Profile </Button>,
        <Button variant='primary' mr={100}> Upload Resume </Button>,
        // </div>,
        <div className='boxes'><Box>
        <Label htmlFor='comment'>Name</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>,
        <div className='boxes'><Box>
        <Label htmlFor='comment'>Email</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>,
        <div className='boxes'><Box>
        <Label htmlFor='comment'>Educational Level</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>,
        <div className='boxes'> <Box>
        <Label htmlFor='comment'>Skills</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>,
        <div className='boxes'> <Box>
        <Label htmlFor='comment'>Experiences</Label>
        <Textarea
          id='comment'
          name='comment'
        />
        </Box>
        </div>,
        <div className='listPic'>
        <Image
        src={userimage}
        sx={{
          width: [ '100%', '50%' ],
          borderRadius: 8,
        }}
      />
      </div>,
        ] 
    
// changing the color of the button
// 
       // - establishing margins
       // - moving the description heading to the right alignment
       // - putting the paragraph text within the margins with right alignment
       // - add an icon next to heading */