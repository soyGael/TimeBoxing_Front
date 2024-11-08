import { useForm, SubmitHandler } from "react-hook-form";
import Login from "../assets/images/login.png";
import Register from "./Register";
import IUser from "../interfaces/iUser";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = (data) => console.log(data);

  return (
    <div className="d-flex container border position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 w-100 border-end">
        <h2 className="text-center pb-2">Time <span className="p-1 bg-primary text-white rounded">Boxing</span></h2>
        <div className="mb-3">
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Correo electrónico
          </label>
          <input
            placeholder="Tu correo electrónico"
            className="form-control"
            {...register("name")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Contraseña
          </label>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="password"
            required
            placeholder="Tu contraseña"
            className="form-control"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="d-flex g-2">
          <button type="submit" className="p-2 fw-bold btn btn-primary w-75">
            Iniciar sesión
          </button>
          <a
            href="#"
            className="border p-2 mx-2 fw-bold btn bg-transparent border-bottom w-50"
          >
            Registrarse
          </a>
        </div>
      </form>
      <img src={Login} alt="" className="w-50" />
    </div>
  );
}
