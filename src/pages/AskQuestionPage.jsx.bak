
import { useState, useRef, useEffect } from "react"
import ButtonItem from "../components/ButtonItem"
import TagEditor from "../components/TagEditor"
import { marked } from "marked"
import AskQuestionPageContainer from "../components/AskQuestionPageContainer"
export default function AskQuestionPage() {

  //    TODO 
  // 1. LIMPIAR HTML

  const [bodyQuestion, setBodyQuestion] = useState("")
  const [history, setHistory] = useState([""])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [linksCount, setLinksCount] = useState(1)
  const [listCount, setListCount] = useState(1)
  const textareaReference = useRef(null)
  const [cursorPosition, setCursorPosition] = useState(null)
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState("")

  const updateText = function updateText(newText) {
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(newText)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setBodyQuestion(newText)
  }

  const handleChange = function handleChange(e) {
    updateText(e.target.value)
  }

  const undo = function undo() {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setBodyQuestion(history[historyIndex - 1])
    }
  }

  const redo = function redo() {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setBodyQuestion(history[historyIndex + 1])
    }
  }



  const insertText = function insertText(symbol, text) {
    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = bodyQuestion.substring(start, end) || text
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)

    const newText = `${beforeText}${symbol}${selectedText}${symbol}${afterText}`

    updateText(newText)

    setCursorPosition({ start: start + symbol.length, end: start + symbol.length + selectedText.length })
  }

  const insertLink = function insertLink(linkDescription) {
    let url = "https://"
    url = url.concat(prompt("Introduce la URL:"))
    if (url === "https://null") {
      return
    }
    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = bodyQuestion.substring(start, end) || linkDescription
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)

    const newText = `${beforeText}[${selectedText}][${linksCount}]${afterText}\n\n  [${linksCount}]: ${url}`
    updateText(newText)
    setCursorPosition({ start: start + 1, end: start + selectedText.length + 1 })

    setLinksCount(prev => prev + 1)
  }

  const insertBlockquote = function insertBlockquote(text) {
    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = bodyQuestion.substring(start, end) || text
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)

    const newText = `${beforeText}> ${selectedText}\n${afterText}`
    updateText(newText)
    setCursorPosition({ start: start + 2, end: start + 3 + selectedText.length })

  }




  const insertCodeBlock = function insertCodeBlock(text) {
    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = bodyQuestion.substring(start, end) || text
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)
    const newText = `${beforeText}\`\`\`\n${selectedText}\n\`\`\`${afterText}`
    updateText(newText)
    setCursorPosition({ start: start + 4, end: start + 5 + selectedText.length })
  }

  const insertListElement = function insertListElement(text, type) {

    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = bodyQuestion.substring(start, end) || text
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)

    let newText;

    if (type === "ol") {
      if (beforeText) {
        newText = `${beforeText}\n ${listCount}. ${selectedText}\n${afterText}`
        setCursorPosition({ start: start + 5, end: start + 5 + selectedText.length })
      } else {
        newText = `${beforeText} ${listCount}. ${selectedText}\n${afterText}`
        setCursorPosition({ start: start + 4, end: start + 4 + selectedText.length })
      }
      setListCount(prev => prev + 1)
    } else {
      if (beforeText) {
        newText = `${beforeText}\n - ${selectedText}\n${afterText}`
        setCursorPosition({ start: start + 4, end: start + 4 + selectedText.length })
      } else {
        newText = `${beforeText} - ${selectedText}\n${afterText}`
        setCursorPosition({ start: start + 3, end: start + 3 + selectedText.length })
      }
    }

    updateText(newText)

  }

  const insertTitle = function insertTitle(text) {

    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = bodyQuestion.substring(start, end) || text
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)


    let newText;

    if (beforeText) {
      newText = `${beforeText}\n## ${selectedText} ##${afterText}`
    } else {
      newText = `${beforeText}## ${selectedText} ##${afterText}`
    }


    updateText(newText)
    setCursorPosition({ start: start + 3, end: start + 3 + selectedText.length })

  }

  const insertHorizontal = function insertHorizontal() {

    const textarea = textareaReference.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const beforeText = bodyQuestion.substring(0, start)
    const afterText = bodyQuestion.substring(end)

    let newText;


    if (beforeText) {
      newText = `${beforeText}\n\n----------\n${afterText}`
    } else {
      newText = `${beforeText}----------${afterText}`
    }

    updateText(newText)
  }



  const handleClick = function handleClick(index) {
    switch (index) {
      case 0:
        insertText('**', 'texto en negrita')
        break;
      case 1:
        insertText('*', 'texto destacado')
        break;
      case 2:
        // 
        insertLink("introducir la descripción del vínculo aquí")
        break;
      case 3:
        insertBlockquote("Cita en bloque")
        break;
      case 4:
        insertCodeBlock("introduce el código aquí")
        break;
      case 6:
        insertListElement("Elemento de la lista", "ol")
        break;
      case 7:
        insertListElement("Elemento de la lista", "ul")
        break;
      case 8:
        insertTitle("Titulo")
        break;
      case 9:
        insertHorizontal()
        break;

      case 10:
        undo()
        break;
      case 11:
        redo()
        break;
      default:
        break;
    }
  }

  const handleSubmit = function handleSubmit(e) {
    console.log(e)
  }


  useEffect(() => {
    if (cursorPosition !== null) {
      const textarea = textareaReference.current
      textarea.focus()
      textarea.setSelectionRange(cursorPosition.start, cursorPosition.end)
    }

  }
    , [cursorPosition])


  return (
    <div className="flex w-full max-w-full justify-center">
      <AskQuestionPageContainer >
        <div className="flex flex-col items-stretch justify-between" >
          <div className=" basis-auto shrink grow">
            <form onSubmit={handleSubmit}>
              <div className="">
                <p className="mb-3.5 text-right text-base text-gray-500 " >Required fields*</p>
                <div className="p-4.5 shadow shadow-blue-50 bg-gray-600 border border-gray-400 rounded-sm " >
                  <div className="relative mb-4.5">
                    <div className="flex flex-col" >
                      <label htmlFor="title">
                        Titulo <abbr>*</abbr>
                        <div className="flex align-baseline cursor-pointer">
                          <p className=" text-gray-300 mt-0.75 basis-3/4">Sé especifico e imagina que estás haciendo la pregunta a otra persona</p>
                          <div className="mt-0.75 grow shrink basis-auto"></div>
                        </div>
                      </label>
                      <div className="relative grow shrink basis-auto">
                        <input className=" w-full border border-gray-400 rounded-lg px-2.5 py-2.25" type="text" name="title" id="title" maxLength={300} tabIndex={100} placeholder="¿Cuál es tu pregunta sobre programación? Sé específico." />
                      </div>
                    </div>
                    <div className=" overflow-hidden pb-0.75"></div>
                  </div>
                  <div className="flex w-full mb-4.5 gap-1.25 flex-col">

                    <div className="relative">
                      <label className=" cursor-pointer mb-1.25 py-0.75" htmlFor="wmd-input">
                        Cuerpo <abbr>*</abbr>
                        <p className=" italic" >Incluye toda la informacion que alguien necesitaría para responder tu pregunta</p>
                      </label>
                      <div className="w-full mb-2.5" >
                        <div className=" rounded-t-md  border-t border-x align-baseline" >
                          <ul className="flex flex-wrap pl-2.25 pr-1.25 justify-end h-13 border-b">

                            {
                              Array(2).fill(0).map((_, index) => {
                                return (

                                  <ButtonItem handleClick={() => handleClick(index)} index={index} key={index} />

                                )
                              }
                              )

                            }
                            <li className="h-12 grow shrink-0 basis-1.25 flex-wrap overflow-hidden relative left-1.25"></li>
                            {
                              Array(3).fill(0).map((_, index) => {
                                return (
                                  <ButtonItem handleClick={() => handleClick(index + 2)} key={index} index={index + 2} />

                                )
                              }
                              )

                            }
                            <li className="h-12 grow shrink-0 basis-1.25 flex-wrap overflow-hidden relative left-1.25"></li>

                            {
                              Array(4).fill(0).map((_, index) => {
                                return (
                                  <ButtonItem handleClick={() => handleClick(index + 6)} key={index} index={index + 6} />

                                )
                              }
                              )

                            }
                            <li className="h-12 grow shrink-0 basis-1.25 flex-wrap overflow-hidden relative left-1.25"></li>

                            {
                              Array(2).fill(0).map((_, index) => {
                                return (

                                  <ButtonItem handleClick={() => handleClick(index + 10)} key={index} index={index + 10} />

                                )
                              }
                              )

                            }
                            <li className="h-12 grow shrink-0 basis-1.25 flex-wrap overflow-hidden relative left-1.25"></li>


                          </ul>
                        </div>
                        <div className="bg-gray-700  border-x">
                          <ul className=" text-sm flex pt-1 pr-0 pb-0 pl-1 overflow-hidden overflow-x-auto " >
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 " >Enlaces</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">Imágenes</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">Estilo, encabezados</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">Listas</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">Citas en bloque</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">Código</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">HTML</li>
                            <li className="inline-block pt-1 px-1.75 pb-1.75 mx-0.75 ">Tablas</li>
                            <li className=" text-blue-300 inline-block pt-1 px-1.75 pb-1.75 mx-0.75 "><a href="#">Más</a></li>

                          </ul>
                        </div >
                        <div className=" border-t">
                          <div className="relative ">
                            <textarea ref={textareaReference} onChange={handleChange} value={bodyQuestion} className=" border-b border-x    resize-none p-2.75  h-51 w-full " name="post-text" id="wmd-input" tabIndex={101}></textarea>
                            <div className=" border-x rounded-b-md cursor-s-resize h-3 overflow-hidden bg-gray-700 -mt-1.25 bg-[url(https://cdn.sstatic.net/Sites/es/img/sprites.svg?v=961ebb6cc2dd)] bg-no-repeat bg-[calc(50%+34px)-364px] border-b" >

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    {/*    view                */}
                    <div className="flex gap-1.25 pb-3.5 -m-1.25">
                      <div className="m-1.25">
                        ```
                        <code className=" rounded-md border-1 px-1.25 py-0.5">
                          codigo
                        </code>
                        ```
                      </div>
                      <div className="m-1.25 font-bold">
                        **negrita**
                      </div>
                      <div className="m-1.25 italic">*italica*</div>
                      <div className="m-1.25">&gt;cita</div>

                    </div>
                    {/*  TODO: LIMPIAR HTML */}
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(bodyQuestion) }} className="md-preview w-full mb-4.5">
                    </div>

                    {/* view */}
                  </div>
                  <div className="relative ">

                    <TagEditor tagInput={tagInput} setTagInput={setTagInput} tags={tags} setTags={setTags} />

                  </div>

                </div>
              </div>
            </form>

          </div>
        </div>

      </AskQuestionPageContainer>
    </div>
  )
}