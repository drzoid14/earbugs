import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {newUser} from '../actions'
import './signup.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



export class SignUp extends React.Component {
    onSubmit(values) {
        console.log(values);
        if(values.password !== values.confirmpass){
            alert('Passwords do not match')
            return
        } else{
            
            
        this.props.dispatch(newUser(values)); 
        

        
        }
    }
 



    render() {
        console.log(this.props.user)
        if(this.props.user){
            return(
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
                <label hmtlFor="confirmpass">Confirm Password</label>
                <Field name="confirmpass" id="confirmpass" type="password" component="input" />

                <button type="submit">Create</button>
            </form>
        )
    }
}

const mapStateToProps = state =>( {
    user: state.videoReducer.user
})
const SignUpConnected = connect(mapStateToProps)(SignUp)

export default reduxForm({
    form: 'create'
})(SignUpConnected);
