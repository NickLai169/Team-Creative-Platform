import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {strides, recruiterStride} from './SidebarData'


const VerticalTimelineWrap = styled.div`
  background: #fff;

`;







const MyJurnee = (props) => {

    const [jurneeStrides, setJurneeStrides] = useState(strides)

    useEffect(() => {
        if (props.recruiter == true) {
            setJurneeStrides(recruiterStride)
        }
       
    }, [])
  return (
    <>
    <VerticalTimelineWrap>
      <VerticalTimeline animate={ Boolean } >
          {jurneeStrides.map((stride) => (
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(32,54,143,255)', color: '#6d6d6d' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(32,54,143,255)' }}
              date={stride.date}
              iconStyle={{ background: 'rgb(130,156,208,255)', color: '#fff' }}
              icon={stride.img}
          >
              <h3 className="vertical-timeline-element-title">{stride.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{stride.location}</h4>
              <p>
              {stride.description}
              </p>
          </VerticalTimelineElement>
          ))}
    </VerticalTimeline>
    </VerticalTimelineWrap>
    </>
  );
};

export default MyJurnee;