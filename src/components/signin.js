import React from 'react'
import './signin.css'
import {signIn, getAuth} from '../actions'
import {reduxForm, Field} from 'redux-form';
import {connect} from 'net'

export class SignIn extends React.Component {
    onSubmit(values) {
        console.log(values);
        
     
        this.props.dispatch(signIn(values));
        this.props.dispatch(getAuth(values))
             
        
        
    }
 



    render() {
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

export default reduxForm({
    form: 'create'
})(SignIn);
