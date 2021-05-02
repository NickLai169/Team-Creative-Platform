import React from 'react';

import '../index.css';
import MyJurnee from './MyJurnee';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { List, Avatar, Button, Skeleton } from 'antd';
import{ WatchListData, RecommendationList } from './SidebarData'
import 'antd/dist/antd.css';




const Apply = () =>   {
    const loadMore =
    (
     <div
       style={{
         textAlign: 'center',
         marginTop: 12,
         height: 32,
         lineHeight: '32px',
       }}
     >
       <Button >loading more</Button>
     </div>
   )

    return (

        <div>
             <div id="wrapper">
           
            <div id="side-nav">
                <MyJurnee recruiter={true}/>
            </div>
            <div id="content-wrapper">
                <h1 className="watchlisttitle">Apply: (Drag your strides into each slot of application)</h1>
                <MyJurnee recruiter={false}/>
                <h1 className="compatibilityTitle">Jurnee comparison to application Jurnee</h1>
            <CircularProgressbar value={80} text={`${90}%`}  className="compatibility" /> 
             <h1 className="applyRecom">Recommendations to better your Jurnee</h1>
             <List
            className="recom-list"
            loading={false}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={RecommendationList}
            size={"large"}
            renderItem={item => (
              <List.Item
                actions={[<a key="list-loadmore-more" className="watchlistbutton" >more info</a>]}
                className="watchlistitem"
                
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={item.img}
                    title={<h className="watchlistitem">{item.title}</h>}
                    description={<h className="watchlistdesc">{item.description}</h>}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
            </div>
            </div>
            
        </div>
      );

}
export default Apply;