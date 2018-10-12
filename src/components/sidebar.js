import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './sidebar.css';

export function SideBar(props) {
    const folders = props.folderList.map(folder =>
        <li key={folder.id} className="folder-menu-list-item">
            <Link to={`/${folder.id}`}>
                {folder.name}
            </Link>
        </li>
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                <li><a href="/home">Home</a></li>
                <li><a href="/profile/">Profile</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="/signin">Sign In</a></li>
                <li><a href="/signup"> Sign up</a></li>
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(SideBar);
