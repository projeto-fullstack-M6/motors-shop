import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoginForm } from "./LoginForm";
import { StyledTitle } from "../../styles/typography";
import { StyledLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { LoadingPage } from "../../components/LoadingPages";

export const LoginPage = () => {
  const { loadingLogin } = useContext(UserContext);
  return (
    <>
      {loadingLogin ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <StyledLogin className="login">
            <section className="section-login">
              <StyledTitle tag="h2" fontSize="heading-5-500" color="black">
                Login
              </StyledTitle>
              <LoginForm />
            </section>
          </StyledLogin>
          <Footer />
        </>
      )}
    </>
  );
};
