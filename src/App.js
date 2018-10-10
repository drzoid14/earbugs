import React, { Component } from 'react';
import './App.css';
import YouTubeComponent from './components/youtube.js'
import ReduxForm from './components/form.js'
import {connect} from 'react-redux'
import {playButton} from './actions'


class App extends Component {
constructor(props){
  super(props)
  this.state={
    autoplay:0
  }
}

  render() {
    return (
      <div className="App" id="app">
        <h1>Nothing yet</h1>
        <div className="videoBox1">
            <YouTubeComponent video={this.props.video1} start={this.props.start1} end={this.props.end1} autoplay={this.state.autoplay} />
        </div>
        <div className="videoBox2">
            <YouTubeComponent video={this.props.video2} start={this.props.start2} end={this.props.end2}autoplay={this.state.autoplay} />
        </div>
        <button type="button" onClick={e=>{this.props.dispatch(playButton())}}>Play Now</button>
        <ReduxForm />
      </div>
    );
  }
}
App.defaultProps = {
  video1:'dQw4w9WgXcQ',
  video2:'v-Dur3uXXCQ'
};

export const mapStateToProps = state => ({
  video1: state.videoReducer.video1,
  video2: state.videoReducer.video2,
  start1: state.videoReducer.start1,
  start2: state.videoReducer.start2,
  end1: state.videoReducer.end1,
  end2: state.videoReducer.end2,
  autoplay: state.videoReducer.autoplay
});

export default connect(mapStateToProps)(App);

