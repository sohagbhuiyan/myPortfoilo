import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <div> 
            <div className='p-6 '>
                <hr />
                <p className='text-cpink-200 text-center text-xl md:text-2xl font-semibold'>Contact Me With</p>
                <div className="w-16  h-1 bg-cpink-200 mx-auto rounded-full"></div>
                <div className='flex justify-center space-x-6 mt-4'>
                    <a href='https://web.facebook.com/profile.php?id=100008473331977/' target='_blank' rel='noopener noreferrer'>
                        <FaFacebook className='text-gray-600 text-2xl hover:text-cpink-200'/>
                    </a>
                    <a href='https://www.linkedin.com/in/md-sohag-bhuiyan-0bab87176/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='text-gray-600 text-2xl hover:text-cpink-200'/>
                    </a>
                    <a href='https://github.com/sohagbhuiyan' target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='text-gray-600 text-2xl hover:text-cpink-200'/>
                    </a>
                    <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
                        <FaTwitter className='text-gray-600 text-2xl hover:text-cpink-200'/>
                    </a>
                </div>
            </div>
            <div className="py-8 bg-gray-200">
            <p className="text-gray-800 text-center">Sohag Bhuiyan &copy; 2025. All rights reserved.</p>

            </div>
        </div>
    );
};

export default Contact;
