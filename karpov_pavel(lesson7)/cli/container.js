const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const args = minimist(process.argv, {
    alias: { name: 'n', }
});

const componentName = args.name;

const componentCode = `import React, { PureComponent } from 'react';

import ${componentName} from 'components/${componentName}';

export default class ${componentName}Container extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }  
    render() {       
        return (  
            <${componentName} />       
        );
    }
}
`;

fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'containers', `${componentName}Container.jsx`), 
componentCode, 
);