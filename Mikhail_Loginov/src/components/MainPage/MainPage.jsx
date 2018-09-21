import './MainPage.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';

export default class BlogPosts extends PureComponent {
  render() {
    return (
      <main>
        <Container>
          <h1>My Awesome React Project</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim iusto assumenda vel nulla, asperiores rerum laborum in quaerat quas nobis error ex aut consectetur. Quo animi consequatur consequuntur dolor, unde quisquam! In quisquam quasi, sed quidem harum est non rerum adipisci veritatis voluptates, consectetur qui facere vel nam sint debitis omnis laboriosam corporis quia explicabo labore commodi. Error fuga in, ad ullam facilis suscipit explicabo temporibus officia voluptate, sapiente natus repellat aspernatur sit eligendi iure odio ab! Voluptates sed cum ducimus, quo architecto esse cupiditate repudiandae, maxime, quibusdam tempore nisi! Sapiente accusantium iusto hic temporibus expedita! Voluptates, asperiores saepe.</p>
        </Container>
      </main>
    );
  }
}
