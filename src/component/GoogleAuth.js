import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = {
        isSignedIn: null,
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '831918400392-hu7d8vnth1ihk2pi5sfuo216p6seour2.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }

    onClick = () => {

    }

    renderAuthButton () {
        const { isSignedIn } = this.state;
        if (isSignedIn === null) {
            return <div>I dont know if we are signed in</div>
        } else if (isSignedIn === true) {
            return <div>I'm signed in</div>
        } else {
            return <div>Google Auth</div>;
        }
    }

    render () {
        return this.renderAuthButton();
    }
}

export default GoogleAuth;
