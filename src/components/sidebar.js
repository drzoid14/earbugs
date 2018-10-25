import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../actions'
import './sidebar.css';

export function SideBar(props) {

    let login;
    let log;
    let userId = localStorage.id ? localStorage.id : null
    if(userId) {
        userId = <a href={`/profile/${userId}`}>Profile</a>
        log=<a href="/signin">Logout</a>
    } else {
        log = <a href="/signup">Sign Up</a>
        login= <a href="/signin">Log In</a>
    }
    
    return (
    
        <div className="dropdown">
  <button className="dropbtn">Menu</button>
  <div className="dropdown-content">
    <a href="/home">Home</a>
    {userId}
    {log}
    {login}
  </div>
</div>
    )
}

const mapStateToProps = state => ({
    user: state.videoReducer.user
});

export default connect(mapStateToProps)(SideBar);
