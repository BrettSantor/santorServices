import React, {useState} from 'react';
import mail from '../../assets/images/mail.png'
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
            <h1 id='reachHeader'>Reach Out To Me</h1>
            <form className="form">
        <input
        className='inputField'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
          <input
          className='inputField'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
        className='inputField'
        id='messegeBox'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button id='subButt' type="button" onClick={handleFormSubmit}><img src={mail} alt='mail icon'/></button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
    )}
    </div>
    );
 }