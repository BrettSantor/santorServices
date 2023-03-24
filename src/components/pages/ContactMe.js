import React, {useState, useRef} from 'react';
import mail from '../../assets/images/mail.png'
import { checkMessage, checkName, validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';





export default function ConstactMe(){
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('')

const form = useRef();

const sendEmail = (e) => {
    console.log('this is send email')
  e.preventDefault();

  emailjs.sendForm('service_8qr2wna', 'template_z3ij3am', form.current, 'yG2rIISPvT8XzdC3y')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   setEmail('');
   setName('');
   setMessage('');
   setErrorMessage('');
};

const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue    = target.value;

    if (inputType === 'user_email') {
        setEmail(inputValue);
    } else if (inputType === 'user_name'){
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
        sendEmail(e);
        }
    return (
        <div className='container'>
            <h1 id='reachHeader'>Reach Out To Me</h1>
            <form className="form" ref={form} onSubmit={sendEmail} >
        <input
        className='inputField'
          value={email}
          name="user_email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
          <input
          className='inputField'
          value={name}
          name="user_name"
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