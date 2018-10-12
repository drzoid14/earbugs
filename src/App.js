import React, { Component } from 'react';
import './App.css';
import YouTubeComponent from './components/youtube.js'
import ReduxForm from './components/form.js'
import {connect} from 'react-redux'
import {playButton} from './actions'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import SideBar from './components/sidebar.js'
import VideoBox from './components/videobox.js'
import Profile from './components/profile.js'
import ViewVideo from './components/viewvideo.js'
import SignUpForm from './components/signup.js'
import SignInForm from './components/signin.js'


class App extends Component {


  render() {
    return (
      <Router>
      <div className="App" id="app">
        <SideBar />
        <main>
            <Switch>
                <Redirect exact from="/" to="/home" />
                 <Route exact path="/profile/:userId" component={Profile} />
                 <Route exact path="/signin" component = {SignInForm} />
                 <Route exact path="/signup" component = {SignUpForm} />
                 <Route exact path="/create" component = {VideoBox} />
            </Switch>
        </main>
      </div>
      </Router>
        

    );
  }
}
export default App


