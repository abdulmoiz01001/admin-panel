import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col  md:flex-row lg:flex-row gap-4  justify-center items-start p-6 space-y-6 md:space-y-0 md:space-x-6">
    {/* Contact Information */}
    <div className="w-full md:w-1/3 lg:w-[25%] bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start space-x-4 mb-4">
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M9 3v2M9 19v2m6-2v2M5 7h14M5 15h14M5 11h14M5 19h14"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold">Call To Us</h3>
          <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="text-sm text-gray-800 font-medium">Phone: +88016112222</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-start space-x-4">
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2a10 10 0 110 20 10 10 0 010-20zM10 14l2 2 4-4"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold">Write To Us</h3>
          <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-sm text-gray-800 font-medium">Email: customer@exclusive.com</p>
          <p className="text-sm text-gray-800 font-medium">Email: support@exclusive.com</p>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="w-full md:w-2/3 lg:w-[75%] xl:w-[80%] bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email *"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Your Phone *"
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <textarea
        placeholder="Your Message"
        className="border border-gray-300 p-2 w-full rounded mb-4 h-32"
      ></textarea>
      <button className="bg-red-500 text-white px-6 py-2 rounded">
        Send Message
      </button>
    </div>
  </div>
  )
}

export default Contact