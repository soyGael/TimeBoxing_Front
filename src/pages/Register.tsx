import { useForm, SubmitHandler } from "react-hook-form";
import Login from "../assets/images/login.png";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="d-flex container border position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 w-100 border-end">
        <h2 className="text-center boder border-bottom pb-2">Time <span className="p-1 bg-primary text-white rounded">Boxing</span></h2>
        <div className="mb-3">
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Nombre
          </label>
          <input
            placeholder="Tu correo electrónico"
            className="form-control"
            {...register("example")}
          />
        </div>
        <div className="mb-3">
          {/* register your input into the hook by invoking the "register" function */}
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            Correo
          </label>
          <input
            placeholder="Tu correo electrónico"
            className="form-control"
            {...register("example")}
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
            {...register("exampleRequired", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="d-flex g-2">
          <button type="submit" className="p-2 fw-bold btn btn-primary w-75">
            Iniciar sesión
          </button>
          <a
            href={Login}
            className="border p-2 mx-2 fw-bold btn bg-transparent border-bottom w-50"
          >
            Iniciar sesión
          </a>
        </div>
      </form>
      <img src={Login} alt="" className="w-50" />
    </div>
  );
}
