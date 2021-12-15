import React, { useState } from 'react';
import firebase from '../config';
import { useRouter } from 'next/router'
// import { authenticate } from '../redux/actions';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Signin = () => {
    const router = useRouter()
    // const dispatch = useDispatch();
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const [email, setemail] = useState(null);
    const [isEmailValidate, setIsEmailValidate] = useState(false);
    const [isPasswordValidate, setIsPasswordValidate] = useState(false);
    const [showError, setShowError] = useState(false);
    const [password, setpassword] = useState(null);


    const signIn = e => {
        e.preventDefault();
        console.log(`Email and Passwords are ==> ${email} & ${password}`)
        if (isEmailValidate && isPasswordValidate) {
            setOpen(!open);
            firebase.auth().signInWithEmailAndPassword(
                email,
                password
            ).then(data => {
                // sessionStorage.setItem("email", data.user.email)
                const user = firebase.auth().currentUser;
                const emailVerified = user.emailVerified;
                if (!emailVerified) {
                    alert('First confirm your email address!')
                    setOpen(false);
                    return;
                }

                setOpen(false);
                // dispatch(authenticate(data.user.uid, data.user.email));
                localStorage.setItem('user', data.user.email.toLowerCase());
                router.push('/')
                localStorage.removeItem('admin')
                console.log('user has set', localStorage.getItem('user'))
                //-------------------------------------------------------------TODO-
                // data?.user.email === "admin@gmail.com" ? history.push("/Packages") : history.push("/user")
            }).catch(err => {
                console.log(err)
                alert("Incorrect Credentials")
                setOpen(false);

            })
        }
        else {
            setShowError(true)
            setOpen(false);
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
        }
        setpassword(e.target.value)
        if (e.target.value.length >= 6) {
            setIsPasswordValidate(true);
        } else {
            setIsPasswordValidate(false);
        }

    }
    return (
        <div>
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                            Email
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" value={email}
                            onChange={onChangeInput.bind(null, "email")} />
                    </div>
                </div>
                {showError && (!isEmailValidate && (
                    <div>This is a wrong email</div>
                ))}
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" value={password}
                            onChange={onChangeInput.bind(null, "password")} placeholder="******************" />
                    </div>
                </div>
                {showError && (!isPasswordValidate && (
                    <div>Password length must be at least 6 characters</div>
                ))}
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                        <input class="mr-2 leading-tight" type="checkbox" />
                        <span class="text-sm">
                            Send me your newsletter!
                        </span>
                    </label>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="shadow bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 w-full rounded" type="button" onClick={signIn}>
                            Login
                        </button>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button class="border-none text-white align-right " onClick={(e) => {
                            e.preventDefault();
                            forgotPassword(email);
                        }}>
                            Forgot password?
                        </button>
                        {/* <button class="shadow bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 w-full rounded" type="button" onClick={signIn}>
                            Login
                        </button> */}
                    </div>
                </div>
                {/* <NavLink to="/signup" variant="body2">
                                    No account? Sign Up
                                </NavLink> */}
            </form>
        </div>
    )
}

export default Signin;



