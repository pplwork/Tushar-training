import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
    const firebase = useFirebase();
    const naviagte = useNavigate();

    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                naviagte.push("/todos");
            });
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button
                onClick={(e)=>{
                    e.preventDefault();
                    signInWithGoogle();
                }}
            >
                Sign In with Google
            </button>
        </div>
    )
}


