const minimist = require('minimist');

const createComponent = require('./component');
const createContainer = require('./container');
const createPage = require('./page');

const args = minimist(process.argv, {
    alias: { name: 'n', }
});


const componentName = args.name;
const className = camelCaseToKebabCase(args.name);

if (!componentName) return;

if (args.component) createComponent(componentName, className);
if (args.container) createContainer(componentName);
if (args.page) createPage(componentName, className);

function camelCaseToKebabCase(str){
    return str.replace(/[A-Z]/g, function (match, offset) {

        if (offset === 0) {
            return match.toLowerCase();
        }

        return '-' + match.toLowerCase();
    });
}

