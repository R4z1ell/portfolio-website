import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

import { Title } from '../../shared/Title';
import { Background, Wrapper, Highlight, Button, Label, Form } from './style';

const Contact = () => {
  const submitHandler = event => {
    event.preventDefault();
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
            </Form>
          </LightSpeed>
        </Wrapper>
      </Background>
    </section>
  );
};

export default Contact;
