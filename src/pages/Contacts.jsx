import { useState } from 'react'

const Contacts = () => {
  
  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (

    <div className="flex flex-col min-h-screen font-montserrat w-[74%] mx-auto mt-12">

      <div className="flex flex-col justify-start items-start mb-8">
        <h1 className="text-4xl text-bold font-extrabold uppercase">send a dm</h1>
        <p className="text-md">Send us a DM to discuss how we can make your <span className="text-md text-yellow font-bold">dreams</span> come to <span className="text-md text-yellow font-bold">life!</span></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-black p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-black p-3 rounded-lg w-full"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="border border-black p-3 rounded-lg w-full"
        />

        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="border border-black p-3 rounded-lg w-full"
        >
          <option value="">Select one</option>
          <option value="web-development">Web Development</option>
          <option value="design">Design</option>
          <option value="consultation">Consultation</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us your dreams"
          value={formData.message}
          onChange={handleChange}
          className="border border-black p-3 rounded-lg w-full h-24"
        />

        <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contacts