const fs = require('fs');
const path = require('path');

const createComponent = function (componentName, className) {

    fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'pages', componentName));

    const componentCode = `import './${componentName}.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ${componentName} extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};
      
  render() {
    const {} = this.props;

    return (
      <div className="${className}"></div>
    );
  }
}
    `;

    fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'pages', componentName, `${componentName}.jsx`),
        componentCode,
    );

    fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'pages', componentName, 'index.js'),
        `import ${componentName} from './${componentName}';
        
export default ${componentName};`
    );

    fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'pages', componentName, `${componentName}.css`),
        `.${className} {}
      `
    );
}

module.exports = createComponent;