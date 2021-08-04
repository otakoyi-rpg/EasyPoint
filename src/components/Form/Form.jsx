import React, { useState, useEffect } from "react"
import "./Form.scss"
import { useStaticQuery, graphql } from "gatsby"
import validator from "validator"
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"
import Textarea from "../UI/Textarea/Textarea"
import Select from "../UI/Select/Select"
import classnames from "classnames"
import { useI18next } from "gatsby-plugin-react-i18next"

const Form = () => {
  const { language } = useI18next()

  const {
    allMarkdownRemark: {
      edges: [
        {
          node: { frontmatter },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query Contact {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/contact.md$/" }
          frontmatter: { en: {} }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                anchor
                title
                subtitle
                background
                label_first_name
                input_first_name
                label_last_name
                input_last_name
                label_email
                input_email
                label_subject
                input_subject
                label_message
                input_message
                label_shopify_url
                input_shopify_url
                label_select
                input_select
                options {
                  option
                }
                button
              }
              en {
                anchor
                title
                subtitle
                background
                label_first_name
                input_first_name
                label_last_name
                input_last_name
                label_email
                input_email
                label_subject
                input_subject
                label_message
                input_message
                label_shopify_url
                input_shopify_url
                label_select
                input_select
                options {
                  option
                }
                button
              }
            }
          }
        }
      }
    }
  `)

  const data = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    textarea: "",
    shopify: "",
  }

  const [value, setValue] = useState(data)

  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [subjectError, setSubjectError] = useState("")
  const [selectError, setSelectError] = useState("")

  const [selectClassNameAdd, setSelectClassNameAdd] = useState("")


  const [currentValueSelect, setCurrentValueSelect] = useState()

  const handleInput = ref => {
    const newState = {
      ...value,
      [ref.current.id]: ref.current.value,
    }
    setValue(newState)

    if (ref.current.id === "firstName" && ref.current.value.trim()) {
      setFirstNameError("")
    }

    if (ref.current.id === "lastName" && ref.current.value.trim()) {
      setLastNameError("")
    }

    if (ref.current.id === "email" && validator.isEmail(value.email)) {
      setEmailError("")
    }

    if (ref.current.id === "subject" && ref.current.value.trim()) {
      setSubjectError("")
    }
  }

  const handleSelectError = option => {
    setSelectError("")
    setSelectClassNameAdd("")
    setCurrentValueSelect(option)
  }

  const hadleSubmit = event => {
    event.preventDefault()

    if (value.firstName) {
      setFirstNameError("")
    } else {
      setFirstNameError("Please, input your First Name")
    }

    if (value.lastName) {
      setLastNameError("")
    } else {
      setLastNameError("Please, input your Last Name")
    }

    if (validator.isEmail(value.email)) {
      setEmailError("")
    } else {
      setEmailError("Is not a valid email")
    }

    if (value.subject) {
      setSubjectError("")
    } else {
      setSubjectError("Please input subject")
    }

    if (currentValueSelect) {
      setSelectError("")
    } else {
      setSelectError("Please make your choise")
      setSelectClassNameAdd("form__data-user-select-description-active")
    }
  }

  const allError = [
    firstNameError,
    lastNameError,
    emailError,
    subjectError,
    selectError,
  ]

  const labelTopSelectClassName = classnames(
    "form__data-user-select-description",
    selectClassNameAdd
  )

  return (
    <div className="form">
      {/* <GatsbyImage
        className="form__background"
        image={getImage(nodes[0].gatsbyImageData)}
        alt="background"
      /> */}
      <img src={frontmatter[language].background} alt="" className="form__background" />
      <div className="container">
        <div className="form__header">
          <p
            className="form__header-anchor"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {frontmatter[language].anchor}
          </p>
          <h2
            className="form__header-title"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {frontmatter[language].title}
            
          </h2>
          <p
            className="form__header-text"
            data-aos="fade-up"
            data-aos-delay="250"
          >
                       {frontmatter[language].subtitle}

          </p>
        </div>
        <form onSubmit={hadleSubmit}>
          <div className="form__data-user">
            <Input
              label={frontmatter[language].label_first_name}
              required
              placeholder={frontmatter[language].input_first_name}
              onChange={handleInput}
              id="firstName"
              error={firstNameError}
            />
            <Input
              label={frontmatter[language].label_last_name}
              required
              placeholder={frontmatter[language].input_last_name}
              onChange={handleInput}
              id="lastName"
              type="text"
              error={lastNameError}
            />
          </div>
          <div className="form__customer">
            <Input
              label={frontmatter[language].input_email}
              required
              placeholder={frontmatter[language].label_email}
              onChange={handleInput}
              id="email"
              type="text"
              error={emailError}
            />

            <Input
                            label={frontmatter[language].input_subject}

              required
              placeholder={frontmatter[language].label_subject}

              onChange={handleInput}
              id="subject"
              type="text"
              error={subjectError}
            />
            <Textarea id="textarea" onChange={handleInput} placeholder = {frontmatter[language].input_message} text = {frontmatter[language].label_message} />
            <Input
              label={frontmatter[language].label_shopify_url}
              placeholder={frontmatter[language].input_shopify_url}
              onChange={handleInput}
              id="shopify"
              type="text"
            />
            <span className={labelTopSelectClassName}>
              {frontmatter[language].label_select}
            </span>
            <Select
              options={frontmatter[language].options}
              placeholder= {frontmatter[language].input_select}
              currentValue={currentValueSelect}
              setCurrentValue={handleSelectError}
              error={selectError}
              setSelectError={setSelectError}
            />
          </div>
          <div className="form__button">
            <Button type="primaryViolet" text={frontmatter[language].button} typeOfButton="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
