import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import tiktok from "../images/tiktok.png"
import kiwi from '../images/kiwi.jpg'
import amazon from '../images/amazon.png'
import berk from '../images/berk.png'
import study from '../images/studyabroad.jpeg'
import uma from '../images/uma.png'
import thetachi from '../images/thetachi.png'
import notion from '../images/notion.png'
import boston from '../images/boston.png'
import santamonica from '../images/santamonica.png'
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


export const SidebarRecruiter = [
  {
      title: 'Overview',
      path: '/',
      icon: <AiIcons.AiFillAppstore />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      },
    {
      title: 'Job Listings',
      path: '/joblistings',
      icon: <FaIcons.FaWaveSquare />
    },
    {
      title: 'Add Job Listing',
      path: '/addjob',
      icon: <AiIcons.AiOutlinePlusCircle />
    },
    {
      title: 'Applicants',
      path: '/applicants',
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
            {
              title: 'Program Manager',
              description: 'We are looking for a Project Manager to be responsible for organizing programs and activities for our organization. You will be tasked with developing programs to support the organization\'s strategic direction, as well as creating and managing long term goals. You will also be in charge of developing budgets and operating plans for programs and writing program funding proposals.',
              img: <Image src={notion} className="watchlistimg" />
              
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
            {
              title: 'Marketing Intern',
              description: 'A short course to help freelances and graphic design firm principals build more profitable and rewarding businesses.',
              img: <Image src={udemy} className="watchlistimg" />
              
              },
    ];

export const strides = [
  {
    title: 'Rellocate to California',
    location: 'London, UK',
    date: "2011",
    img: <RiIcons.RiFlightTakeoffFill />,
    description: "Immigrated from London to California to live in the states with family"
    
    },
  {
    title: 'Business',
    location: 'Santa Monica Community College',
    date: "2011 - 2013",
    img: <Image src={santamonica} className="vertical-timeline-element-img" roundedCircle/>,
    description: "Business Administration, Python, Photoshop, Excel, Finance"
    
    },
    {
      title: 'Marathon Runner',
      location: 'Boston, MA',
      date: "2011-2012",
      img: <Image src={boston} className="vertical-timeline-element-img" roundedCircle />,
      description: "Trained and ran a 15k marathon"
      
      },
  {
    title: 'Business & Administration',
    location: 'UC Berkeley',
    date: "2013 - 2016",
    img: <Image src={berk} className="vertical-timeline-element-img" roundedCircle/>,
    description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
    
    },
      {
        title: 'Undergraduate Marketing Association',
        location: 'UC Berkeley',
        date: "2014-2015",
        img: <Image src={uma} className="vertical-timeline-element-img" roundedCircle />,
        description: "Marketing consulting for big firms such as Microsoft, Facebook, Jans, etc.  "
        
        },
        {
          title: 'Study Abroad',
          location: 'Barcelona, Spain',
          date: "Summer 2014",
          img: <Image src={study} className="vertical-timeline-element-img" roundedCircle/>,
          description: "Learned Spanish, international business and partipitated in Spain's start-up contest"
          
          },
          {
            title: 'President',
            location: 'Theta Chi, UC Berkeley',
            date: "2015-2016",
            img: <Image src={thetachi} className="vertical-timeline-element-img" roundedCircle/>,
            description: "President of lambda chapter, cordinating between nationals and house. In charge of all events and philantropy"
            
            },
          {
            title: 'Marketing Intern',
            location: 'Amazon',
            date: "Summer 2015",
            img: <Image src={amazon} className="vertical-timeline-element-img" roundedCircle/>,
            description: "Identify and measure KPI. Execute campain, work cross functionally with design and product team"
            
            },
            {
              title: 'TikTok Content Creator',
              location: 'Berkeley, CA',
              date: "2016-present",
              img: <Image src={tiktok} className="vertical-timeline-element-img" roundedCircle/>,
              description: "Identify and measure KPI. Execute campain, work cross functionally with design and product team",
              video: true
              
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