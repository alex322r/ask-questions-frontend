/* eslint-disable react/prop-types */


export default function PostTitle({ title, error, errorRef, handleTitleChange }) {

  const errorText = error === "empty" ? "El Titulo es requerido" : error === "short" ? "El Titulo debe tener al menos 30 caracteres" : error === "long" ? "El Titulo debe tener menos de 300 caracteres" : ""


  return (


    <div ref={errorRef} className="relative mb-4.5">
      <div className="flex flex-col">
        <label htmlFor="title">Titulo <abbr>*</abbr>
          <div className="flex align-baseline cursor-pointer">
            <p className=" text-gray-300 mt-0.75 basis-3/4">Sé especifico e imagina que estás haciendo la pregunta a otra persona</p>
            <div className="mt-0.75 grow shrink basis-auto">
            </div>
          </div>
        </label>
        <div className="relative grow shrink basis-auto">
          <input onChange={handleTitleChange} value={title} className=" w-full border border-gray-400 rounded-lg px-2.5 py-2.25" type="text" name="title" id="title" maxLength="300" tabIndex="100" placeholder="¿Cuál es tu pregunta sobre programación? Sé específico." />
          {
            error !== "valid" && <svg aria-hidden="true" className=" fill-red-700 absolute right-2 top-3.5" width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8s3.64-8 8-8 8 3.64 8 8-3.64 8-8 8M8 4v6h2V4zm0 8v2h2v-2z"></path></svg>
          }
        </div>
        <div className=" text-red-400" >
          {
            errorText
          }

        </div>
      </div>
      <div className=" overflow-hidden pb-0.75">
      </div>
    </div>
  )
}