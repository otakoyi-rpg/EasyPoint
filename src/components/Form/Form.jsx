import React, { useState, useEffect } from 'react';
import './Form.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import validator from 'validator';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';
import Select from '../UI/Select/Select';
import classnames from 'classnames';


const Form = () => {
  const data = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    textarea: '',
    shopify: '',
  };

  const [value, setValue] = useState(data);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [selectError, setSelectError] = useState('');

  const [selectClassNameAdd, setSelectClassNameAdd] = useState('')



  const options = ['Google Search', 'Shopify Blog', 'Shopify App Store', 'Shopify Partner', 'News/Article', 'Other'];
  const [currentValueSelect, setCurrentValueSelect] = useState();

  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
  query FormBackground {
    allImageSharp(
      filter: {
        fluid: { originalName: { regex: "/.*(formBackground).*/" } }
      }
      ) {
        nodes {
          gatsbyImageData
        }
      }
    }
    `);
    
    const handleInput = (ref) => {
      const newState = {
        ...value,
        [ref.current.id]: ref.current.value,
      };
      setValue(newState);

      if(ref.current.id === "firstName" && ref.current.value.trim()){
        setFirstNameError("") 
      }

      if(ref.current.id === "lastName" && ref.current.value.trim()){
        setLastNameError("")
      }

      if(ref.current.id === 'email' && validator.isEmail(value.email)){
        setEmailError('');
      }

      if(ref.current.id === "subject" && ref.current.value.trim()){
        setSubjectError("");
      }
    };
    
    const handleSelectError = (option)=>{
      setSelectError('');
      setSelectClassNameAdd('');
      setCurrentValueSelect(option)
    }

    const hadleSubmit = (event) => {
      event.preventDefault();
 
      if (value.firstName) {
        setFirstNameError('');
      } else {
        setFirstNameError('Please, input your First Name');
      }
      
      if (value.lastName) {
        setLastNameError('');
      } else {
        setLastNameError('Please, input your Last Name');
      }
      
      if (validator.isEmail(value.email)) {
        setEmailError('');
      } else {
        setEmailError('Is not a valid email');
      }
      
      if (value.subject) {
        setSubjectError('');
      } else {
        setSubjectError('Please input subject');
      }

      if (currentValueSelect) {
        setSelectError('');
      } else {
        setSelectError('Please make your choise');
        setSelectClassNameAdd('form__data-user-select-description-active')
      }
      
    }; 
    
    const allError = [firstNameError,lastNameError, emailError,subjectError, selectError];
    

    const labelTopSelectClassName = classnames('form__data-user-select-description',selectClassNameAdd)
    

  return (
    <div className="form">
      <GatsbyImage className="form__background" image={getImage(nodes[0].gatsbyImageData)} alt="background" />
      <div className="container">
        <div className="form__header">
          <p className="form__header-anchor" data-aos="fade-up"  data-aos-delay="150" >Contact</p>
          <h2 className="form__header-title" data-aos="fade-up" data-aos-delay="200">Four plans offered</h2>
          <p className="form__header-text" data-aos="fade-up" data-aos-delay="250">
            Every business is unique. No matter how big or small your business is, EasyPoints has a plan that suits your needs.
          </p>
        </div>
        <form onSubmit={hadleSubmit}>
          <div className="form__data-user">
            <Input
              label="First Name"
              required
              placeholder="First Name"
              onChange={handleInput}
              id="firstName"
              error={firstNameError}
            />
            <Input
              label="Last Name"
              required
              placeholder="Last Name"
              onChange={handleInput}
              id="lastName"
              type="text"
              error={lastNameError}

            />
          </div>
          <div className="form__customer">
            <Input
              label="Email Addres"
              required
              placeholder="example@easypoint.com"
              onChange={handleInput}
              id="email"
              type="text"
              error={emailError}
            />

            <Input
              label="Subject"
              required
              placeholder="EasyPoints Custom Integration Request"
              onChange={handleInput}
              id="subject"
              type="text"
              error={subjectError}
            />
            <Textarea id="textarea" onChange={handleInput} />
            <Input
              label="Shopify URL"
              placeholder="https://example.myshopify.com"
              onChange={handleInput}
              id="shopify"
              type="text"
            />
            <span className = {labelTopSelectClassName}>How did you find out about us? *</span>
            <Select 
              options = {options} 
              placeholder = 'Select' 
              currentValue ={currentValueSelect} 
              setCurrentValue = {handleSelectError} 
              error = {selectError}
              setSelectError ={setSelectError}
            />

          </div>
          <div className="form__button">
            <Button type="primaryViolet" text="Submit" typeOfButton="submit" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default Form;
