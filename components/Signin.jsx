// import React, { useState } from 'react';
// import firebase from '../config';
// import { useRouter } from 'next/router'
// // import { authenticate } from '../redux/actions';

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const Signin = () => {
//     const router = useRouter()
//     // const dispatch = useDispatch();
//     // const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const handleClose = () => {
//         setOpen(false);
//     };

//     const [email, setemail] = useState(null);
//     const [isEmailValidate, setIsEmailValidate] = useState(false);
//     const [isPasswordValidate, setIsPasswordValidate] = useState(false);
//     const [showError, setShowError] = useState(false);
//     const [password, setpassword] = useState(null);


//     const signIn = e => {
//         e.preventDefault();
//         console.log(`Email and Passwords are ==> ${email} & ${password}`)
//         if (isEmailValidate && isPasswordValidate) {
//             setOpen(!open);
//             firebase.auth().signInWithEmailAndPassword(
//                 email,
//                 password
//             ).then(data => {
//                 // sessionStorage.setItem("email", data.user.email)
//                 const user = firebase.auth().currentUser;
//                 const emailVerified = user.emailVerified;
//                 if (!emailVerified) {
//                     alert('First confirm your email address!')
//                     setOpen(false);
//                     return;
//                 }

//                 setOpen(false);
//                 // dispatch(authenticate(data.user.uid, data.user.email));
//                 localStorage.setItem('user', data.user.email.toLowerCase());
//                 router.push('/')
//                 localStorage.removeItem('admin')
//                 console.log('user has set', localStorage.getItem('user'))
//                 //-------------------------------------------------------------TODO-
//                 // data?.user.email === "admin@gmail.com" ? history.push("/Packages") : history.push("/user")
//             }).catch(err => {
//                 console.log(err)
//                 alert("Incorrect Credentials")
//                 setOpen(false);

//             })
//         }
//         else {
//             setShowError(true)
//             setOpen(false);
//         }
//     }

//     const forgotPassword = (Email) => {
//         firebase.auth().sendPasswordResetEmail(Email)
//             .then(function () {
//                 alert('Please check your email...')
//             }).catch(function (e) {
//                 console.log(e)
//             })
//     }

//     const onChangeInput = (type, e) => {
//         if (type == 'email') {
//             setemail(e.target.value)
//             setIsEmailValidate(validateEmail(e.target.value));
//             return
//         }
//         setpassword(e.target.value)
//         if (e.target.value.length >= 6) {
//             setIsPasswordValidate(true);
//         } else {
//             setIsPasswordValidate(false);
//         }

//     }
//     return (
//         <div class="border-2 rounded-xl pr-10 pt-5 ">
//             <h1 class="text-center w-full  text-white font-serif pb-6 text-2xl pl-12"><strong>Login</strong></h1>
//             <form class="w-full max-w-sm">
//                 <div class="md:flex md:items-center mb-6">
//                     <div class="md:w-1/3">
//                         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
//                             Email
//                         </label>
//                     </div>
//                     <div class="md:w-2/3">
//                         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-950" id="email" placeholder='example@gmail.com' type="text" value={email}
//                             onChange={onChangeInput.bind(null, "email")} />
//                     </div>
//                 </div>
//                 {showError && (!isEmailValidate && (
//                     <div class="text-red-500 font-bold text-right pb-4 -mt-5">Wrong email entered!</div>
//                 ))}
//                 <div class="md:flex md:items-center mb-6">
//                     <div class="md:w-1/3">
//                         <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
//                             Password
//                         </label>
//                     </div>
//                     <div class="md:w-2/3">
//                         <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-950" id="inline-password" type="password" value={password}
//                             onChange={onChangeInput.bind(null, "password")} placeholder="*****" />
//                     </div>
//                 </div>
//                 {showError && (!isPasswordValidate && (
//                     <div class="text-red-500 font-bold text-right pb-4 -mt-5">At least 6 characters!</div>
//                 ))}
//                 <div class="md:flex md:items-center mb-6">
//                     <div class="md:w-1/3"></div>
//                     <label class="md:w-2/3 block text-gray-500 font-bold">
//                         {/* <label class="inline-flex items-center mt-3">
//                         </label> */}
//                             <input type="checkbox" class="form-checkbox text-green-600" />
//                         {/* <input class="mr-2 leading-tight" type="checkbox" /> */}
//                         <span class="text-sm">
//                             Send me latest updates!
//                         </span>
//                     </label>
//                 </div>
//                 <div class="md:flex md:items-center">
//                     <div class="md:w-1/3"></div>
//                     <div class="md:w-2/3">
//                         <button class="shadow bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 w-full rounded" type="button" onClick={signIn}>
//                             Sign in
//                         </button>
//                     </div>
//                 </div>
//                 <div class="md:flex md:items-center  ml-6 pb-4">
//                     {/* <div class="md:w-1/3"></div> */}
//                     <div class="md:w-full">
//                         <button class="border-none py-4 text-white " onClick={(e) => {
//                             e.preventDefault();
//                             forgotPassword(email);
//                         }}>
//                             Forgot password?
//                         </button>
//                         {/* <button class="shadow bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 w-full rounded" type="button" onClick={signIn}>
//                             Login
//                         </button> */}
//                     </div>
//                     <span class="text-white pt-6">  No account? <span class="hover:text-green-950 font-bold cursor-pointer hover:bg-green"> Sign Up </span></span>
//                 </div>


//             </form>
//         </div>
//     )
// }

// export default Signin;






import React from 'react'
import Link from 'next/link'
import {FaGoogle} from 'react-icons/fa'

const Signin = ({ inType }) => {
    return (
        <section class="flex flex-col md:flex-row h-screen items-center">
            <div class="bg-green-960 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" class="w-full h-full object-cover" />
            </div>

            <div class="bg-green-960 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                <div class="w-full h-100 text-gray-100">

                    <Link href="/"><img class="hover:cursor-pointer -mb-8 m-auto" src='https://svgshare.com/i/coH.svg' width="180" title='logo' /></Link>
                    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12"> {inType ? 'Create a new account' : 'Log in to your account'}</h1>

                    <form class="mt-6" action="#" method="POST">
                        {
                            inType && (<div>
                                <label class="block text-gray-100">Full Name</label>
                                <input type="text" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>)
                        }
                        <div>
                            <label class="block mt-4 text-gray-100">Email Address</label>
                            <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950 focus:bg-white focus:outline-none" required />
                        </div>
                        {
                            inType && (<div class="mt-4">
                                <label class="block text-gray-100">Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950 focus:bg-white focus:outline-none" required />
                            </div>)
                        }

                        <div class="mt-4">
                            <label class="block text-gray-100">Password*</label>
                            <input type="password" name="" id="" placeholder="Confirm Password" minlength="6" class="w-full px-4 py-3 text-black rounded-lg bg-gray-100 mt-2 border focus:border-green-950
                focus:bg-white focus:outline-none" required />
                        </div>
                        {
                            !inType && (<div class="text-right mt-2">
                                <a href="#" class="text-sm font-semibold text-gray-100 hover:text-green-950 focus:text-blue-700">Forgot Password?</a>
                            </div>)
                        }

                        <button type="submit" class="w-full block bg-green-600 hover:bg-green-700 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">{inType ? 'Sigin Up' : 'Login'}</button>
                    </form>


                    {
                        !inType && (
                            <>
                                <hr class="my-6 border-gray-300 w-full" />

                                <button type="button" class="w-full block bg-white hover:bg-green-200 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                    <div class="flex items-center justify-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg> */}
                                        <FaGoogle class="text-green-700"/>
                                        <span class="ml-4">
                                            Log in
                                            with
                                            Google</span>
                                    </div>
                                </button>
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

export default Signin



