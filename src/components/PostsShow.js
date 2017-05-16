import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => this.props.history.push('/'));
    }
    render() {
        if (!this.props.post) return <div />;
        const { title, categories, content } = this.props.post;
        return <div>
            <Link to='/'>Back</Link>
            <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
            <h3>{title}</h3>
            <h6>Categories: {categories}</h6>
            <p>{content}</p>
        </div>
    }
}

const mapStateToProps = ({ posts }, ownProps) => ({ post: posts[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);