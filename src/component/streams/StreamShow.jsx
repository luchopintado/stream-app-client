import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
    }

    render() {
        const { stream } = this.props;
        if (!stream) {
            return <div>Loading ...</div>;
        }

        const { title, description } = stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const { id: streamId } = ownProps.match.params;
    return {
        stream: state.streams[streamId]
    };
};

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamShow);
