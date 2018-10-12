import React from 'react';
import './profile.css'
import {getProfile} from '../actions'
import {connect} from 'react-redux'


export class Profile extends React.Component{

    

    componentDidMount(){
        const userId = this.props.match.params.userId
        this.props.dispatch(getProfile(userId))
    }

    render(){

    return(
    <div>
        <h1> Hi There</h1>
    </div>
    )
    }
}

const mapStateToProps = state => ({
    videoList: state.videoReducer.videoList
})

export default connect(mapStateToProps)(Profile)