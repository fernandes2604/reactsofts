import NavBar from '../layouts/NavBar'
import { useState } from "react";

function Feedback() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formSubmitEndpoint = "https://formsubmit.co/evandrofernandesfx2@gmail.com";
    const response = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  };

  return (
    <div className="container">
      <NavBar active1="" active2="" active3='btn-primary active' classs='aqui'/>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8 mt-2">
          <div className="card bg-transparent">
            <div className="card-header"><h1 className='d-none'>Feedback</h1>
            <p>Deixe aqui o seu fedback ou duvida e nós entraremos em contacto o mais breve possivel</p></div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="tnome">Nome:</label>
                  <input id="tnome" name="nome" type="text" className="form-control" placeholder="Digite aqui o seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="temail">E-mail:</label>
                  <input id="temail" name="email" type="email" className="form-control" placeholder="name@gmail.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="tmsg">Mensagem:</label>
                  <textarea id="tmsg" name="mensagem" className="form-control" placeholder="Diga-nos o que pensa." rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="tclass">Classifique-nos de 1 a 10:</label>
                  <input id="tclass" name="classificacao" type="range" className="form-control-range" min="1" max="10" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
              {formStatus === "success" && <div className="alert alert-success mt-3">Mensagem enviada com sucesso!</div>}
              {formStatus === "error" && <div className="alert alert-danger mt-3">Ocorreu um erro ao enviar a mensagem.</div>}
            </div>
          </div>
        </div>
        <article about="Templates de sites, sobre o projeto" className="col-md-11 m-auto" title="Sobre o projeto de Templates de Sites">
      <h1 className="fs-4 fw-lighter mt-5"><i>Sobre</i></h1>
      <p>Sites Soft é um projeto que tem como objetivo oferecer templates gratuitos para os internautas, facilitando a criação de sites por meio desses modelos. O projeto nasceu a partir de uma ideia para um trabalho escolar sobre formas de ganhar dinheiro. Embora os templates sejam gratuitos, há uma opção para solicitar um site totalmente novo, o que possibilita a obtenção de renda por meio de cada encomenda.</p>
    </article>
      </div>
      
    </div>
  );
}

export default Feedback;