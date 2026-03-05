import './App.css';
import Contactus from './components/Contactus';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Forthcomponent from './components/Forthcomponent';
import Helpus from './components/Helpus';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is fun</h2>
      </header>

         {/* {Below we render /display/show our components} */}
        <Firstcomponent/>
        <Secondcomponent/>
        <Contactus/>
        <Helpus/>
        <Thirdcomponent/>
        <Forthcomponent/>
        <Fifthcomponent/>
    </div>
  );
}

export default App;

// jsx --java script ,html, css coe run file

// create two other components ie Contactus and help components and style them with your own content
// npm => node package module
// npx =>node package execute

// App,js is our root component