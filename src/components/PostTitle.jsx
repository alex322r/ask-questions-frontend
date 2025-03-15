export default function PostTitle() {
  return (
    <div className="relative mb-4.5">
      <div className="flex flex-col">
        <label htmlFor="title">Titulo <abbr>*</abbr>
          <div className="flex align-baseline cursor-pointer">
            <p className=" text-gray-300 mt-0.75 basis-3/4">Sé especifico e imagina que estás haciendo la pregunta a otra persona</p>
            <div className="mt-0.75 grow shrink basis-auto">
            </div>
          </div>
        </label>
        <div className="relative grow shrink basis-auto">
          <input className=" w-full border border-gray-400 rounded-lg px-2.5 py-2.25" type="text" name="title" id="title" maxLength="300" tabIndex="100" placeholder="¿Cuál es tu pregunta sobre programación? Sé específico." />
        </div>
      </div>
      <div className=" overflow-hidden pb-0.75">
      </div>
    </div>
  )
}