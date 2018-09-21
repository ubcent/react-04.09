import './LastArtcle.scss';

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

export default class LastArtcle extends PureComponent {
  render() {
    return (
      <div className="LastArtcle container" >
          <img className={"preview-img"} src="content/Post1.jpg" alt="last post preview"/>
          <div className="row justify-content-center">
              <div className="preview col-10">
                  <span className={"category"}>photodiary</span>
                  <h3>The perfect weekend</h3>
                  <p className="preview-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda at consequatur consequuntur, cum deserunt doloremque dolorum eos et expedita, explicabo fuga fugit id illo impedit iusto maiores nam neque nihil perspiciatis porro quas qui quia quidem repellendus rerum ullam, unde velit veritatis vitae. Ab ad aliquid amet aperiam beatae blanditiis consequatur corporis cum cumque dicta dolorem enim eos et, eum eveniet expedita facere ipsam iure laboriosam molestiae natus necessitatibus, neque obcaecati quae quas quasi quis quo quod ratione repellendus similique sunt voluptatem voluptatum? Asperiores esse fugiat fugit iste laborum officia porro, provident quasi qui similique sit soluta unde ut.
                  </p>
                  <Link to="/blog" className={"article-link"}>read more</Link>
              </div>
          </div>
          
      </div>
    );
  }
}
