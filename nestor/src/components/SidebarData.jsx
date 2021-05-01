import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import kiwi from '../images/kiwi.jpg'
import berk from '../images/berk.png'
import coursera from '../images/coursera.png'
import udemy from '../images/udemy.png'
import cannaboba from '../images/cannaboba.png'
import Image from 'react-bootstrap/Image'



export const SidebarData = [
{
    title: 'Overview',
    path: '/',
    icon: <AiIcons.AiFillAppstore />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    },
  {
    title: 'My Jurnee',
    path: '/myjurnee',
    icon: <FaIcons.FaWaveSquare />
  },
  {
    title: 'Applications',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Watch List',
    path: '/watchlist',
    icon: <AiIcons.AiFillHeart />
  },
  
  {
    title: 'Contacts',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];


export const WatchListData = [
    {
        title: 'Back End Software Engineer',
        description: 'We are looking for a Back-End Web Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end.',
        img: <Image src={kiwi} className="watchlistimg" />
        
        },
        {
            title: 'Product Marketing Lead',
            description: 'We are looking for an amazing, data-driven inbound marketer to own the majority of the marketing funnel for our company. You will be in charge of attracting site traffic, converting that traffic into new leads for the business, and nurturing those leads to close into customers, the latter of which sales leadership will help you accomplish.',
            img: <Image src={cannaboba} className="watchlistimg" />
            
            },
    ];

  export const RecommendationList = [
    {
        title: 'Digital Marketing Specialization',
        description: 'Drive Customer Behavior Online. A six-course overview of the latest digital marketing skills, taught by industry experts.',
        img: <Image src={coursera} className="watchlistimg" />
        
        },
        {
            title: 'Product Marketing Lead',
            description: 'A short course to help freelances and graphic design firm principals build more profitable and rewarding businesses.',
            img: <Image src={udemy} className="watchlistimg" />
            
            },
    ];

export const strides = [
  {
    title: 'Business & Administration',
    location: 'UC Berkeley',
    date: "2011 - 2014",
    img: <Image src={berk} className="vertical-timeline-element-img" roundedCircle/>,
    description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    
    },
    {
      title: 'Creative Director',
      location: 'Miami Florida',
      date: "",
      img: <Image src={kiwi} className="vertical-timeline-element-img" roundedCircle />,
      description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
      
      },
      {
        title: 'Creative Director',
        location: 'Miami Florida',
        date: "",
        img: <Image src={kiwi} className="vertical-timeline-element-img" roundedCircle />,
        description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
        
        },
        {
          title: 'Creative Director',
          location: 'Miami Florida',
          date: "",
          img: <Image src={kiwi} className="vertical-timeline-element-img" roundedCircle/>,
          description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
          
          },
];


export const recruiterStride = [
  {
    title: 'Education',
    location: '',
    date: "Bachelor in Businnes & Administration",
    img: <BsIcons.BsBookHalf/>,
    description: ""
    
    },
    {
      title: 'Experience',
      location: '',
      date: '2 years of marketing expereince ',
      img: <BsIcons.BsFillBriefcaseFill />,
      description: ""
      
      },
      {
        title: 'Skills',
        location: '',
        date:'Marketing, python, team leader',
        img: <BsIcons.BsScrewdriver />,
        description: ""
        
        },
        {
          title: 'Projects',
          location: '',
          date: "projects in marketing and managment",
          img: <AiIcons.AiOutlineProject /> ,
          description: ""
          
          },
          {
            title: 'Relevent CourceWork',
            location: '',
            date: "cources in marketing and busniess",
            img: <BsIcons.BsBookHalf/> ,
            description: ""
            
            },
];