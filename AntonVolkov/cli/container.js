const fs = require('fs');
const path = require('path');

const createContainer = function (componentName) {

  containerName = `${componentName}Container`;

  const containerCode = `import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ${componentName} from 'components/${componentName}';

export default class ${containerName} extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <${componentName} />
    );
  }
}
  `;

  fs.writeFileSync(
      path.resolve(__dirname, '..', 'src', 'containers', `${containerName}.jsx`),
      containerCode,
  );
}

module.exports = createContainer;