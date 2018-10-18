import React from 'react'
import './view.css'
import YouTubeComponent from './youtube.js'
import { connect } from 'react-redux'
import {getFile} from '../actions'

export class View extends React.Component{

    componentDidMount(){

        const videoId = this.props.match.params.videoId;
        this.props.dispatch(getFile(videoId));

    }



    render() {
        return(
            <div className="view-box" >
                <YouTubeComponent video={this.props.video1} start={this.props.start1} end={this.props.end1} />
                <YouTubeComponent  video={this.props.video2} start={this.props.start2} end={this.props.end2}/>
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
 
  });

export default connect(mapStateToProps)(View)