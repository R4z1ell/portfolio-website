import React, { useState, useRef } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import SVG from 'react-inlinesvg';
import axios from 'axios';

import { Title } from '../../shared/Title';
import {
  Background,
  Wrapper,
  Highlight,
  Button,
  Label,
  Form,
  ErrorMessage
} from './style';

const Contact = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputTextArea, setInputTextArea] = useState('');

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [errorInputName, setErrorInputName] = useState(false);
  const [errorInputEmail, setErrorInputEmail] = useState(false);
  const [errorInputTextArea, setErrorInputTextArea] = useState(false);

  const errorMessageRef = useRef(null);

  const handleInputChange = event => {
    closeErrorMessage();
    if (event.target.name === 'name') {
      setInputName(event.target.value);
      if (event.target.value !== '') {
        setErrorInputName(false);
      }
    }

    if (event.target.name === 'email') {
      setInputEmail(event.target.value);
      if (/\S+@\S+\.\S+/.test(event.target.value)) {
        setErrorInputEmail(false);
      }

      if (/\S+@\S+\.\S+/.test(event.target.value) === false) {
        setErrorInputEmail(true);
      }
    }

    if (event.target.name === 'message') {
      setInputTextArea(event.target.value);
      if (event.target.value !== '') {
        setErrorInputTextArea(false);
      }
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    if (inputName === '' && inputEmail === '' && inputTextArea === '') {
      setErrorInputName(true);
      setErrorInputEmail(true);
      setErrorInputTextArea(true);
      setErrorMessage('Please fill in all required fields');
      openErrorMessage();
    }
    if (inputName !== '' && inputEmail === '' && inputTextArea === '') {
      setErrorInputEmail(true);
      setErrorInputTextArea(true);
      setErrorMessage('Please fill in all required fields');
      openErrorMessage();
    }
    if (
      inputName === '' &&
      /\S+@\S+\.\S+/.test(inputEmail) &&
      inputTextArea === ''
    ) {
      setErrorInputName(true);
      setErrorInputTextArea(true);
      setErrorMessage('Please fill in all required fields');
      openErrorMessage();
    }
    if (inputName !== '' && inputEmail === '' && inputTextArea !== '') {
      setErrorInputName(false);
      setErrorInputEmail(true);
      setErrorInputTextArea(false);
      setErrorMessage('Please add an email address');
      openErrorMessage();
    }
    if (inputName === '' && inputEmail === '' && inputTextArea !== '') {
      setErrorInputName(true);
      setErrorInputEmail(true);
      setErrorInputTextArea(false);
      setErrorMessage('Please fill in all required fields');
      openErrorMessage();
    }
    if (
      inputName === '' &&
      inputEmail !== '' &&
      /\S+@\S+\.\S+/.test(inputEmail) === false &&
      inputTextArea === ''
    ) {
      setErrorInputName(true);
      setErrorInputEmail(true);
      setErrorInputTextArea(true);
      setErrorMessage('Please fill in all required fields');
      openErrorMessage();
    }
    if (
      inputName === '' &&
      inputEmail !== '' &&
      /\S+@\S+\.\S+/.test(inputEmail) === false &&
      inputTextArea !== ''
    ) {
      setErrorInputName(true);
      setErrorInputEmail(true);
      setErrorInputTextArea(false);
      setErrorMessage('Please fill in all required fields');
      openErrorMessage();
    }
    if (
      inputName === '' &&
      /\S+@\S+\.\S+/.test(inputEmail) &&
      inputTextArea !== ''
    ) {
      setErrorInputName(true);
      setErrorMessage('The Name field is required');
      openErrorMessage();
    }
    if (
      inputName !== '' &&
      inputTextArea === '' &&
      /\S+@\S+\.\S+/.test(inputEmail)
    ) {
      setErrorInputTextArea(true);
      setErrorMessage('The Message field is required');
      openErrorMessage();
    }
    if (
      inputName !== '' &&
      inputTextArea !== '' &&
      /\S+@\S+\.\S+/.test(inputEmail) === false &&
      inputEmail !== ''
    ) {
      setErrorInputName(false);
      setErrorInputEmail(true);
      setErrorInputTextArea(false);
      setErrorMessage('Please add a valid email address');
      openErrorMessage();
    }
    if (
      inputName !== '' &&
      inputTextArea !== '' &&
      /\S+@\S+\.\S+/.test(inputEmail)
    ) {
      setErrorInputName(false);
      setErrorInputEmail(false);
      setErrorInputTextArea(false);
      setSuccessMessage(true);
      setErrorMessage(`Your form it's been successfully sent. Thank you!`);
      openErrorMessage();

      const dataToSubmit = {
        name: inputName,
        email: inputEmail,
        message: inputTextArea
      };

      axios.post('https://formcarry.com/s/1kuvFkCyxGQ', dataToSubmit, {
        headers: { Accept: 'application/json' }
      });

      setTimeout(() => {
        setInputName('');
        setInputEmail('');
        setInputTextArea('');
      }, 500);
      setTimeout(() => {
        setErrorMessage('');
        closeErrorMessage();
        setSuccessMessage(false);
      }, 2500);
    }
  };

  const openErrorMessage = () => {
    errorMessageRef.current.style.height = '40px';
    errorMessageRef.current.style.marginBottom = '10px';
    errorMessageRef.current.style.opacity = '1';
  };

  const closeErrorMessage = () => {
    errorMessageRef.current.style.height = '0px';
    errorMessageRef.current.style.marginBottom = '-2px';
    errorMessageRef.current.style.opacity = '0';
  };

  return (
    <section id="contact">
      <Background>
        <Wrapper>
          <Title>contact</Title>
          <Highlight>Have a question? I'd love to hear from you.</Highlight>
          <LightSpeed left ssrReveal={true}>
            <Form autoComplete="off" onSubmit={submitHandler}>
              <ul>
                <li>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    spellCheck="false"
                    value={inputName}
                    onChange={handleInputChange}
                  />
                  <Label bottom="0px" labelError={errorInputName} />
                </li>
                <li>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    spellCheck="false"
                    value={inputEmail}
                    onChange={handleInputChange}
                  />
                  <Label bottom="0px" labelError={errorInputEmail} />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    spellCheck="false"
                    value={inputTextArea}
                    onChange={handleInputChange}
                  />
                  <Label bottom="8px" labelError={errorInputTextArea} />
                </li>
                <ErrorMessage ref={errorMessageRef} success={successMessage}>
                  {errorMessage}
                  <div onClick={closeErrorMessage}>
                    <SVG src="/static/cross.svg" />
                  </div>
                </ErrorMessage>
                <li>
                  <Button onClick={submitHandler}>Send Message</Button>
                </li>
              </ul>
            </Form>
          </LightSpeed>
        </Wrapper>
      </Background>
    </section>
  );
};

export default Contact;
