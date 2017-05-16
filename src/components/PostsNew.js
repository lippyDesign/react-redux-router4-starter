import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { label, meta: { touched, error } } = field;
        return <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
            <label>{label}</label>
            <input className="form-control" type="text" { ...field.input } />
            <div className="text-help">{touched ? error : ''}</div>
        </div>
    }
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label='Title' name='title' component={this.renderField} />
                <Field label='Categories' name='categories' component={this.renderField} />
                <Field label='Post Content' name='content' component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
        </div>
    }
}

const validate = ({ title, categories, content }) => {
    const errors = {};
    if (!title) errors.title = "Enter a title";
    if (!categories) errors.categories = "Enter some categories";
    if (!content) errors.content = "Enter some content";
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' // pretty much name of the form
})(
    connect(null, { createPost })(PostsNew)
);