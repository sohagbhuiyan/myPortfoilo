const SkillParent = ({images, title, text}) => {

    return (
            <div className='items-center flex w-2/4 text-justify bg-slate-800 p-1 px-2 border rounded-xl'>
            <img src={images} alt="" className='h-10 md:h-20 py-1 rounded-xl' /> 
            <div className='text-gray-100'>
            <p className='font-medium px-4'>{title}</p>
            <p className='text-sm px-4'>{text} </p>
            </div>
            </div> 
    );
};
export default SkillParent;
