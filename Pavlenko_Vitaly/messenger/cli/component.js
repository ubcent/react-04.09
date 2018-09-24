const fs = require('fs');
const path = require('path');

const minimist = require('minimist');
const args = minimist(process.argv, {
    alias: { name: 'n', }
});

const componentName = args.name;

fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', componentName));

const componentCode = `import './${componentName}.scss';

import React, { PureComponent } from 'react';

export default class ${componentName} extends PureComponent {

    render() {
        return (
            <div></div>
        );
    }
}`;

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    `export default from './${componentName}';`,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.scss`),
    `.${componentName} {
}`,
);