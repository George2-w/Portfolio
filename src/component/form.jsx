import { memo } from 'react';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const getdata = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch('http://localhost:9380/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)

    }

    )
    const response = await res.json();
    console.log(response);
  }

  return (
    <>

      <div className='Formcontainer'>
        <div className='text-5xl  border-4 pointer w-130 h-50 p-20 ml-30 mt-10 mb-10 text-shadow-indigo-500 hfont'>
          <h2 className='text-white'>Contact form</h2>
        </div>
        <form className='form'>
          <label>
            <p>First name:</p>
            <input
             className='input1'
              placeholder='Enter Firstname'
              value={form.firstName}
              onChange={e => {
                setForm({
                  ...form,
                  firstName: e.target.value
                });
              }}
            />
          </label>
          <label>
            <p>Last name: </p>
            <input
             className='input1'
              placeholder='Enter Lastname'
              value={form.lastName}
              onChange={e => {
                setForm({
                  ...form,
                  lastName: e.target.value
                });
              }}
            />
          </label>
          <label>
            <p>Email:</p>
            <input
            className='input1'
              placeholder='Enter Email'
              value={form.email}
              onChange={e => {
                setForm({
                  ...form,
                  email: e.target.value
                });
              }}
            />
          </label>
        </form>
        <div>
          <label className='messageSect'>
            <textarea name="Message" id="" className=' input2'   value={form.message}
              onChange={e => {
                setForm({
                  ...form,
                  message: e.target.value
                });
              }}>
              Message :
            </textarea>
          </label>
        </div>

        <div className='text-3xl pointer FORMbutton'>
          <button type='button' className='Button' onClick={getdata}>Submit</button>
        </div>
      </div>


    </>
  );
}
