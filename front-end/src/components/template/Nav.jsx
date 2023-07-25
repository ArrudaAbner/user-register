/* eslint-disable import/no-anonymous-default-export */
import "./Nav.css";
import React from "react";

export default (props) => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        {/* Refatorar para componentes isolados */}
        <a href="#/">
          <i className="fa fa-home"></i> Início
        </a>
        <a href="#/users">
          <i className="fa fa-users"></i> Usuários
        </a>
      </nav>
    </aside>
  );
};
