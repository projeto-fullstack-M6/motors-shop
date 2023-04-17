import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <>
      <Header />

      <div>
        <section>
          <h2>Login</h2>
          <LoginForm />
        </section>
      </div>

      <Footer />
    </>
  );
};
