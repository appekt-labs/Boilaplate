import React from 'react'
import { MdFacebook } from "react-icons/md";
import {FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6"
function WaitListSocials() {
  return (
    <section className='my-2 md:my-3 flex items-center justify-center'>
       <div className='flex flex-col items-center gap-2 lg:gap-2'>
       <h6 className='text-lg lg:text-xl font-semibold '>
            Follow Our Socials
        </h6>
        <div className='flex items-center text-xl md:text-2xl font-bold gap-3'>
            <span>
            <MdFacebook />
            </span>
            <span>
            <FaSquareXTwitter />
            </span>
            <span>
                <FaSquareInstagram />
            </span>
        </div>
       </div>
    </section>
  )
}

export default WaitListSocials