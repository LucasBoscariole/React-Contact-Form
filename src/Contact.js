import React, { useState } from 'react';
import { db } from './firebase';
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('form')
      .add({
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .catch((err) => console.log(err));
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  return (
    <Wrapper>
      <Container>
        <ContainerInfo>
          <label htmlFor='name'>Name</label>
        </ContainerInfo>
        <ContainerInfo>
          <input type='text' name='name' id='name' placeholder='Name' />
        </ContainerInfo>
      </Container>
      <Container>
        <ContainerInfo>
          <label htmlFor='email'>Email</label>
        </ContainerInfo>
        <ContainerInfo>
          <input type='email' name='email' id='email' placeholder='Email' />
        </ContainerInfo>
      </Container>
      <Container>
        <ContainerInfo>
          <label htmlFor='phone'>Phone</label>
        </ContainerInfo>
        <ContainerInfo>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Phone'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          />
        </ContainerInfo>
      </Container>
      <Container>
        <ContainerInfo>
          <label htmlFor='message'>Message</label>
        </ContainerInfo>
        <ContainerInfo>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
          ></textarea>
        </ContainerInfo>
      </Container>
      <Container>
        <ContainerInfo>
          <label htmlFor='color'>Color</label>
        </ContainerInfo>
        <ContainerInfo>
          <input type='color' name='color' id='color'></input>
        </ContainerInfo>
      </Container>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  width: 30vw;
  margin: 5vh auto 0;
`;
const Container = styled.article`
  display: block;
  margin: 1rem 0;
`;
const ContainerInfo = styled.div`
  label {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--first-color);
  }
  input,
  textarea {
    margin-top: 0.4rem;
    border-radius: 5px;
    &::placeholder {
      letter-spacing: 1px;
      color: #000;
    }
  }
  textarea {
  }
`;
