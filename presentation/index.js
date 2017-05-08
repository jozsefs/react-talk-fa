// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactLogo: require("../assets/react.svg"),
  xhpExample: require("../assets/xhp-example.png"),
  virtualDom: require("../assets/virtual-dom.png"),
  dontWorryAboutIt: require("../assets/dont-worry-about-it.gif"),
  aintNobodyGotTime: require("../assets/aint-nobody-got-time.gif"),
  suprisedCat: require("../assets/surprised-cat.gif"),
  thanksForComing: require("../assets/thanks-for-coming.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#222",
  secondary: "#fff",
  tertiary: "#02cdf2",
  quartenary: "#02cdf2"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary" >
          <Heading size={1} caps fit lineHeight={1} textColor="primary">
            Flying introduction to React.js
          </Heading>
          <Image src={images.reactLogo} height="400px" />
          <Text margin="10px 0 0" textColor="tertiary" size={6}>
            József Suba
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Introduction</Heading>
          <List>
            <Appear><ListItem>UI library</ListItem></Appear>
            <Appear><ListItem>Component based architecture</ListItem></Appear>
            <Appear><ListItem>Client and server side as well (Universal)</ListItem></Appear>
            <Appear><ListItem>Unidirectional data flow</ListItem></Appear>
            <Appear><ListItem>Introduces Virtual DOM</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} caps>React - Origins</Heading>
          <List>
            <Appear><ListItem>XHP (PHP extension)</ListItem></Appear>
            <Appear><ListItem>XML-like representation of the output</ListItem></Appear>
            <Appear><Image src={images.xhpExample} /></Appear>
            <Appear><ListItem>XSS prevention</ListItem></Appear>
            <Appear><ListItem>Too many roundtrips to server</ListItem></Appear>
            <Appear><ListItem>Javascript port -> React.js!</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Virtual DOM</Heading>
          <List>
            <Appear><ListItem>DOM manipulation is expensive</ListItem></Appear>
            <Appear><ListItem>Abstraction of the HTML DOM</ListItem></Appear>
            <Appear><ListItem>Observes changes -> patches the DOM</ListItem></Appear>
            <Appear><Image src={images.virtualDom} height="300px" /></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Components</Heading>
          <List>
            <Appear><ListItem textSize="2rem">Component names must be capitalized</ListItem></Appear>
            <Appear><ListItem textSize="2rem">Non-capitalized component names = HTML tags</ListItem></Appear>
            <Appear><ListItem textSize="2rem">They receive props which are immutable</ListItem></Appear>
            <Appear><ListItem textSize="2rem">They can contain other components as children</ListItem></Appear>
            <Appear><ListItem textSize="2rem">Must have a single root element</ListItem></Appear>
            <Appear><ListItem textSize="2rem">Components created via extended class/createClass() have lifecycle methods and state</ListItem></Appear>
            <Appear><ListItem textSize="2rem">Components must act as Pure functions with respect to their props</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Hello world (ES5)</Heading>
          <List>
            <CodePane
                lang="js"
                source={require("raw-loader!../assets/hello-world-basic.example")}
                margin="20px auto"
            />
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - API (ES5)</Heading>
          <List>
            <Appear><ListItem>React.DOM.h1, React.DOM.h2, ...etc</ListItem></Appear>
            <Appear><ListItem>React.createElement</ListItem></Appear>
            <Appear><ListItem>React.createFactory</ListItem></Appear>
            <Appear><ListItem>React.createClass</ListItem></Appear>
            <Appear><ListItem>getInitialState()</ListItem></Appear>
            <Appear><ListItem>getInitialProps()</ListItem></Appear>
            <Appear><ListItem>componentWillMount()</ListItem></Appear>
            <Appear><ListItem>componentWillReceiveProps()</ListItem></Appear>
            <Appear><ListItem>...</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Image src={images.dontWorryAboutIt} height="500px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Component Lifecycle (ES6)</Heading>
          <List>
            <Appear><ListItem textSize="2.25rem">Mounting via ReactDOM or other Component</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">componentWillMount()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">render()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">componentDidMount()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">| setState() -> shouldComponentUpdate()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">| render()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">| componentDidUpdate()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">componentWillUnmount()</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - JSX</Heading>
          <List>
            <Appear><ListItem>XML like markup</ListItem></Appear>
            <Appear><ListItem>Represents objects</ListItem></Appear>
            <Appear><ListItem>Compiles to javascript</ListItem></Appear>
            <Appear><ListItem>Evaluates embedded javascript</ListItem></Appear>
            <Appear><ListItem>Prevents XSS</ListItem></Appear>
            <Appear><ListItem>Props, children</ListItem></Appear>
            <Appear><ListItem>Alternatives for reserved words (className, htmlFor)</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Hello world (JSX)</Heading>
          <List>
            <CodePane
                lang="js"
                source={require("raw-loader!../assets/hello-world-jsx.example")}
                margin="20px auto"
            />
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - JSX compiles to ES5</Heading>
          <Appear>
            <iframe width="1000" height="800" src="https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&code="></iframe>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Components API (ES6)</Heading>
          <List>
            <Appear><ListItem>Functional (Stateless) Components</ListItem></Appear>
            <Appear>
              <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/functional-component.example")}
                  margin="20px auto"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Components API (ES6)</Heading>
          <List>
            <Appear><ListItem>Stateful Components</ListItem></Appear>
            <Appear>
              <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/stateful-component.example")}
                  margin="20px auto"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Reconciliation (Stack)</Heading>
          <List>
            <Appear><ListItem textSize="2.25rem">Component's render() creates new tree</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Diffing algorithm compares the new & old trees</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Changes are batched together on the diffs</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Changes are patched to DOM via virtual DOM</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Reconciliation (Fiber)</Heading>
          <List>
            <Appear><ListItem>Performance improvements over Stack</ListItem></Appear>
            <Appear><ListItem>Work is split into chunks</ListItem></Appear>
            <Appear><ListItem>Can prioritize chunks</ListItem></Appear>
            <Appear><ListItem>Low priority computations are handled in idle state</ListItem></Appear>
            <Appear><ListItem>Backwards compatibility</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <iframe width="896" height="504" src="https://www.youtube.com/embed/Qu_6ItnlDQg" frameborder="0" allowfullscreen></iframe>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>React - Best Practices</Heading>
          <List>
            <Appear><ListItem textSize="2.25rem">ES6 + tooling</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Thinking in components</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Short circuits in render() (but avoid nesting)</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Avoid unnecessary re-renders</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Avoid closures in render()</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Bind callback methods in constructor</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">setState(callback)</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">propTypes - documentation & type check</ListItem></Appear>
            <Appear><ListItem textSize="2.25rem">Reuse - don't reinvent the wheel</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>Tooling - Basics</Heading>
          <List>
            <Appear><ListItem>Npm / Yarn</ListItem></Appear>
            <Appear><ListItem>Babel (react and es2015 presets)</ListItem></Appear>
            <Appear><ListItem>Webpack</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>Tooling - Basic setup</Heading>
          <List>
            <Appear><Heading size={6}>You only need to install & configure:</Heading></Appear>
            <Appear><ListItem>autoprefixer</ListItem></Appear>
            <Appear><ListItem>babel-core</ListItem></Appear>
            <Appear><ListItem>babel-eslint</ListItem></Appear>
            <Appear><ListItem>babel-jest</ListItem></Appear>
            <Appear><ListItem>babel-loader</ListItem></Appear>
            <Appear><ListItem>babel-preset-react-app</ListItem></Appear>
            <Appear><ListItem>babel-runtime</ListItem></Appear>
            <Appear><ListItem>... and about 30 more packages</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Image src={images.aintNobodyGotTime} height="500px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>Tooling - Create React App</Heading>
          <List>
            <Appear><ListItem>Helps you start app development without configuring the build process</ListItem></Appear>
            <Appear>
              <CodePane
                  lang="sh"
                  source={require("raw-loader!../assets/create-react-app.example")}
                  margin="20px auto"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>Tooling / Ecosystem</Heading>
          <List>
            <Appear><Image src={images.suprisedCat} height="400px" /></Appear>
            <Appear><ListItem>Hot Module Reload</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={6} caps>Tooling / Ecosystem</Heading>
          <List>
            <Appear><ListItem>Routing: React Router</ListItem></Appear>
            <Appear><ListItem>State management: Redux / Mobx</ListItem></Appear>
            <Appear><ListItem>Testing: Jest + Enzyme</ListItem></Appear>
            <Appear><ListItem>Native: React Native, Expo</ListItem></Appear>
            <Appear><ListItem>Drop-ins: React-lite, Preact, Inferno</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Heading size={3} caps>Demos & stuff</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary"  textColor="tertiary">
          <Image src={images.thanksForComing} height="400px" />
        </Slide>
      </Deck>
    );
  }
}
