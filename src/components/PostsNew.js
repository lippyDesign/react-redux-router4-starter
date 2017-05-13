import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';

// import { fetchPosts } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        return <div className="form-group">
            <label>{field.label}</label>
            <input className="form-control" type="text" { ...field.input } />
        </div>
    }
    render() {
        return <div>
            <form>
                <Field label='Title' name='title' component={this.renderField} />
                <Field label='Categories' name='categories' component={this.renderField} />
                <Field label='Post Content' name='content' component={this.renderField} />
            </form>
        </div>
    }
}

// function mapStateToProps(state) {
//     return {posts: state.posts}
// }

export default reduxForm({
    form: 'PostsNewForm' // pretty much name of the form
})(PostsNew);