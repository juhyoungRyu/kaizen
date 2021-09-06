import React from 'react';
import './App.css';
import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
              <Route path="/">
                <DayList/>
              </Route>
              <Route path="/day">
                <Day/>
              </Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
