import React from 'react';
import FootParent from './FootParent';
import { facebok,linkedin,github,tweeter } from '../../Utils/Images';

const Footer = () => {
    const socialMediaLinks = [
        { id: 1, image: facebok, url: 'https://web.facebook.com/profile.php?id=100008473331977/' },
        { id: 2, image: linkedin, url: 'https://www.linkedin.com/in/md-sohag-bhuiyan-0bab87176/' },
        { id: 3, image: github, url: 'https://github.com/sohagbhuiyan' },
        { id: 4, image: tweeter, url: 'https://www.twitter.com/' },
    ];

    return (
        <>
        <div className='border-gray-800 bg-black-300  p-2 border-t-2 '>
            <p className='text-gray-300  text-center font-semibold'>Contact Me With</p>   
            <FootParent socialMediaLinks={socialMediaLinks}/>
            </div>
            <div className='bg-slate-800'>
            <p className='text-gray-100 text-xs p-2 md:text-sm text-center'>All Right Reserve SOHAG BHUIYAN@2024</p>
            </div>
            </>
    );
};
export default Footer;
