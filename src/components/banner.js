import React from 'react'
import './banner.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { SideBar } from './sidebar';


export class Banner extends React.Component {

    

    render(){

        let userId = localStorage.id ? localStorage.id : null

        return(
            <div className="banner">
                <div className="menu">
                    <SideBar />
                </div>
                <h1>
                    EarBugs
                    </h1>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.videoReducer.user
});

export default connect(mapStateToProps)(Banner);