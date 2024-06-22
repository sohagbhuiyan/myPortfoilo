import React from 'react';
const FootParent = ({socialMediaLinks}) => {

    return (
        <div className='flex justify-center space-x-5 p-4'>
            {socialMediaLinks.map(({ id, image, url }) => (
                <a  key={id}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'>
                <img src={image} alt="" className='h-10 transform transition-transform duration-300 hover:scale-110 opacity-100 hover:opacity-50'/>    
                </a>
            ))}
            
        </div>
    );
};
export default FootParent;
