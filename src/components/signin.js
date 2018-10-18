import React from 'react'
import './signin.css'
import {getAuth} from '../actions'
import {reduxForm, Field} from 'redux-form';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export class SignIn extends React.Component {
    onSubmit(values) {
        console.log(values);
        
     
        this.props.dispatch(getAuth(values))
        
             
        
        
    }
 



    render() {
        console.log(this.props.user)
        if(this.props.user){
            return (
                <Redirect to="/home" />
            )
        }

        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
                <label htmlFor="username">Username</label>
                <Field name="username" id="username" type="text" component="input" placeholder="Choose Your Name" />
                <label hmtlFor="password">password</label>
                <Field name="password" id="password" type="password" component="input" />


                <button type="submit">Sign In</button>
            </form>
        )
    }
}
const mapStateToProps = state =>( {
    user: state.videoReducer.user
})
const SignInConnected = connect(mapStateToProps)(SignIn)

export default reduxForm({
    form: 'create'
})(SignInConnected);


