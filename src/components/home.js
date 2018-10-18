import React from 'react'
import './home.css'
import {getHome} from '../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



export class Home extends React.Component {

componentDidMount(){
    console.log(this.props)
    this.props.dispatch(getHome(null))}
    
    render(){
        console.log(this.props.videoList)
        const videos = this.props.videoList.map(video =>
            <li key={video.id} className="folder-menu-list-item">
                <Link to={`/view/${video.id}`}>
                    1 {video.title}
                </Link>
            </li>
        )
        return(
            <div className="Home">
                <p>Home</p>
                <ul>
                    {videos}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    videoList: state.videoReducer.videoList
})

export default connect(mapStateToProps)(Home)