import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
//import firebase from 'firebase'
import "firebase/compat/app";
import { auth } from '../firebase'
import firebase from 'firebase/compat/app';

export default function Login() {
  return (
	<div id="login-page">
		<div id="login-card">
			<h2>Welcome To S Chat!</h2>

			<div class="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
			<GoogleIcon/> <span style={{margin: "Auto"}}>Sign in with Google</span>

			</div>
			<br/><br/>

			<div class="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())} >
			<FacebookIcon/> <span style={{margin: "Auto"}}>Sign in with Facebook</span>
			</div>
		</div>
	</div>
  )
}
