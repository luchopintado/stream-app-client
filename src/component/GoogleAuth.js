import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
    // On mount, try to restore session from stored token
    useEffect(() => {
        const storedToken = localStorage.getItem('google_token');
        if (storedToken) {
            axios
                .get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${storedToken}` },
                })
                .then((resp) => {
                    signIn(resp.data.sub);
                })
                .catch(() => {
                    localStorage.removeItem('google_token');
                });
        }
    }, []);

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const accessToken = tokenResponse.access_token;
            localStorage.setItem('google_token', accessToken);
            try {
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    { headers: { Authorization: `Bearer ${accessToken}` } }
                );
                signIn(userInfo.data.sub);
            } catch (error) {
                console.error('Failed to fetch user info:', error);
            }
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const onSignOutClick = () => {
        googleLogout();
        localStorage.removeItem('google_token');
        signOut();
    };

    const onSignInClick = () => {
        login();
    };

    const renderAuthButton = () => {
        if (isSignedIn) {
            return (
                <button className="ui red google button" onClick={onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        return (
            <button className="ui red google button" onClick={onSignInClick}>
                <i className="google icon" />
                Sign in with Google
            </button>
        );
    };

    return renderAuthButton();
};

const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

