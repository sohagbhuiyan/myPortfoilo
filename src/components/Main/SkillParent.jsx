const SkillParent = ({ images, title, text }) => {
    return (
        <div className='flex flex-col items-center md:flex-row p-4 md:p-3 md:w-1/2 bg-white/80 backdrop-blur-sm border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]'>
            <img 
                src={images} 
                alt="" 
                className='h-16 w-18 md:h-24 md:w-26 p-2 md:rounded-xl bg-gray-100/50 shadow-inner border' 
            />
            <div className='mt-3 md:mt-0 md:ml-4 text-center md:text-left'>
                <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
                <p className='text-sm text-gray-600 mt-1.5 leading-relaxed'>{text}</p>
            </div>
        </div>
    );
};
export default SkillParent;
