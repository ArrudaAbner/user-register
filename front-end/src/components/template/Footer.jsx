/* eslint-disable import/no-anonymous-default-export */
import "./Footer.css"
import React from "react"

export default props => {
    return(
        <footer className="footer">
            <span>
                Desenvolvido com <i className="fa fa-heart text-danger"></i> por <strong>Abner Arruda</strong>
            </span>
        </footer>
    )
}