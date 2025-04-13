
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
      <div className="bg-gray-200 p-8 mt-10 items-center rounded-lg shadow-lg max-w-lg ">
      <form onSubmit={onSubmit} className="space-y-4">
          <div>
              <label className="block text-gray-600 font-medium mb-1">Your Name:</label>
              <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  className="w-full px-3 py-2 bg-gray-300 text-gray-900 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" 
                  required 
              />
          </div>
          <div>
              <label className="block text-gray-400 font-medium mb-1">Your Email:</label>
              <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2 bg-gray-300 text-gray-900 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500" 
                  required 
              />
          </div>
          <div>
              <label className="block text-gray-200 font-medium mb-1">Write your message:</label>
              <textarea 
                  name="message" 
                  placeholder="Write here..." 
                  className="w-full px-3 py-2 bg-gray-300 text-gray-900 placeholder-gray-600 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none" 
                  required
              ></textarea>
          </div>
          <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 text-lg font-semibold rounded-lg transition duration-300 hover:bg-blue-700"
          >
              Submit
          </button>
      </form>
  </div>
  
    );
};

export default Chat
