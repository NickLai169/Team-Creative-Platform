import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as BsIcons from 'react-icons/bs';

import Image from 'react-bootstrap/Image'
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// IMPORT OF ALL IMAGES OF APPLICANTS
import sample_journee1 from '../images/sample_journee1.PNG'
import sample_journee2 from '../images/sample_journee2.PNG'
import generic_pic from '../images/generic-profile-picture.jpg'
import arnav_profile_pic from '../images/yuo.PNG'
import verified from '../images/verified.png'

// const Nav = styled.div`
//   background: #FFB600;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const Recruiter_review_applicants = (props) => {
    //Note: Use Futura font
    const [jobListing, setJobListing] = useState([
        {
            job_id: 1,
            job_title: "SWE Intern: UX Design",
            confirmed_hires: 30,
            total_positions: 50,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 132,
            expanded: false, 
        },
        {
            job_id: 2,
            job_title: "SWE Intern: Backend Database",
            confirmed_hires: 25,
            total_positions: 30,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 132,
            expanded: false, 
        },
        {
            job_title: "Marketing Intern",
            confirmed_hires: 10,
            total_positions: 10,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 132,
            expanded: false,  
        },
        {
            job_id: 3,
            job_title: "Associate Product manager",
            confirmed_hires: 25,
            total_positions: 30,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 132,
            expanded: false,  
        },
    ]);

    const [soloListing, setSoloListng] = useState(
        {
            job_id: 4,
            job_title: "SWE: Security Engineer",
            confirmed_hires: 9,
            total_positions: 12,
            posting_day: 2,
            posting_month: 2,
            posting_year: 2021,
            posting_up_day_count: 74,
            expanded: false, 
        }
    )

    const [allApplicants, setAllApplicants] = useState([
        {
            name: "John Johnson",
            journee: "../src/images/sameple_journee1.png",
            verified: true,
            match: "90%",
        },
        {
            name: "Arnav Demesi",
            journee: "../src/images/sameple_journee2.png",
            verified: false,
            match: "75%",
        },
    ])

    const expandJob = (job) => {
        job.expandJob = ! job.expandJob;
        console.log("Job expanded");
    }

    const expandSoloListing = () => {
        setSoloListng({
            job_id: 4,
            job_title: "SWE: Security Engineer",
            confirmed_hires: 9,
            total_positions: 12,
            posting_day: 2,
            posting_month: 2,
            posting_year: 2021,
            posting_up_day_count: 74,
            expanded: ! soloListing.expanded, 
        })
    }

    const listJobs = jobListing.map((job) =>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
                <h4>{job.job_title}</h4>
            </Col>
            <Col xs lg="1">
                <button onClick= {expandJob(job)}> Expand </button>
            </Col>
            <Col xs lg="2">
                <h4>{job.confirmed_hires}/{job.total_positions}</h4>
            </Col>
            <Col xs lg="1">
                <h4>{job.posting_day}.{job.posting_month}.{job.posting_year}</h4>
            </Col>
            <Col xs lg="2">
                <h4>{job.posting_up_day_count} {(job.posting_up_day_count <= 1) ? 'day' : 'days'}</h4>
            </Col>
        </Row>
    );

    
    return (
        <>
            <h1>
                Your Position Listings
            </h1>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <h2>Job Title</h2>
                </Col>
                <Col xs lg="1"/>
                <Col xs lg="2">
                    <h2>Process</h2>
                </Col>
                <Col xs lg="2">
                    <h2>Posting Date</h2>
                </Col>
                <Col xs lg="1">
                    <h4></h4>
                </Col>
            </Row>
            <br/>
            {listJobs}
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <h4 onClick= {() => {expandSoloListing()}}>{soloListing.job_title}</h4>
                </Col>
                <Col xs lg="1">
                    <button onClick= {() => {expandSoloListing()}}> Expand </button>
                </Col>
                <Col xs lg="2">
                    <h4>{soloListing.confirmed_hires}/{soloListing.total_positions}</h4>
                </Col>
                <Col xs lg="1">
                    <h4>{soloListing.posting_day}.{soloListing.posting_month}.{soloListing.posting_year}</h4>
                </Col>
                <Col xs lg="2">
                    <h4>{soloListing.posting_up_day_count} {(soloListing.posting_up_day_count <= 1) ? 'day' : 'days'}</h4>
                </Col>
            </Row>
            {
                soloListing.expanded && 
                    <Container fliud>
                        
                        <Row>
                            <br/>
                        </Row>
                        <Row>
                            <h2>All Applicants</h2>
                        </Row>
                        <Row>
                            <Col xs lg="3">
                                <Row>
                                    <Col xs lg="1">
                                    
                                    </Col>
                                    <Col>
                                        <Image src={generic_pic} thumbnail/>
                                        <div style={{ width: 150, fontSize: 14, marginTop: -5, paddingLeft: 60}}>
                                            <CircularProgressbarWithChildren value={90}>
                                                <strong> {90}% Completion</strong>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                    </Col>
                                </Row>
                                <Image src={sample_journee1}/>
                            </Col>
                            <Col/>
                            <Col xs lg="3">
                                <Row>
                                    <Col xs lg="1">
                                    
                                    </Col>
                                    <Col>
                                        <Image src={arnav_profile_pic} style={{ width:120 }} thumbnail/>
                                        <div style={{ width: 150, fontSize: 14, marginTop: -5, paddingLeft: 60}}>
                                            <CircularProgressbarWithChildren value={75}>
                                                <strong> {75}% Completion</strong>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                    </Col>
                                </Row>
                                <div>

                                </div>
                                <Image src={sample_journee2} style={{ width:300}}/>
                            </Col>
                        </Row>
                    </Container>  
            }
        </>
    );
}

export default Recruiter_review_applicants;