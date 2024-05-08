import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var Footer = function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        React.createElement(
            'p',
            null,
            'All rights reserved! \xA9'
        )
    );
};

var rootElement = document.getElementById("root");

var reactRootElement = ReactDOM.createRoot(rootElement);

var reactHeadingElement = React.createElement("h1", {}, "Hello heading");
var reactSecondHeading = React.createElement("h4", {}, "Second header!");
var header = React.createElement("header", { color: "red" }, reactHeadingElement, reactSecondHeading);

var headerJSX = React.createElement(
    'div',
    { className: 'site- header' },
    React.createElement(
        'h1',
        null,
        'hello h1'
    ),
    React.createElement(
        'h5',
        null,
        'hello h5'
    ),
    React.createElement(
        'p',
        null,
        'something else here'
    ),
    React.createElement(
        'p',
        null,
        'something else here'
    ),
    React.createElement(
        'p',
        null,
        'something else here'
    ),
    React.createElement(
        'p',
        null,
        'something else here'
    ),
    React.createElement(Footer, null)
);

reactRootElement.render(headerJSX);