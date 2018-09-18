import React, { Component } from 'react';
import Post from '../Post/Post';

class MainPage extends Component {
  render() {
    const posts = [
      {
        tag: 'frontend',
        title: 'Post1',
        date: 'Sep. 13',
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis minus consequuntur quidem est! Id, expedita error accusantium molestias recusandae dolor eveniet ad reprehenderit optio eaque possimus nesciunt delectus provident?'
      },
      {
        tag: 'frontend',
        title: 'Post2',
        date: 'Sep. 13',
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis minus consequuntur quidem est! Id, expedita error accusantium molestias recusandae dolor eveniet ad reprehenderit optio eaque possimus nesciunt delectus provident?'
      },
      {
        tag: 'frontend',
        title: 'Post3',
        date: 'Sep. 13',
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis minus consequuntur quidem est! Id, expedita error accusantium molestias recusandae dolor eveniet ad reprehenderit optio eaque possimus nesciunt delectus provident?'
      }
    ];

    return (
      <div className="container mt-5">
        <div className="row">
          {posts.map((post, index) => (
            <Post
              key={index}
              tag={post.tag}
              title={post.title}
              date={post.date}
              text={post.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
