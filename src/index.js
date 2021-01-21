import React from 'react';
import ReactDOM from 'react-dom';
import Lobby from './Lobby';
import Home from './Home';
import Board from './Board';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = (props) => {
    return  <>  
                <nav>
                    <Link to='/'>Home </Link>
                    <Link to="/Lobby">Lobby's</Link>
                    <Link to="/Board">Practice Board</Link>
                </nav> 
                <main>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/Lobby'>
                        <Lobby />
                    </Route>
                    <Route path='/Board'>
                        <Board />
                    </Route>
                </main>
            </>
}

ReactDOM.render( <Router><App /></Router>, document.getElementById('app'));