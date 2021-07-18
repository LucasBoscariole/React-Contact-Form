import React, { useState } from 'react';
import { db } from './firebase';
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [information, setInformation] = useState(false);
  const [question, setQuestion] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('form')
      .add({
        name: name,
        email: email,
        phone: phone,
        information: information,
        question: question,
        message: message,
      })
      .catch((err) => console.log(err));
    setName('');
    setEmail('');
    setPhone('');
    setInformation(false);
    setQuestion(false);
    setMessage('');
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Type your name...'
        maxLength='15'
        required
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Type your email...'
        maxLength='40'
        required
      />
      <label htmlFor='phone'>Phone</label>
      <input
        type='tel'
        name='phone'
        id='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='123-456-7890'
        maxLength='12'
      />
      <Container>
        <label htmlFor='info'>Information</label>
        <input
          type='checkbox'
          checked={information}
          onChange={(e) => setInformation(e.target.checked)}
          name='info'
          id='info'
        />
      </Container>
      <Container>
        <label htmlFor='question'>Question</label>
        <input
          type='checkbox'
          checked={question}
          onChange={(e) => setQuestion(e.target.checked)}
          name='question'
          id='question'
        />
      </Container>
      <label htmlFor='message'>Message</label>
      <textarea
        name='message'
        id='message'
        placeholder='Type your message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type='subimt'>SUBMIT</button>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.form`
  width: 20vw;
  margin: 5vh auto 0;
  display: grid;
  label {
    color: var(--first-color);
  }
  input {
    width: 20vw;
    border: 1px solid var(--third-color);
    height: 5vh;
    margin: 0.4rem 0 1rem 0;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.2rem 0 0 1rem;
    &::placeholder {
      color: #000;
      letter-spacing: 1px;
    }
    &:focus {
      border-color: var(--first-color);
    }
  }
  textarea {
    width: 20vw;
    border: 1px solid var(--third-color);
    height: 10vh;
    margin: 0.4rem 0 1rem 0;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.5rem 0 0 1rem;
    &::placeholder {
      color: #000;
      letter-spacing: 1px;
    }
    &:focus {
      border-color: var(--first-color);
    }
  }
  button {
    width: 100%;
    padding: 0.7rem 2rem;
    background: var(--second-color);
    border: none;
    outline: none;
    color: var(--third-color);
    margin: 1rem 0 0 0;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    input,
    textarea {
      width: 85vw;
    }
  }
`;
const Container = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: start;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  input {
    margin: 0 0 0 1rem;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
