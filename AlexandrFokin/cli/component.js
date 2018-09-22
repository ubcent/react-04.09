/**
 * Утилита для создания компонентов
 * запускается командой
 * node cli/component.js --name название_компонента
 * или
 * npm run cc название_компонента
 * */

// работа с файловой системой в node
const fs = require('fs');
// нормализация путей к файлам
const path = require('path');
// работа с параметрами командной строки
const minimist = require('minimist');
// сохраняем параметры командной строки
const args = minimist(process.argv, {
  // алиас для параметра name
  alias: {
    name: 'n',
  }
});
// сохраняем название компонента
const componentName = args.name;

// создаем папку componentName в папке components
fs.mkdirSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName)
);

const componentCode = `import './${componentName}.scss';

import React, { PureComponent } from 'react';

/**
 * Класс ${componentName} - компонент, отображающий ****** на странице
 */
export default class ${componentName} extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      
    }
  }
  
  render() {    
    return (
      
    );
  }
}`;

// создаем файл jsx в папке componentName
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
  componentCode,
);

// создаем файл index.js в папке componentName
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
  `export {default} from './${componentName}';`
);

// создаем файл scss в папке componentName
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.scss`),
  ``
);