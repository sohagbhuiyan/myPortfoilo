
const SkillParent = ({images, title, text}) => {

    return (
  
            <div className='items-center flex  md:w-2/4 w-1/4 text-justify bg-slate-800 p-1 px-2 border rounded-xl'>
            <img src={images} alt="" className='h-18 md:h-24 py-1 rounded-xl' /> 
            <div className='text-gray-100'>
            <p className='md:text-xl text-xl font-medium'>{title}</p>
            <p>{text} </p>
            </div>
            </div>
           
      
    );
};

export default SkillParent;