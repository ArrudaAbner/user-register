import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitles: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir",
};

export default class UserCrux extends Component {
    render() {
        return(
            <Main {...headerProps}>
                Cadastro Usuário
            </Main>
        )
    }
}
