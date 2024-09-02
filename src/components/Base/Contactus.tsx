const ContactUs = () => {
    return (
      <div className="bg-[#ffffff] p-8 text-center shadow-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-[#666666] mb-8">
            We're here to help! Whether you have questions about our products, need support, or just want to say hello, feel free to reach out.
          </p>
  
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-[#f8f8f8] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border border-[#cccccc] rounded-lg mb-4"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#000000] text-white font-semibold rounded-lg shadow-md hover:bg-[#333333] transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
  
            <div className="w-full md:w-1/2 bg-[#f8f8f8] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#333333] mb-4">Contact Information</h3>
              <ul className="text-lg text-[#666666] mb-4">
                <li className="mb-2">
                  <strong>Phone:</strong> 123456789
                </li>
                <li className="mb-2">
                  <strong>Email:</strong> support@ecom.com
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> 123 Example St, Suite 456
                </li>
              </ul>
              <h4 className="text-xl font-semibold text-[#333333] mb-4">Follow Us</h4>
              <div className="flex justify-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:text-[#2d4373]">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1da1f2] hover:text-[#0d8bfc]">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e4405f] hover:text-[#c13584]">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  