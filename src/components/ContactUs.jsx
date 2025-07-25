import React from 'react'
import { TfiLocationPin, TfiEmail  } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import InPut from './InPut';
import Button from './Button';
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!formData.name.trim()){
      formErrors.name = 'Name is required';
    }
    if (!formData.email.includes('@')){
      formErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()){
      formErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()){
      formErrors.message = 'Message is required';
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  }

  return (
    <div className='py-6 xs:py-8 sm:py-10 md:py-12 ' style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/worldwide-connection-gray-background-illustration-vector_53876-76827.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'primary-50',
        backgroundAttachment: 'fixed'
      }}>
      <div className="flex flex-col lg:flex-row justify-center items-start px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 gap-6 lg:gap-12">
        
        <div className="w-full lg:max-w-lg text-center lg:text-left">
          <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-3 text-primary-50">Contact Us</h1>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 xs:mb-6 sm:mb-8 text-primary-100">Say Hello</h1>
          
          <div className='flex flex-col gap-4 xs:gap-6 sm:gap-8'>
            
            <div className='flex flex-col xs:flex-row items-center xs:items-start gap-3 xs:gap-4'>
              <div className='flex-shrink-0 text-center rounded-full bg-primary-50 p-3 xs:p-4 sm:p-6'>
                <TfiLocationPin className='text-primary-200' size={24} />
              </div>
              <div className='text-center xs:text-left'>
                <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 text-primary-100">Address</h1>
                <p className="text-sm xs:text-base sm:text-lg text-primary-100">
                  Location KG 9 Ave, Kigali
                </p>
              </div>
            </div>
            <div className='flex flex-col xs:flex-row items-center xs:items-start gap-3 xs:gap-4'>
              <div className='flex-shrink-0 text-center rounded-full bg-primary-50 p-3 xs:p-4 sm:p-6'>
                <TfiEmail className='text-primary-200' size={24} />
              </div>
              <div className='text-center xs:text-left'>
                <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 text-primary-100">Email Us</h1>
                <p className="text-sm xs:text-base sm:text-lg text-primary-100">
                  businesscafe@info.com
                </p>
              </div>
            </div>
            <div className='flex flex-col xs:flex-row items-center xs:items-start gap-3 xs:gap-4'>
              <div className='flex-shrink-0 text-center rounded-full bg-primary-50 p-3 xs:p-4 sm:p-6'>
                <IoCallOutline className='text-primary-200' size={24} />
              </div>
              <div className='text-center xs:text-left'>
                <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 text-primary-100">Phone</h1>
                <p className="text-sm xs:text-base sm:text-lg text-primary-100">
                  +250788183828
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-lg text-center lg:text-left">
          <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 text-primary-50">Have Question?</h1>
          <p className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-primary-100 font-bold mb-4 xs:mb-6">
            Send a Message
          </p>
          
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 xs:gap-4'>
            <InPut
              variant={errors.name ? 'primary' : 'default'}
              placeholder={'Name'}
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${errors.subject ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            
            <InPut
              variant={errors.email ? 'primary' : 'default'}
              placeholder={'Email'}
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${errors.subject ? 'border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            
            <InPut
              variant={errors.subject ? 'primary' : 'default'}
              placeholder={'Subject'}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${errors.subject ? 'border-red-500' : ''}`}
            />
            {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
            
            <InPut
              type={'textarea'}
              placeholder={'Your Message'}
              className={`h-24 xs:h-28 sm:h-32 ${errors.message ? 'border-red-500' : ''}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant={errors.message ? 'primary' : 'default'}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            
            <Button
              label="Send Message"
              variant="primary"
              className="w-full xs:w-auto xs:self-start"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}