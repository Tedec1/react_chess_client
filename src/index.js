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
                    <Link to="/Lobby"> Lobby</Link>
                    <Link to="/Board"> Practice Board</Link>
                    <Link to='/'> Home </Link>
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