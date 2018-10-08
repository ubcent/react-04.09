import './BlogPage.scss';

import React, { PureComponent } from 'react';

import Counter from 'components/Counter';
import BlogPost from 'components/BlogPost';

// Посты для блога
// TODO передать из json
const posts = [
  {
    id: '1',
    title: 'Sample blog post',
    date: '01.01.2014',
    author: 'Mark',
    message: `This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.

* * *

Cum sociis natoque penatibus et magnis [dis parturient montes](#), nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

> Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta _sem malesuada magna_ mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

## Heading

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

    Example code block

Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.

### Sub-heading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

*   Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
*   Donec id elit non mi porta gravida at eget metus.
*   Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1.  Vestibulum id ligula porta felis euismod semper.
2.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3.  Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.

`,
  },
  {
    id: '2',
    title: 'Another blog post',
    date: '23.12.2013',
    author: 'Jacob',
    message: `Cum sociis natoque penatibus et magnis [dis parturient montes](#), nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

> Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta _sem malesuada magna_ mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
  },
  {
    id: '3',
    title: 'New feature',
    date: '14.12.2013',
    author: 'Chris',
    message: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

*   Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
*   Donec id elit non mi porta gravida at eget metus.
*   Nulla vitae elit libero, a pharetra augue.

Etiam porta _sem malesuada magna_ mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.`,
  },
];

/**
 * Класс BlogPage - компонент, отображающий страницу с блогами
 */
export default class BlogPage extends PureComponent {
  render() {
    // Отображаем main
    return (
      <main className="container">
        <div className="blog_header">
          <h1>
            The Bootstrap Blog
          </h1>
          <p>
            The official example template of creating a blog with Bootstrap.
          </p>
        </div>
        <div className="row">
          <div className="col-7">
            {/* выводим все посты */}
            <div className="posts">
              {posts.map( (post, idx) => <BlogPost post={post} key={idx}/>)}
            </div>
          </div>
          <div className="col"/>
          <div className="col-4">
            <Counter/>
          </div>
        </div>
      </main>
    );
  }
}