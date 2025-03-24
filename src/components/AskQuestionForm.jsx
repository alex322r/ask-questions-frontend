/* eslint-disable react/prop-types */
import { useState } from "react";
import PostEditor from "./PostEditor";
import PostTitle from "./PostTitle";
import TagEditor from "./TagEditor";
import NewPostLogin from "./NewPostLogin"
import useAuth from "../hooks/useAuth";

const apiUrl = import.meta.env.VITE_API_URL

export default function AskQuestionForm({ errorRef }) {

  const { user } = useAuth()

  const [title, setTitle] = useState("")
  const [bodyQuestion, setBodyQuestion] = useState("")
  const [tags, setTags] = useState([])
  const [validated, setValidated] = useState(false)
  const [botonText, setBotonText] = useState("Revise tu pregunta")
  const [titleError, setTitleError] = useState("valid")
  const [bodyError, setBodyError] = useState("valid")
  const [tagsError, setTagsError] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleTitleChange = function handleTitleChange(e) {
    const title = e.target.value
    setTitle(title)
    setValidated(false)
  }
  const handleBodyChange = function handleBodyChange(e) {
    const body = e.target.value
    setBodyQuestion(body)
    setValidated(false)
  }

  // si cambian los tags, se debe validar de nuevo

  const handleTagsChange = function handleTagsChange() {
    setValidated(false)
  }


  //Publicar tu pregunta
  const checkTitle = function checkTitle(title) {
    if (title.trim().length === 0) {
      return "empty"
    }
    if (title.trim().length < 10) {
      return "short"
    } else if (title.trim().length > 100) {
      return "long"
    } else {
      return "valid"
    }
  }

  const checkBody = function checkBody(body) {
    if (body.trim().length === 0) {
      return "empty"
    }
    if (body.trim().length < 20) {
      return "short"
    }
    if (body.trim().length > 500) {
      return "long"
    }
    return "valid"
  }

  const checkName = function checkName(name) {
    return name.trim().length > 3 && name.trim().length < 20
  }

  const checkEmail = function checkEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (email.trim().length === 0) {
      return "empty"
    }
    if (!emailRegex.test(email)) {
      return "invalid"
    }
    return "valid"
  }


  const checkForm = function checkForm(title, body, tags) {

    const titleError = checkTitle(title)
    const bodyError = checkBody(body)
    let tagsError = false

    setTitleError(titleError)

    setBodyError(bodyError)



    if (tags.length === 0) {
      setTagsError(true)
      tagsError = true
    } else {
      setTagsError(false)
      tagsError = false
    }

    return titleError === "valid" && bodyError === "valid" && !tagsError

  }

  const checkFormUser = function checkFormUser(name, email) {

    let nameError = checkName(name)
    let emailError = checkEmail(email)

    setEmailError(emailError)

    return nameError && emailError === "valid"
  }

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setBotonText("Publica tu pregunta")
    if (!validated) {
      const validForm = checkForm(title, bodyQuestion, tags)
      if (!validForm) {
        //scroll to top
        errorRef.current.scrollIntoView({ behavior: "smooth" })
      }
      setValidated(validForm)
    } else {
      const name = e.target["display-name"].value
      const email = e.target["m-address"].value
      if (checkFormUser(name, email)) {
        // enviar la pregunta
        if (user === null) {
          fetch(apiUrl + "/api/v1/guest", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ guest_name: name }),
            credentials: "include"
          }).then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error("Error al crear usuario")
            }
          }).then(() => {
            fetch(apiUrl + "/api/v1/questions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ title, description: bodyQuestion }),
              credentials: "include"
            }).then(response => {
              if (response.ok) {
                return response.json()
              } else {
                throw new Error("Error al enviar la pregunta")
              }
            }).then(() => {
              console.log("Pregunta enviada")
              setTitle("")
              setBodyQuestion("")
              setTags([])
              setValidated(false)
              setBotonText("Revise su pregunta")
            }).catch(error => {
              console.error(error)
            })
          }).catch(error => {
            console.error(error)
          }
          )
        } else {
          console.log("No se puede enviar la pregunta")
        }
      }

    }

    setLoading(false)

  }

  return (
    <div className="flex flex-col items-stretch justify-between">
      <div className=" basis-auto shrink grow">
        <form id="question-form" onSubmit={handleSubmit} >
          <div>
            <p className="mb-3.5 text-right text-base text-gray-500 ">Required fields*</p>
            <div className="p-4.5 shadow shadow-blue-50 bg-gray-600 border border-gray-400 rounded-sm " >
              <PostTitle handleTitleChange={handleTitleChange} title={title} error={titleError} />
              <PostEditor handleBodyChange={handleBodyChange} bodyQuestion={bodyQuestion} setBodyQuestion={setBodyQuestion} error={bodyError} />
              <TagEditor handleTagsChange={handleTagsChange} error={tagsError} tags={tags} setTags={setTags} />
              <NewPostLogin error={emailError} />
            </div>
            <div className="">
              <div className="flex mt-9"></div>
              <button className="mx-0.75 bg-blue-600 text-base p-2.75 cursor-pointer inline-block relative rounded-md " >
                {loading ? "Publicando..." : botonText}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  )
}

