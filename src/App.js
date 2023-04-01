import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import MainMenu from './components/MainMenu'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>Header App</Link>
        </header>

        <main>
          <Route exact path='/' component={MainMenu} />
          <Route exact path='/login' component={Login} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
