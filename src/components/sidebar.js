import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './sidebar.css';

export function SideBar(props) {

    

    let userId = props.user ? props.user.id : null

    return (
    
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                <li><a href="/home">Home</a></li>
                <li><Link to ={`/profile/${userId}`}>
                    Profile
                    </Link>
                </li>
                <li><a href="/create">Create</a></li>
                <li><a href="/signin">Sign In</a></li>
                <li><a href="/signup"> Sign up</a></li>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.videoReducer.user
});

export default connect(mapStateToProps)(SideBar);
