import React from 'react';
import './videobox.css';
import YouTubeComponent from './youtube.js'
import ReduxForm from './form'
import {connect} from 'react-redux'



export class VideoBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
          autoplay:0
        }
      }

      componentDidMount(){
          console.log(this.props)
      }


    render(){
        console.log(this.props)
        return(
        <div className= "create New">
            <div className="videoBox1">
                <YouTubeComponent video={this.props.video1} start={this.props.start1} end={this.props.end1} autoplay={this.state.autoplay} />
            </div>
            <div className="videoBox2">
                <YouTubeComponent video={this.props.video2} start={this.props.start2} end={this.props.end2}autoplay={this.state.autoplay} />
            </div>
            <ReduxForm />
        </div>
        )
}

}
  
  export const mapStateToProps = state => ({
    video1: state.videoReducer.video1,
    video2: state.videoReducer.video2,
    start1: state.videoReducer.start1,
    start2: state.videoReducer.start2,
    end1: state.videoReducer.end1,
    end2: state.videoReducer.end2,
    autoplay: state.videoReducer.autoplay
  });
  
  export default connect(mapStateToProps)(VideoBox);
