import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { StyledTitle } from "../../styles/typography";
import { StyledLogin } from "../Login/style";

export const RegisterPage = () => {
    return (
        <>
          <Header />
    
          <StyledLogin>
            <section className="section-login">
              <StyledTitle tag="h2" fontSize="heading-5-500" color="black">
                Cadastro
              </StyledTitle>
    
              {/* <RegisterForm /> */}
            </section>
          </StyledLogin>
    
          <Footer />
        </>
      );
}