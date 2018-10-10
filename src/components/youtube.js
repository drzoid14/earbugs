import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubeComponent extends React.Component {

    timerToSeconds(minutes){
        if(!minutes){
            return null
        }
        const values = minutes.split(":")
        let total = values[values.length-1]*1;
        if(values.length > 2){
            total += values[0]*60*60+values[1]*60
        } else if(values.length > 1) {
            total += values[0]*60
        }
        console.log(total)
        return total;
    }

 

  render() {


      
    const opts = {
      height: '50%',
      width: '50%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: this.props.autoplay,
        start: this.timerToSeconds(this.props.start),
        end: this.timerToSeconds(this.props.end),
      }

      
    };
    console.log('opts',opts)
    return (
      <YouTube
        videoId={this.props.video}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeComponent
