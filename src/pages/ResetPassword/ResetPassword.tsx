import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ResetPasswordForm } from "./ResetPasswordForm";

import { StyledLogin } from "../Login/style";
import { StyledTitle } from "../../styles/typography";

export const ResetPassword = () => {
  return (
    <>
      <Header />

      <StyledLogin className="register">
        <section className="section-login">
          <StyledTitle tag="h2" fontSize="heading-5-500" color="black">
            Recuperação de Senha
          </StyledTitle>

          <ResetPasswordForm />
        </section>
      </StyledLogin>

      <Footer />
    </>
  );
};
