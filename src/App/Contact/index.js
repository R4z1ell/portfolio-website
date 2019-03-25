import React from 'react';
import { Title } from '../../shared/Title';
import { Background, Wrapper, Highlight, Button, Label } from './style';

const Contact = () => {
  const submitHandler = event => {
    event.preventDefault();
  };
  return (
    <section id="contact">
      <Background>
        <Wrapper>
          <Title width="235px">contact</Title>
          <Highlight>Have a question? I'd love to hear from you.</Highlight>
          <form autoComplete="off" onSubmit={submitHandler}>
            <ul>
              <li>
                <input type="text" name="name" placeholder="Name" />
                <Label bottom="0px" />
              </li>
              <li>
                <input type="email" name="email" placeholder="Email" />
                <Label bottom="0px" />
              </li>
              <li>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your message"
                />
                <Label bottom="8px" />
              </li>
              <li>
                <Button>Send message</Button>
              </li>
            </ul>
          </form>
        </Wrapper>
      </Background>
    </section>
  );
};

export default Contact;
