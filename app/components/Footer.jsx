import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6'/>
        sharifovais61@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-center border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
                <a target='_blank' href='https://github.com/OvaisSharif'><Image src={isDarkMode? assets.github_icon_dark:assets.github_icon} alt=''/></a>  
            </li>
            <li>
            <a target='_blank' href='https://github.com/OvaisSharif'><Image src={assets.linkedin_icon} alt=''/></a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
