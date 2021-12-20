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

const Signin = () => {
    return (
        <div>
            <div
                class="flex flex-col items-center justify-center "
            >
                <div
                    class="
                flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md "
                >
                    <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
                        Join us Now
                    </div>
                    <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                        Enter your credentials to get access account
                    </div>

                    <div class="mt-10">
                        <form action="#">
                            <div class="flex flex-col mb-5">
                                <label
                                    for="email"
                                    class="mb-1 text-xs tracking-wide text-gray-600"
                                >Name:</label
                                >
                                <div class="relative">
                                    <div
                                        class="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400
                                    "
                                    >
                                        <i class="fas fa-user text-blue-500"></i>
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        class="
                                    text-sm
                                    placeholder-gray-500
                                    pl-10
                                    pr-4
                                    rounded-2xl
                                    border border-gray-400
                                    w-full
                                    py-2
                                    focus:outline-none focus:border-blue-400
                                    "
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-col mb-5">
                                <label
                                    for="email"
                                    class="mb-1 text-xs tracking-wide text-gray-600"
                                >E-Mail Address:</label
                                >
                                <div class="relative">
                                    <div
                                        class="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400
                                    "
                                    >
                                        <i class="fas fa-at text-blue-500"></i>
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        class="
                                    text-sm
                                    placeholder-gray-500
                                    pl-10
                                    pr-4
                                    rounded-2xl
                                    border border-gray-400
                                    w-full
                                    py-2
                                    focus:outline-none focus:border-blue-400
                                    "
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <label
                                    for="password"
                                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >Password:</label
                                >
                                <div class="relative">
                                    <div
                                        class="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400
                                    "
                                    >
                                        <span>
                                            <i class="fas fa-lock text-blue-500"></i>
                                        </span>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        class="
                                    text-sm
                                    placeholder-gray-500
                                    pl-10
                                    pr-4
                                    rounded-2xl
                                    border border-gray-400
                                    w-full
                                    py-2
                                    focus:outline-none focus:border-blue-400
                                    "
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            <div class="flex flex-col mb-6">
                                <label
                                    for="password"
                                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >Password:</label
                                >
                                <div class="relative">
                                    <div
                                        class="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-0
                                    top-0
                                    h-full
                                    w-10
                                    text-gray-400
                                    "
                                    >
                                        <span>
                                            <i class="fas fa-lock text-blue-500"></i>
                                        </span>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        class="
                                    text-sm
                                    placeholder-gray-500
                                    pl-10
                                    pr-4
                                    rounded-2xl
                                    border border-gray-400
                                    w-full
                                    py-2
                                    focus:outline-none focus:border-blue-400
                                    "
                                        placeholder="Confirm password"
                                    />
                                </div>
                            </div>

                            <div class="flex w-full">
                                <button
                                    type="submit"
                                    class="
                                flex
                                mt-2
                                items-center
                                justify-center
                                focus:outline-none
                                text-white text-sm
                                sm:text-base
                                bg-blue-500
                                hover:bg-blue-600
                                rounded-2xl
                                py-2
                                w-full
                                transition
                                duration-150
                                ease-in
                                "
                                >
                                    <span class="mr-2 uppercase">Sign Up</span>
                                    <span>
                                        <svg
                                            class="h-6 w-6"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex justify-center items-center mt-6">
                    <a
                        href="#"
                        target="_blank"
                        class="
                    inline-flex
                    items-center
                    text-gray-700
                    font-medium
                    text-xs text-center
                    "
                    >
                        <span class="ml-2 text-md text-gray-200"
                        >You have an account?
                            <a
                                href="#"
                                class="text-xs ml-2 text-gray-100 font-semibold"
                            >Login here</a>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Signin



