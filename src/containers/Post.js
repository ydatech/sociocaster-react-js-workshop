import React, { Component } from 'react';

// container style
import './styles/Todo.css';

// app components

// material-ui components
import CircularProgress from 'material-ui/CircularProgress';

// react-redux 
import { connect } from 'react-redux';
// redux
import { bindActionCreators } from 'redux';

// action creators
import * as postActions from '../redux/post/actions';

class Post extends Component {
    componentDidMount() {
        const { postActions } = this.props;

        postActions.loadPost();
    }

    render() {
        const { isFetching, items } = this.props.post

        if (isFetching) {
            return (
                <div className="Content">
                    <h1 className="Content-Title"> Posts </h1>
                    <div className="Content-Preload">
                        <CircularProgress />
                    </div>
                </div>
            );
        }
        return (
            <div className="Content">
                <h1 className="Content-Title"> Posts </h1>

            </div>
        )
    }
}

const mapStateToProps = ({ post }) => ({ post });

const mapDispatchToProps = (dispatch) => ({ postActions: bindActionCreators(postActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Post);