import React from "react";

import gpt3Logo from "../../assets/logo.svg";

import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Você quer entrar no futuro antes dos outros?
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar Acesso Antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          GPT-3, <br /> Todos os direitos reservados.
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Mídias Sociais</p>
        <p>Contadores</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Companhia</h4>
        <p>Termos & Condições </p>
        <p>Política de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entrar em contato
        </h4>
        <p>GPT-3</p>
        <p>000-000000</p>
        <p>lucas@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;
