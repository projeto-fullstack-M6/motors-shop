import { useForm } from "react-hook-form";
import { Input } from "./components/Input";
import { StyledButton } from "./styles/button";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  return (
    <div className="App">
      <form action="">
        <Input
          label="E-mail"
          type="email"
          register={register("email")}
          defaultValue=""
          placeholder="E-mail"
          error={errors.email}
        ></Input>
      </form>
    </div>
  );
}

export default App;
