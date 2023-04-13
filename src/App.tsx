import { useForm } from "react-hook-form";
import { Input } from "./components/Input";
import { StyledButton } from "./styles/button";
import { StyledForm } from "./styles/form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  return (
    <div className="App">
      <StyledForm>
        <Input
          label="E-mail"
          type="email"
          register={register("email")}
          defaultValue=""
          placeholder="Seu e-mail"
          error={errors.email}
        />
        <Input
          label="Nome Completo"
          type="text"
          register={register("name")}
          defaultValue=""
          placeholder="Seu nome"
          error={errors.name}
        />
        <Input
          label="Password"
          type="password"
          register={register("password")}
          defaultValue=""
          placeholder="Sua senha"
          error={errors.password}
        />
      </StyledForm>
    </div>
  );
}

export default App;
