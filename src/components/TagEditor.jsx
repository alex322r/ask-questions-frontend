
import { useState } from "react";


export default function TagEditor() {

  // const [editingTag, setEditingTag] = useState("")
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState("")

  const handleTagInput = function handleTagInput(e) {
    const regex = /[a-zA-Z0-9]+(?=\s)/g;
    const input = e.target.value
    const newTags = [...input.matchAll(regex).map(match => match[0])]

    const endsWithSpace = /\s$/.test(input);


    // if (editingTag) {
    //   const input = e.target.value 
    //   setTagInput(input)
    //   const newTags = [...input.matchAll(regex).map(match => match[0])]
    //   if (newTags.length > 0) {
    //     setTags(prev => {
    //       const leftTags = prev.slice(0, prev.indexOf(editingTag))
    //       const rightTags = prev.slice(prev.indexOf(editingTag) + 1, prev.length)
    //       const uniqueTags = new Set([...leftTags, ...newTags,...rightTags])
    //       return [...uniqueTags]
    //     })
    //   }
    // }


    if (newTags.length > 0) {
      setTags(prev => {
        const uniqueTags = new Set([...prev, ...newTags])
        return [...uniqueTags]
      })

      if (endsWithSpace) {
        setTagInput("")
      } else {
        setTagInput(input.split(/\s+/).pop())
      }

    } else {
      setTagInput(input.trim())
    }


  }

  const handleKeyDown = function handleKeyDown(e) {
    if (tags.length < 1) return;
    if (e.key === "Backspace" && tagInput === "") {
      e.preventDefault()
      let newTags = tags.slice(0, tags.length - 1)
      setTagInput(tags[tags.length - 1])
      setTags(newTags)
    }

  }

  const handleTagDelete = function handleTagDelete(tag, e) {
    e.stopPropagation()
    const newTags = tags.filter(t => t !== tag)
    setTags(newTags)
  }

  // const handleTagEdition = function handleTagEdition(tag, e) {
  //   e.preventDefault()
  //   setEditingTag(tag)
  //   setTagInput(tag)
  // }


  return (

    <div className="relative">

      <div className="p-0">
        <div className="flex items-center justify-between">
          <label className="mb-1.25 grow shrink basis-auto px-0.75 mb-1.255 " htmlFor="tagname-input">
            Etiquetas
            <abbr className=" text-xl text-blue-300 " title="required">*</abbr>
            <div className="mt-0.75 leading-5 ">Añade hasta 5 etiquetas para describir sobre qué trata tu pregunta</div>
          </label>
          <button type="button" className="p-2.5 cursor-pointer">
            <svg aria-hidden="true" className=" fill-blue-400 align-bottom" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6m1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06s.5-1.04 1.08-1.02c.6.02 1.05.45 1.03 1.08m.73-3.07-.47.3q-.31.23-.44.6a4 4 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13q-.02-.76.36-1.42.53-.64 1.26-1.06c.15-.1.21-.21.3-.33q.27-.32.28-.74c.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62q.88.62.88 1.82-.02.74-.43 1.24-.23.3-.86.79z"></path></svg>
          </button>


        </div>
        <div className="flex flex-col relative gap-1.25">
          <div className="relative">
            <div className=" w-full py-0.75 pl-0.75 pr-2.5 mb-0 border rounded-md focus-within:outline focus-within:ring-2 " >
              <span className="">
                {

                  tags && tags.map((tag) => {
                    return (
                      <span className="m-0.5  pl-1.25 pr-1 rounded-sm bg-slate-400  inline-flex font-bold justify-center min-w-0 align-middle whitespace-nowrap" key={tag}>
                        {tag}
                        <button onClick={(e) => handleTagDelete(tag, e)} title={`Eliminar etiqueta ${tag}`} className=" items-center self-stretch bg-transparent rounded-sm cursor-pointer flex justify-center mt-0.25 -mr-1 mb-0.25 ml-1 p-1 hover:bg-amber-100 ">
                          <svg className="10 align-bottom pointer-events-none" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg>

                        </button>
                      </span>
                    )
                  })

                }
              </span>
              <input onKeyDown={handleKeyDown} onChange={handleTagInput} value={tagInput} style={{ width: 19 + (tagInput.length > 0 ? (tagInput.length - 1) * 7 : 0) }} id="tagname-input" className={`${tags.length > 0 ? "" : "min-w-full"} focus:outline-0 w-full  pl-2 m-0 h-9  `} type="text" placeholder={` ${tags.length > 0 ? "" : "p. ej. (php json nodejs)"}`} />

              <span>

                {/* {
                  tags.slice(tags.indexOf(editingTag) + 1, tags.length).map((tag) => {
                    return (
                      <span onClick={(e) => handleTagEdition(tag, e)} className="m-0.5  pl-1.25 pr-1 rounded-sm bg-slate-400  inline-flex font-bold justify-center min-w-0 align-middle whitespace-nowrap" key={tag}>
                        {tag}
                        <button onClick={(e) => handleTagDelete(tag, e)} title={`Eliminar etiqueta ${tag}`} className=" items-center self-stretch bg-transparent rounded-sm cursor-pointer flex justify-center mt-0.25 -mr-1 mb-0.25 ml-1 p-1 hover:bg-amber-100 ">
                          <svg className="10 align-bottom pointer-events-none" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg>

                        </button>
                      </span>

                    )
                  })
                } */}

              </span>
            </div>


          </div>

        </div>
      </div>

    </div>
  )
}