import React from 'react';
import './profile.css'
import {getProfile,deleteVideo} from '../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


export class Profile extends React.Component{

    

    componentDidMount(){
        const userId = this.props.match.params.userId
        this.props.dispatch(getProfile(userId))
        console.log(this.props)
        
       
    }

    render(){
        console.log(this.props.videoList)
        const videos = this.props.videoList.map(video =>
            <li key={video.id} className="folder-menu-list-item">
                <Link to={`/view/${video.id}`}>
                    -{video.title}
                </Link>
                <button type="button" id="deleteButton" onClick={e=>this.props.dispatch(deleteVideo(video.id))}>Delete </button>
            </li>
        )

    return(
    <div>
        <h1> Hi There</h1>
        <a href="/create">Create New</a>
        <ul className = "videos">
            {videos}
        </ul>
    </div>
    )
    }
}

const mapStateToProps = state => ({
    videoList: state.videoReducer.videoList
})

export default connect(mapStateToProps)(Profile)