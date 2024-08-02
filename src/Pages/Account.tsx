//Firebase
import { initializeApp } from 'firebase/app'
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'firebase/analytics'
// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import React, {useState, useEffect, MouseEventHandler} from 'react';
import { redirect } from 'react-router-dom';
import { format } from 'path';
import { JsxElement } from 'typescript';
import {Input} from "../Components/index";

const firebaseConfig = {
    apiKey: "AIzaSyB8PDyw3B4DQYdy5I9w_dvMCsdg148rSNw",
    authDomain: "first-6b975.firebaseapp.com",
    databaseURL: "https://first-6b975-default-rtdb.firebaseio.com",
    projectId: "first-6b975",
    storageBucket: "first-6b975.appspot.com",
    messagingSenderId: "592664121888",
    appId: "1:592664121888:web:f81e69f5ad1529ba246245",
    measurementId: "G-82D7KK3HML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let userInfo = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    pass: "",
    confirmPass: ""
}
function Account(props: any) {
    let formType = props.formType;
    let [passHidden, togglePassDisplay] = useState(true);
    let [fnameError, setFnameError] = useState<JSX.Element>(<></>);
    let [lnameError, setLnameError] = useState<JSX.Element>(<></>);
    let [unameError, setUnameError] = useState<JSX.Element>(<></>);
    let [emailError, setEmailError] = useState<JSX.Element>(<></>);
    let [rqmDisplay, setRqmDisplay] = useState<JSX.Element>(<></>);
    let [confPassError, setConfPassError] = useState<JSX.Element>(<></>);
    let [authError, setAuthError] = useState<JSX.Element>(<></>)
    const hideErrDisplay = () => {
        setFnameError(<></>);
        setLnameError(<></>);
        setUnameError(<></>);
        setEmailError(<></>);
        setConfPassError(<></>);
        setAuthError(<></>);
    }
    const checkPass = () => {
        hideErrDisplay();
        let passRegex: RegExp[] = [/[A-Z]/, /[a-z]/, /\d/, /.{8,}/];
        setRqmDisplay(<>
            <p>Password requires:</p>
            <ul className='indent-3 mb-3'>
                <li className={userInfo.pass.match(passRegex[0])? "font-bold" : "font-normal"}>At least one uppercase letter</li>
                <li className={userInfo.pass.match(passRegex[1])? "font-bold" : "font-normal"}>At least one lowercase letter</li>
                <li className={userInfo.pass.match(passRegex[2])? "font-bold" : "font-normal"}>At least one digit</li>
                <li className={userInfo.pass.match(passRegex[3])? "font-bold" : "font-normal"}>At least 8 characters</li>
            </ul>
        </>)
        userInfo.pass = userInfo.pass.match(passRegex[0]) && userInfo.pass.match(passRegex[1])
            && userInfo.pass.match(passRegex[2]) && userInfo.pass.match(passRegex[3])? userInfo.pass : "";
    }
    const handleEntry : MouseEventHandler = async (event : any) => {
        event.preventDefault();
        if (formType === "Signup") {
            let isValid: boolean = true;
            for (let item in userInfo) {
                switch (item) {
                    case "fname":
                        console.log(userInfo);
                        if (userInfo[item] === "") {setFnameError(<p className="text-red-500">Required</p>); isValid = isValid && false}
                        continue;
                    case "lname":
                        if (userInfo[item] === "") {setLnameError(<p className="text-red-500">Required</p>); isValid = isValid && false}
                        continue;
                    case "username":
                        if (userInfo[item] === "") {setUnameError(<p className="text-red-500">Required</p>); isValid = isValid && false}
                        continue;
                    case "confirmPass":
                        if (userInfo[item] !== userInfo.pass) {setConfPassError(<p className="text-red-500">Passwords are not the same</p>); isValid = isValid && false}
                        continue;
                }
            }
            if (!isValid) {return;}
            if (!userInfo.email.match(/^[^@]+@[^@]+\.[^@]+$/) || userInfo.pass === "") {return;}
            await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(userCredential);
                    formType = "Login";
                    hideErrDisplay();
                    // Swal.fire({
                    //     title: "Account created",
                    //     text: "You're all set",
                    //     icon: "success"
                    // }).then();
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn(errorMessage, "\n", errorCode);
                    setAuthError(<p>Authentication failed. Check if email is valid</p>)
                    // ..
                });
        } else {
            await signInWithEmailAndPassword(auth, userInfo.email, userInfo.pass)
                .then((userCredential) => {
                    console.log(userCredential);
                    redirect("/home");
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMsg = error.message;
                    console.warn(errorCode, "\n", errorMsg);
                })
        }
    }
    const handleGoogleEntry : MouseEventHandler = async (event) => {
        event.preventDefault();
        await signInWithPopup(auth, provider)
            .then((result) => {
                let credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential);
                //React
                window.location.href = "/home";
            }).catch((error) => {
                const errorCode = error.code;
                const errorMsg = error.message;
            })
        }
    return (
        <div className="flex bg-fixed justify-center w-full pt-10">
            <form className="flex flex-col items-center shadow-sm shadow-black rounded-md w-4/12 py-5">
                {formType === "Signup"? <>
                    <Input eid="First-name" placeholder="First name" input_type="text" on_change={(event) => {
                        userInfo.fname = (event.target as HTMLInputElement).value;
                    }} on_focus={hideErrDisplay} error_display={fnameError}/>
                    <Input eid="Last-name" placeholder="Last name" input_type="text" on_change={(event) => {
                        userInfo.lname = (event.target as HTMLInputElement).value;
                    }} on_focus={hideErrDisplay} error_display={lnameError}/>
                    <Input eid="Username" placeholder="Username" input_type="text" on_change={(event) => {
                            userInfo.username = (event.target as HTMLInputElement).value;
                        }} on_focus={hideErrDisplay} error_display={unameError}/>
                </> : <></>}
                <Input eid="Email" placeholder="Email" input_type="text" on_change={(event) => {
                        if (!(event.target as HTMLInputElement).value.match(/^[^@]+@[^@]+\.[^@]+$/)) {setEmailError(<p>Incorrect format</p>);} else {hideErrDisplay();}
                        userInfo.email = (event.target as HTMLInputElement).value;
                    }} 
                on_focus={hideErrDisplay} error_display={emailError}/>
                <div className="Password flex flex-col w-9/12 mt-3">
                    <label htmlFor="Password-input">Password</label>
                    <div className="relative">
                        <input className="border-2 border-solid border-black rounded-md w-full" id="Password-input" type={passHidden? "password" : "text"} placeholder="Password" onChange={(event) => {
                            userInfo.pass = event.target.value;
                            checkPass();
                        }} onFocus={checkPass} onBlur={() => setRqmDisplay(<></>)}/>
                        <img className="absolute transform -translate-y-1/2 top-1/2 right-1 h-5/6 aspect-square" src={require("../Images/logo192.png")} onClick={() => {
                            togglePassDisplay(passHidden? false : true)
                        }}/>
                    </div>
                    {rqmDisplay}
                </div>
                {formType === "Signup"? <Input eid="Conf-pass" placeholder="Confirm password" input_type="text" on_change={(event) => {
                        userInfo.lname = (event.target as HTMLInputElement).value;
                    }} on_focus={hideErrDisplay} error_display={fnameError}/> : <></> }
                {authError}
                <input className='mt-3 rounded-md w-1/2 bg-gray-500 hover:bg-gray-300' id="Submit-btn" type="submit" value={formType === "Signup"? "Signup" : "Login"} onClick={handleEntry}/>
                <input className='mt-3 rounded-md w-1/2 bg-gray-500 hover:bg-gray-300' id="Submit-btn" type="submit" value={`${formType === "Signup"? "Signup" : "Login"} with Google`} onClick={handleGoogleEntry} />
            </form>
        </div>
    )
}

export default Account;