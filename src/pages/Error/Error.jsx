import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import getIcon from "../../icons.jsx";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./Error.css"

const Error = () => {
  return (
    <div className="content">

        <Header />

      <div className="page-content">
        <main>
          <div className="container">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página solicitada não foi encontrada</p>
            <button onClick={() => window.location.href = '/'}>Voltar para a página inicial<i>{getIcon(faArrowRight, '#B8B9C8')}</i></button>
          </div>
        </main>
      </div>

        <Footer />
    </div>
  );
};

export default Error;
