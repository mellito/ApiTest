import React from "react";
import PropTypes from "prop-types";
import "./cardcontainer.css";

function CardContiner({ children, title }) {
  return (
    <section className="cardContainer">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

CardContiner.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardContiner;
