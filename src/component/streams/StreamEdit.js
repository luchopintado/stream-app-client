import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
    }

    onSubmit = formValues => {
        const { id } = this.props.match.params;
        this.props.editStream(id, formValues);
    }

    render () {
        if (!this.props.stream) {
            return 'loading ...';
        }

        return (
            <div>
                <h3>Edit a Stream: {this.props.stream.title}</h3>
                <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
