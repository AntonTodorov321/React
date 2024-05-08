import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const Footer = () => (
    <div className='site-footer'>
        <p>All rights reserved! &copy;</p>
    </div>
);

const rootElement = document.getElementById("root");

const reactRootElement = ReactDOM.createRoot(rootElement);

const reactHeadingElement = React.createElement("h1", {}, "Hello heading");
const reactSecondHeading = React.createElement("h4", {}, "Second header!");
const header = React.createElement("header", { color: "red" }, reactHeadingElement, reactSecondHeading);

const headerJSX = (
    <div className='site- header'>
        <h1>hello h1</h1>
        <h5>hello h5</h5>
        <p>something else here</p>
        <p>something else here</p>
        <p>something else here</p>
        <p>something else here</p>
        <Footer />
    </div>
);

reactRootElement.render(headerJSX);
