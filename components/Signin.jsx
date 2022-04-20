import React, { useState } from 'react';
import Link from 'next/link'
import { GoogleLogin } from "react-google-login"
import { FaGoogle } from 'react-icons/fa'
import firebase from '../config/index.js';
import { useRouter } from 'next/router'
// // import { authenticate } from '../redux/actions';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Signin = ({ inType }) => {
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: "AUTH", data: { result, token } })
            history.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = () => {
        console.log("Google Login Failure...")
    }
    const router = useRouter()
    // const dispatch = useDispatch();
    // const classes = useStyles();
    // const [open, setOpen] = React.useState(false);
    // const handleClose = () => {
    //     setOpen(false);
    // };

    const [email, setemail] = useState(null);
    const [isEmailValidate, setIsEmailValidate] = useState(false);
    const [isPasswordValidate, setIsPasswordValidate] = useState(false);
    const [showError, setShowError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [password, setpassword] = useState(null);

    const signUp = e => {
        e.preventDefault();
        if (confirmPassword != password) return;
        console.log(`Email and Passwords are ==> ${email} & ${password}`)
        if (isEmailValidate && isPasswordValidate) {
            alert("Verify your email address for login");
            // setOpen(!open);
            // firebase?.auth()?.createUserWithEmailAndPassword(
            //     email,
            //     password
            // ).then(userCredential => {
            //     // console.log('=====', user)
            //     userCredential.user.sendEmailVerification();
            //     firebase.auth().signOut();
            //     alert("Verify your email address for login");

            //     history.push("/login")
            //     setOpen(false);


            // }).catch(err => {
            //     // console.log("Error ==> ", err)
            //     alert(err.message)
            //     setOpen(false);

            // })
            // setlname('')
            // setfname('')
            // setemail('')
            // setpassword('')
        } else {
            setShowError(true)
        }
    }


    const signIn = e => {
        console.log('in1')
        e.preventDefault();
        console.log(`Email and Passwords are ==> ${email} & ${password}`)
        if (isEmailValidate && isPasswordValidate) {
            alert("Successfully login");
            console.log('in2')
            // setOpen(!open);
            console.log(firebase)
            // firebase?.auth()?.signInWithEmailAndPassword(
            //     email,
            //     password
            // ).then(data => {
            //     // sessionStorage.setItem("email", data.user.email)
            //     console.log('in3')
            //     const user = firebase.auth().currentUser;
            //     const emailVerified = user.emailVerified;
            //     if (!emailVerified) {
            //         console.log('in4')
            //         alert('First confirm your email address!')
            //         // setOpen(false);
            //         return;
            //     }

            //     // setOpen(false);
            //     // dispatch(authenticate(data.user.uid, data.user.email));
            //     localStorage.setItem('user', data.user.email.toLowerCase());
            //     router.push('/')
            //     localStorage.removeItem('admin')
            //     console.log('user has set', localStorage.getItem('user'))
            //     //-------------------------------------------------------------TODO-
            //     // data?.user.email === "admin@gmail.com" ? history.push("/Packages") : history.push("/user")
            // }).catch(err => {
            //     console.log(err)
            //     alert("Incorrect Credentials")
            //     setOpen(false);

            // })
        }
        else {
            setShowError(true)
            // setOpen(false);
        }
    }

    const forgotPassword = (Email) => {
        firebase.auth().sendPasswordResetEmail(Email)
            .then(function () {
                alert('Please check your email...')
            }).catch(function (e) {
                console.log(e)
            })
    }

    const onChangeInput = (type, e) => {
        if (type == 'email') {
            setemail(e.target.value)
            setIsEmailValidate(validateEmail(e.target.value));
            return
        } else if (type == 'confirm') {
            setConfirmPassword(e.target.value)
            return
        }
        setpassword(e.target.value)
        if (e.target.value.length >= 6) {
            setIsPasswordValidate(true);
        } else {
            setIsPasswordValidate(false);
        }
    }

    return (
        <section class="flex flex-col md:flex-row h-screen items-center">
            <div class="bg-green-960 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" class="w-full h-full object-cover" />
            </div>

            <div class="bg-green-960 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center">

                <div class="w-full h-100 text-gray-100">

                    <Link href="/"><img class="hover:cursor-pointer -mb-8 m-auto" src='https://svgshare.com/i/gKc.svg' width="180" title='logo' /></Link>
                    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12"> {inType ? 'Create a new account' : 'Log in to your account'}</h1>

                    <form class="mt-6" action="#" method="POST">
                        {
                            inType && (<div>
                                <label class="block text-gray-100">Full Name</label>
                                <input type="text" name="" id="" placeholder="Enter Full Name" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950 focus:bg-white focus:outline-none" autofocus autocomplete />
                            </div>)
                        }
                        <div>
                            <label class="block mt-4 text-gray-100">Email Address</label>
                            <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950 focus:bg-white focus:outline-none" value={email} onChange={onChangeInput.bind(null, "email")} required />
                        </div>
                        {showError && (!isEmailValidate && (
                            <div class="text-red-500 font-bold text-right">Wrong email entered!</div>
                        ))}

                        <div class="mt-4">
                            <label class="block text-gray-100">Password</label>
                            <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950 focus:bg-white focus:outline-none" value={password} onChange={onChangeInput.bind(null, "password")} required />
                        </div>
                        {showError && (!isPasswordValidate && (
                            <div class="text-red-500 font-bold text-right">At least 6 characters!</div>
                        ))}

                        {
                            inType && (<>
                                <div class="mt-4">
                                    <label class="block text-gray-100">Password*</label>
                                    <input type="password" name="" id="" placeholder="Confirm Password" minlength="6" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950
    focus:bg-white focus:outline-none" required value={confirmPassword} onChange={onChangeInput.bind(null, "confirm")} />
                                </div>
                                {password != confirmPassword && (
                                    <div class="text-red-500 font-bold text-right">Password Not Match with each other</div>
                                )}
                            </>
                            )}
                        {
                            !inType && (<div class="text-right mt-2">
                                <button class="text-sm font-semibold text-gray-100 hover:text-green-950 focus:text-blue-700" onClick={(e) => {
                                    e.preventDefault();
                                    forgotPassword(email);
                                }}>
                                    Forgot password?
                                </button>
                            </div>)
                        }

                        <button type="submit" class="w-full block bg-green-600 hover:bg-green-700 focus:bg-green-800 text-white font-semibold rounded-lg
  px-4 py-3 mt-6" onClick={inType ? signUp : signIn}>{inType ? 'Sigin Up' : 'Login'}</button>
                    </form>


                    {
                        !inType && (
                            <>
                                <hr class="my-6 border-gray-300 w-full" />
                                <GoogleLogin
                                    clientId="851583521817-5668993p0cmqt1na18v6a5gahnvt5p9j.apps.googleusercontent.com"
                                    render={(renderProps) => (
                                        // <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        //     Google Sign In
                                        //     <div class="flex items-center justify-center">
                                        //         {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg> */}
                                        //         <FaGoogle class="text-green-700" />
                                        //         <span class="ml-4">
                                        //         Google Sign In</span>
                                        //     </div>
                                        // </Button>
                                         <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled} class="w-full block bg-white hover:bg-green-200 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                         <div class="flex items-center justify-center">
                                             {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg> */}
                                             <FaGoogle class="text-green-700" />
                                             <span class="ml-4">
                                                 Log in
                                                 with
                                                 Google</span>
                                         </div>
                                     </button>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleFailure}
                                    cookiePolicy="single_host_origin"
                                />
                            </>)
                    }

                    {
                        inType ? (<p class="mt-8">Already Have an Account? <Link href="/login"><span class="text-green-500 cursor-pointer hover:text-green-600 font-semibold">Login to account</span></Link></p>)
                            :
                            (<p class="mt-8">Need an account? <Link href="/signup"><span class="text-green-500 cursor-pointer hover:text-green-600 font-semibold">Create an account</span></Link></p>)
                    }

                </div>
            </div>

        </section>
    )
}

export default Signin;










