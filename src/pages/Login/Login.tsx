import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoginForm } from "./LoginForm";

import { StyledTitle } from "../../styles/typography";
import { StyledLogin } from "./style";

export const LoginPage = () => {
  return (
    <>
      <Header />

      <StyledLogin>
        <section className="section-login">
          <StyledTitle tag="h2" fontSize="heading-5-500" color="black">
            Login
          </StyledTitle>

          <LoginForm />
        </section>
      </StyledLogin>

      <Footer />
    </>
  );
};
