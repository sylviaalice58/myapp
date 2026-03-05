import './App.css';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Helpus from './components/Helpus';
import Secondcomponent from './components/Secondcomponent';

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
    </div>
  );
}

export default App;

// jsx --java script ,html, css coe run file

// create two other components ie Contactus and help components and style them with your own content
