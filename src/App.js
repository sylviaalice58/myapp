import './App.css';
import Contactus from './components/Contactus';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Forthcomponent from './components/Forthcomponent';
import Helpus from './components/Helpus';
import Notfound from './components/Notfound';
import Secondcomponent from './components/Secondcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

      <nav>
        <Link to ="/first" className='navlinks'>First</Link>
        <Link to ="/second" className='navlinks'>Second</Link>
        <Link to ="/third" className='navlinks'>Third</Link>
        <Link to ="/forth" className='navlinks'>Forth</Link>
        <Link to ="/fifth" className='navlinks'>Fifth</Link>
        <Link to ="/sixth" className='navlinks'>Sixth</Link>
        <Link to ="/help" className='navlinks'>Help</Link>
        <Link to ="/contact" className='navlinks'>Contact Us</Link>
      </nav>

      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is fun</h2>
      </header>

        {/* {Below we render /display/show our components} */}
       <Routes>
          <Route path ="/first" element={<Firstcomponent />} />
          <Route path ="/second" element={<Secondcomponent/>} />
          <Route path ="/third" element={<Thirdcomponent/>}/>
          <Route path ="/forth" element={<Forthcomponent/>}/>
          <Route path ="/fifth" element={<Fifthcomponent/>}/>
          <Route path ="/sixth" element={<Sixthcomponent/>}/>
          <Route path ="/help" element={<Helpus/>}/>
          <Route path ="contact" element={<Contactus/>}/>
          <Route path = '*' element={<Notfound/>}/>


       </Routes>
      </div>
    </Router>
  );
}

export default App;

// jsx --java script ,html, css coe run file

// create two other components ie Contactus and help components and style them with your own content
// npm => node package module
// npx =>node package execute

// App,js is our root component