import React  from 'react';
import ReactDOM from 'react-dom';
import { List, Avatar, Button, Skeleton } from 'antd';
import{ WatchListData } from './SidebarData'
import 'antd/dist/antd.css';
import '../index.css';
import { useHistory } from "react-router-dom";






const WatchList = (props) =>   {
  const history = useHistory();


    // const { initLoading, loading, list } = this.state;
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
          
          <h1 className="watchlisttitle">Job Watch List</h1>
          <div></div>
          <div className="watchlistitem">
          <List
            className="demo-loadmore-list"
            loading={false}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={WatchListData}
            size={"large"}
            renderItem={item => (
              <List.Item
                actions={[<a key="list-loadmore-more" className="watchlistbutton" onClick={() => history.push('/apply')}>Apply</a>]}
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
      );

}
export default WatchList;