import React from 'react'
import { Signin } from '../components'
import { Navbar } from '../components'
import { SideSocialIcons } from '../components'

const login = () => {
    return (
        <div className="login">
            <Navbar />
            <SideSocialIcons />
            <div className="flex justify-center items-center py-20">
                <Signin />
            </div>
        </div>
    )
}

export default login
