import React from 'react'
import { FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedinIn,FaInstagram,FaTumblr } from 'react-icons/fa'; 

const SideSocialIcons = () => {
    return (
        <>
            <div id="fixed-social" className="hidden sm:inline-block">
                <div>
                    <a href="#" class="fixed-facebook" target="_blank"><FaFacebookF class="inline-block"/> <span>Facebook</span></a>
                </div>
                <div>
                    <a href="#" class="fixed-twitter" target="_blank"><FaTwitter class="inline-block"/> <span>Twitter</span></a>
                </div>
                <div>
                    <a href="#" class="fixed-gplus" target="_blank"><FaGooglePlusG class="inline-block"/> <span>Google+</span></a>
                </div>
                <div>
                    <a href="#" class="fixed-linkedin" target="_blank"><FaLinkedinIn class="inline-block"/> <span>LinkedIn</span></a>
                </div>
                <div>
                    <a href="#" class="fixed-instagrem" target="_blank"><FaInstagram class="inline-block"/> <span>Instagram</span></a>
                </div>
                {/* <div>
                    <a href="#" class="fixed-tumblr" target="_blank"><FaTumblr class="inline-block"/> <span>Tumblr</span></a>
                </div> */}
            </div>
        </>
    )
}

export default SideSocialIcons
