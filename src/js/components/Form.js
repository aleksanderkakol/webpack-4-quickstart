import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from 'uuid';
import {addArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
};

class ConnectedForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            title:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    
    onSubmit(e) {
        e.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({
            title:''
        })
    };
    
    
    render(){
        const {title} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className='form-control'
                        id='title'
                        value={title}
                        onChange={this.onChange}
                    />
                </div>
                <button type='submit' className='btn btn-succes btn-lg'>Save</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;