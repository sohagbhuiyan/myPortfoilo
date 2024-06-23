import React from 'react';

const Chat = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
      const formData = new FormData();
      
        console.log(event.target.name.value)
        formData.append("access_key", "01c9c44e-f4c8-4183-9e17-8e521f1e5adc");
        formData.append("Name", event.target.name.value);
        formData.append("Email", event.target.email.value);
        formData.append("Message",event.target.message.value);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Your messasge is sent!")
        }
      };
    return (
        <div className='sm:w-1/2  flex-col p-2 sm:absolute right-2 text-gray-100 text-xs md:text-lg md:mb-20'>
             <form onSubmit={onSubmit} className="px-4">
            <label htmlFor=""> Your Name: </label><br />
            <input type="text" name="name" placeholder="Enter your name" className='w-3/4 outline-none bg-indigo-200 text-black placeholder-yellow-900' /> <br />
            <label htmlFor=""> Your Email: </label><br />
            <input type="text" name="email" placeholder="Enter your Email" className='w-3/4 outline-none bg-indigo-200 text-black placeholder-yellow-900' required/><br />
            <label htmlFor=""> Write your message:</label><br />
            <textarea type="text" name="message" placeholder="Write here!" className='h-14 w-3/4 outline-none bg-indigo-200 text-black placeholder-yellow-900' /><br />
            <button  type="submit" className="bg-sky-600 mt-2 p-1 sm:text-xl font-medium rounded-lg cursor-pointer hover:bg-sky-500">Submit</button>
        </form>
        </div>
    );
};

export default Chat
