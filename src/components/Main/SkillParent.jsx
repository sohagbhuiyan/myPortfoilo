const SkillParent = ({images, title, text}) => {

    return (
            <div className='items-center flex md:w-2/4  bg-slate-800 md:p-1 md:px-2 border rounded-xl'>
            <img src={images} alt="" className='h-16 md:h-20 py-1 rounded-sm pl-2' /> 
            <div className='text-gray-100'>
            <p className='font-medium px-4'>{title}</p>
            <p className='text-sm px-4'>{text} </p>
            </div>
            </div> 
    );
};
export default SkillParent;
