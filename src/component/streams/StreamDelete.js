import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui red button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream';
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
    }

    render () {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        stream: state.streams[id]
    };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
