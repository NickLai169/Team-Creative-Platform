import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as BsIcons from 'react-icons/bs';

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
            open_positions: 30,
            total_positions: 50,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 67, 
        },
        {
            job_id: 2,
            job_title: "SWE Intern: Backend Database",
            open_positions: 25,
            total_positions: 30,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 67, 
        },
        {
            job_title: "Marketing Intern",
            open_positions: 10,
            total_positions: 10,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 67, 
        },
        {
            job_id: 3,
            job_title: "Associate Product manager",
            open_positions: 25,
            total_positions: 30,
            posting_day: 25,
            posting_month: 10,
            posting_year: 2020,
            posting_up_day_count: 67, 
        },
    ]);

    const listJobs = jobListing.map((job) =>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
                <h4>{job.job_title}</h4>
            </Col>
            <Col xs lg="2">
                <h4>{job.open_positions}/{job.total_positions}</h4>
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
            
        </>
    );
}

export default Recruiter_review_applicants;