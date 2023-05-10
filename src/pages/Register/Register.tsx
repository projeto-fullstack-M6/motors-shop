import { RegisterForm } from "./RegisterForm";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { StyledTitle } from "../../styles/typography";
import { StyledLogin } from "../Login/style";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { LoadingPage } from "../../components/LoadingPages";

export const RegisterPage = () => {
  const { loadingRegister } = useContext(UserContext);
  return (
    <>
      {loadingRegister ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <StyledLogin className="register">
            <section className="section-login">
              <StyledTitle tag="h2" fontSize="heading-5-500" color="black">
                Cadastro
              </StyledTitle>
              <RegisterForm />
            </section>
          </StyledLogin>
          <Footer />
        </>
      )}
    </>
  );
};
