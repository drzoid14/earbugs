import React from 'react';
import './form.css';
import {reduxForm, Field} from 'redux-form';
import {setVideo1, setVideo2, setStart1, setStart2, setEnd1, setEnd2} from '../actions'
import { connect } from 'net';



export class CreateComparison extends React.Component {
    onSubmit(values) {
        console.log(values);
     
        this.props.dispatch(setVideo1(values.video1))
        this.props.dispatch(setVideo2(values.video2))
        this.props.dispatch(setStart1(values.start1))
        this.props.dispatch(setStart2(values.start2))
        this.props.dispatch(setEnd1(values.end1))
        this.props.dispatch(setEnd2(values.end2))
        
        
        
    }
 



    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
                <label htmlFor="video1">Video 1</label>
                <Field name="video1" id="video1" type="text" component="input" placeholder="enter youtube video id" />
                <label hmtlFor="start1">Video 1 Start</label>
                <Field name="start1" id="start1" type="text" component="input" />
                <label hmtlFor="end1">Video 1 End</label>
                <Field name="end1" id="end1" type="text" component="input" />
                <label htmlFor="video2">Video 2</label>
                <Field name="video2" id="video2" type="text" component="input" />
                <label hmtlFor="start2">Video 2 Start</label>
                <Field name="start2" id="start2" type="text" component="input" />
                <label hmtlFor="end2">Video 2 End</label>
                <Field name="end2" id="end2" type="text" component="input" />
                <button type="submit">Create</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'create'
})(CreateComparison);
