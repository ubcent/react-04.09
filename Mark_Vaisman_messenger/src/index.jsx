import './css/bootstrap.css';
import './css/main.css';

import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import Data from 'components/Data';
import Menu from 'components/Menu';
import Room from 'components/Room';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companionId: 0,
    };
  }
  
  openRoom = (companionId) => {
    this.setState({
      companionId: companionId,
    });
  };
  
  componentDidMount() {
    Data.getLastCompanionId(this);
  };
  
  render() {
    const {companionId} = this.state;
    return (
      <div className="container">
        <Menu openRoom={this.openRoom}/>
        <Room companion={companionId}/>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
