import React from 'react';
import { GoLocation, GoMail, } from 'react-icons/go';
import { TbPhoneCall } from 'react-icons/tb';

const Contact = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-4xl">Get In Touch</h1>
        <p className="w-1/2 mx-auto text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
          veniam vel.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-8 w-3/4 mx-auto space-x-5">
        <div className="text-start border px-14 py-10 bg-rose-100 rounded-md">
            <span className="text-orange-600 text-4xl">
              <GoLocation />
            </span>
          <p>102 Street 2714 Donovan</p>
          <p>Lorem ipsum dolar site amet discont</p>
        </div>
        <div className="text-start border px-14 py-10 bg-rose-100 rounded-md">
          <span className="text-orange-600 text-4xl">
            <TbPhoneCall />
          </span>
          <p>+02 1234 567 88</p>
          <p>Lorem ipsum dolar site amet discont</p>
        </div>
        <div className="text-start border px-14 py-10 bg-rose-100 rounded-md">
          <span className="text-orange-600 text-4xl">
            <GoMail />
          </span>
          <p>info@example.com</p>
          <p>Lorem ipsum dolar site amet discont</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;