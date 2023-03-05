import React, {useState} from 'react';

import { checkMessage, checkName, validateEmail } from '../../utils/helpers';





export default function ConstactMe(){
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('')

const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue    = target.value;

    if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'name'){
        setName(inputValue);
    } else {
        setMessage(inputValue)
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
        setErrorMessage('Email Invalid');
        return;
    }
    if (!checkMessage(message)){
        setErrorMessage(
            'Please Enter A Message'
        );
        return;
    }
    if (!checkName(name)){
        setErrorMessage('Please Enter A Name');
        return;
    }
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
        }
    return (
        <div className='container'>
            <h1>Reach Out To Me</h1>
            <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
          <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
    )}
    </div>
    );
 }