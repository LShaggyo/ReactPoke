import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <img
	    className="footer-img"
        src="https://www.pokemongoplusplus.com/img/img-2.jpg"
        alt="Pokeball"
        style={{ width: "300px", marginBottom: "10px" }}
      />
      <p>Disfruta la Pokédex</p>
      <p className="chic-text">LShaggyo</p>
      <a
        href="https://github.com/LShaggyo"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub size={30} />
      </a>
    </footer>
  );
};
