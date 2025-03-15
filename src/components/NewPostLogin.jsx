export default function NewPostLogin() {

  return (
    <div className="p-0 mt-4.5 mb-4.5">
      <div className="flex flex-col -m-2.25">
        <div className="w-auto m-2.25 flex flex-col justify-between">
          <h3 className=" text-2xl m-1.25 ">Registrarse o <a className="text-blue-400" id="login-link" href="">iniciar sesión</a></h3>
          <div className="leading-1.25 m-1.25 border-blue-400 border rounded-lg text-base p-3 cursor-pointer inline-flex items-center justify-center gap-2 relative text-center" data-ga="">
            <svg aria-hidden="true" className="" width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.8 4.8 0 0 1 4.48-3.3"></path>
            </svg>
            Regístrate mediante Googlee
          </div>
          <div className="leading-1.25 m-1.25 border-blue-400 border rounded-lg text-base p-3 cursor-pointer inline-flex items-center justify-center gap-2 relative text-center" data-ga="">
            <svg aria-hidden="true" className="" width="18" height="18" viewBox="0 0 18 18"><path fill="#BCBBBB" d="M14 16v-5h2v7H2v-7h2v5z"></path><path fill="#F48024" d="m12.09.72-1.21.9 4.5 6.07 1.22-.9zM5 15h8v-2H5zm9.15-5.87L8.35 4.3l.96-1.16 5.8 4.83zm-7.7-1.47 6.85 3.19.63-1.37-6.85-3.2zm6.53 5L5.4 11.39l.38-1.67 7.42 1.48z"></path></svg> Regístrate con email y contraseña
          </div>
        </div>
        <div className="flex flex-col w-auto m-2.25">
          <h3 className="text-2xl m-1.25 ">Publicar como invitado</h3>
          <div className="m-1.25">
            <div className="flex flex-col">
              <label className="px-0.75 cursor-pointer text-base font-bold" htmlFor="display-name">Nombre</label>
              <div className="flex m-0.75 relative ">
                <input className="w-full border rounded-lg text-lg py-2.25 px-2.5" id="display-name" name="display-name" maxLength="30" type="text" tabIndex="105" placeholder="" />
              </div>
            </div>
          </div>
          <div className="m-1.25">
            <div className="flex flex-col">
              <div className="text-base">
                <div className="flex flex-col -m-0.1">
                  <label className="px-0.75 m-0.25 cursor-pointer font-bold" htmlFor="m-address">Correo electrónico</label>
                  <p className="px-0.75 m-0.25 text-sm text-blue-400">Requerido, nunca se muestra</p>
                </div>
              </div>
              <div className="flex m-0.75 relative ">
                <input className="w-full border rounded-lg text-lg py-2.25 px-2.5" id="m-address" name="m-address" type="text" size="40" tabIndex="106" placeholder="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
