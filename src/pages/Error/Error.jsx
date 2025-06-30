import "../../App.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Error = () => {
  return (
    <div className="content">

        <Header />

      <div className="page-content">
        <main>
          <h1>Página não encontrada</h1>
        </main>
      </div>

        <Footer />
    </div>
  );
};

export default Error;
