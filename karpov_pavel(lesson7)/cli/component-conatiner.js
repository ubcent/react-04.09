const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const args = minimist(process.argv, {
    alias: { name: 'n', }
});

const componentName = args.name;

fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', componentName));

const componentCode = `import './${componentName}.css';

import React, { PureComponent } from 'react';

export default class ${componentName} extends PureComponent {
 
    render() {       
        return (  
           null
        );
    }
}
`;

fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`), 
componentCode, 
);
fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'), 
`export {default} from './${componentName}';`, 
);
fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`), '');

const containerCode = `import React, { PureComponent } from 'react';

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
containerCode, 
);