import React from "react";

import "./features.css";

import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu neque non sem malesuada sodales.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu neque non sem malesuada sodales. Aliquam erat volutpat.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Nunc et tempus libero. Integer eget sodales lectus, vitae semper eros. Quisque id lorem sem. Nunc eget eros quis odio commodo lobortis. Maecenas luctus pellentesque lacus vel ornare.",
  },
  {
    title: "Nulla facilisi",
    text: "Duis rhoncus ex nec semper gravida. Vivamus in suscipit quam, ut pharetra eros. Integer quis malesuada augue, eu tristique est. Ut vestibulum magna in tempor dapibus.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        O Futuro é Agora e Você Só Precisa Concretizá-lo. Entre no futuro hoje. E Faça acontecer.
      </h1>
      <p>Solicite acesso antecipado para começar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
