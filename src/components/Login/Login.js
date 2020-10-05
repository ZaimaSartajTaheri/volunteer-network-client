import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import google from '../../utilities/logos/google.png';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import { handleGoogleSignIn, initializeFirebaseFramework } from '../firebaseConfig/firebaseManager';
initializeFirebaseFramework();
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const GoogleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                storeAuthToken();
                history.replace(from);
            })
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
            });
    }
    return (
        <div className="LogInPage">
            <p>Login With</p>
            <Button
                onClick={GoogleSignIn}
                variant="contained"
                className='socialIconButton'>
                <img className="socialIcon" src={google} alt='google' /><span className="socialIconText"> Continue with google</span>
            </Button>
            <p>Don't have an Account? <Link to="/login">Create an Account</Link></p>
        </div>
    );
};

export default Login;