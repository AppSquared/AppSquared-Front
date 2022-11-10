import React from 'react';
import FeedItem from './FeedItem';


function Feed() {

  const apps = [
    {
      title: 'Test1',
      subject: 'Subject1',
    },
    {
      title: 'Test2',
      subject: 'Subject2',
    },
    {
      title: 'Test3',
      subject: 'Subject3',
    },
  ];
  return (
    <div id='feed-main-div'>
      <h1>Feed</h1>
        <hr/>
    {apps.map((app)=>{
      return <FeedItem key={app.title} title={app.title} subject={app.subject}/>
    })}
    </div>
  );
}

export default Feed;
