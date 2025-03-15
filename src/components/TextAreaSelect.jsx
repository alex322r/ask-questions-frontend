import { useRef } from "react";

export default function TextareaSelect() {
  const textareaRef = useRef(null);

  const selectText = () => {
    if (textareaRef.current) {
      textareaRef.current.select(); // Selecciona todo el texto
    }
  };

  const selectRange = (start, end) => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(start, end);
      textareaRef.current.focus(); // Asegurar que el usuario vea la selección
    }
  };

  return (
    <div className="p-4">
      <textarea ref={textareaRef} className="border p-2 w-full" defaultValue="Selecciona este texto" rows="4" />
      <div className="mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={selectText}>
          Seleccionar Todo
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => selectRange(0, 9)}>
          Seleccionar Parcialmente
        </button>
      </div>
    </div>
  );
}
