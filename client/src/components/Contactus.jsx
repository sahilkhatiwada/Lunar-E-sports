

const ContactUs = () => {
  return (
    <section className="contact-us-section py-16 bg-gray-100 text-gray-800">
  <div className="container mx-auto px-6 md:px-12">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-cyan-500 mb-4 font-audio">Contact Us</h2>
      <p className="text-lg text-gray-600 font-mono">
        Have questions or need assistance? Get in touch with us, and we’ll be happy to help.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row justify-center font-audio items-center gap-8">
      {/* Contact Form */}
      <div className="w-full lg:w-2/3 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <form className="space-y-6">
          <div className="relative">
            <label className="absolute text-sm text-cyan-500 -top-3 left-4 bg-gray-800 px-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <label className="absolute text-sm text-cyan-500 -top-3 left-4 bg-gray-800 px-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <label className="absolute text-sm text-cyan-500 -top-3 left-4 bg-gray-800 px-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transform transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="w-full lg:w-1/3 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <h3 className="text-xl font-bold text-cyan-500 mb-6">Our Contact Details</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <span className="text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21H7M20 16v-2M7 10v1m0-5a9 9 0 119 9H7z" />
              </svg>
            </span>
            <span className="text-white">+1 (555) 123-4567</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m0-4H6m16 0H6m0 0l4 4m-4-4l4-4" />
              </svg>
            </span>
            <span className="text-white">support@lunare-sport.com</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M9 7h6m-6 4h3m4-1a9 9 0 11-9 9" />
              </svg>
            </span>
            <span className="text-white">123 E-sport Ave, Gaming City</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactUs