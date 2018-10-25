import React from 'react';
import './form.css';
import {reduxForm, Field} from 'redux-form';
import {postComparison} from '../actions'
import { withRouter } from 'react-router'



export class CreateComparison extends React.Component {

    

    onSubmit(values) {
        console.log(values);
        if(values.video1.indexOf('?')){
            values.video1 = new URLSearchParams(values.video1.split('?')[1]).get('v')
        }
        if(values.video2.indexOf('?')){
            values.video2 = new URLSearchParams(values.video2.split('?')[1]).get('v')
        }
        return this.props.dispatch(postComparison(values));


        

        
        
        
    }
 



    render() {



        return (
            <form id="createForm" onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
            )}>
                <label for="video1" htmlFor="video1">Video 1</label>
                <Field name="video1" id="video1" type="text" component="input" placeholder="Enter YouTube url" required />
                <label htmlFor="video2">Video 2</label>
                <Field name="video2" id="video2" type="text" component="input" placeholder="Enter YouTube url" required />
                <label hmtlFor="start1">Video 1 Start</label>
                <Field name="start1" id="start1" type="text" component="input" placeholder="0:00 format" required />
                <label hmtlFor="start2">Video 2 Start</label>
                <Field name="start2" id="start2" type="text" component="input" placeholder="0:00 format" required />
                <label hmtlFor="end1">Video 1 End</label>
                <Field name="end1" id="end1" type="text" component="input" placeholder="0:00 format" required />
                 <label hmtlFor="end2">Video 2 End</label>
                <Field name="end2" id="end2" type="text" component="input" placeholder="0:00 format" required />
                <label hmtlFor="title">Comparison Title</label>
                <Field name="title" id="title" type="text" component="input" required />
                <button type="submit">Create</button>
            </form>
            
        )
    }
}

export default withRouter(reduxForm({
    form: 'create',
    onSubmitSuccess: (result, dispatch, props) => {
        console.log('onSuccess Called')
        console.log(props)
        props.history.push(`/profile/${localStorage.id}`)
    }
})(CreateComparison));
