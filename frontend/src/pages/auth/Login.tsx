import { useForm, SubmitHandler } from "react-hook-form";
import IUser from "../../interfaces/IUser";
import { FiLock, FiMail } from "react-icons/fi";


export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => console.log(data);

  return (
    <body className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex flex-col md:flex-row justify-center items-center flex-grow px-4 md:px-10 space-y-8 md:space-y-0 md:space-x-8 py-5">
        {/* Contenedor de inicio de sesión */}
        <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl w-full max-w-xl flex flex-col h-full md:h-auto mt-[-10]">
          <section className="flex">
            <div className="relative w-full flex flex-col justify-center px-8 py-5">
              <div className="absolute inset-0 bg-cover bg-center" />
              <div className="flex flex-col md:flex-row justify-between mb-4 relative z-10">
                <button className="w-full py-1 px-4 bg-slate-800 text-white border-2 border-slate-900 rounded-md font-regular">
                  Iniciar sesión
                </button>
                <div className="m-1"></div>
                <button className="w-full py-1 px-4 bg-white text-slate-800 border-2 border-slate-900 rounded-md font-regular">
                  Registrarse
                </button>
              </div>

              <div className="my-4 border-t border-gray-300" />

              <div className="relative z-10 p-6 rounded-lg pb-10">
                <div className="flex items-center mb-4">
                  <img src='' alt="Logo" className="h-11 mr-2" />
                  <a href="#" className="text-slate-900 font-semibold text-xl">
                    timeboxing
                  </a>
                </div>
                <h1 className="text-center text-3xl font-semibold mb-3 text-[#303030]">
                  ¡Hola, de nuevo!
                </h1>
                <h6 className="text-center font-light text-sm mb-6 text-gray-400">
                  Ingresa tu correo y contraseña
                </h6>
                {/* "handleSubmit" will validate your inputs before invoking
                "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
                  <div className="relative w-full max-w-xs">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type="email" defaultValue="test" {...register("email", { required: true })} className="mt-1 block w-full pl-10 border border-[gray-300] placeholder: font-light text-sm rounded-lg shadow-sm p-2" required />
                    <FiMail className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                  </div>
                  <div className="relative w-full max-w-xs">
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("password", { required: true })} className="mt-1 block w-full pl-10 border border-[gray-300] placeholder: font-light text-sm rounded-lg shadow-sm p-2" />
                    {/* errors will return when field validation fails  */}
                    {errors.password && (
                      <span>This field is required</span>
                    )}
                    <FiLock className="absolute left-3 top-3 text-[#303030] h-5 w-5" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    </div>
                  </div>
                  <div className="relative w-full max-w-xs flex justify-end">
                    <a href="#" className="text-blue-800 text-sm mb-5 underline">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="flex flex-col justify-end items-center mt-4"></div>
                  <button type="submit" className="transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300 w-64 py-1.5 px-2 text-white rounded-md font-regular">
                    Iniciar sesión
                  </button>
              </div>
            </form>
        </div>
      </div>
    </section>
        </div >
    </main >
</body >
  );
};