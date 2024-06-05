import "./App.css";
import useForm from "./useForm";

function App() {
  const { data, errors, handleSubmit, handleChange } = useForm(login);

  function login() {
    console.log("No errors, submit callback called!");
    console.log("Submitted data-- ", data);
  }
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
        <form
          action="#"
          onSubmit={handleSubmit}
          className="border border-black w-[30%] rounded-lg shadow-xl flex flex-col justify-center items-center py-6"
        >
          <div className="flex flex-col items-center justify-center w-[80%] mb-2">
            <div className="self-start">
              <label htmlFor="lname">Email id</label>
            </div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className={`border border-black rounded-md h-9 w-full mt-2 indent-2 ${
                errors.email ? "text-red-500" : "text-black"
              }`}
              onChange={handleChange}
              value={data.email || ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm self-start mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center justify-center w-[80%] mb-2">
            <div className="self-start">
              <label htmlFor="lname">Password</label>
            </div>
            <input
              type="text"
              placeholder="Password"
              name="password"
              className={`border border-black rounded-md h-9 w-full mt-2 indent-2 ${
                errors.password ? "text-red-500" : "text-black"
              }`}
              onChange={handleChange}
              value={data.password || ""}
            />
            {errors.password && (
              <p className="text-red-500 text-sm self-start mt-1">
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
{
  /* <input
            type="text"
            id="lname"
            placeholder="Last Name here"
            {...register("lname", {
              required: "Last name is required",
              minLength: { value: 3, message: "Min 3 characters" },
              pattern: {
                value: /^[A-Z][^0-9]+$/,
                message:
                  "First letter should be capital & Numbers are not allowed.",
              },
            })}
          />
          {errors.lname && <p>{errors.lname.message}</p>} */
}
