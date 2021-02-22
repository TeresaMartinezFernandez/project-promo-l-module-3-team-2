import React from "react";
import "../stylesheets/layout/_card.scss";

function CardPreview() {
  return (
    <div className="bg__container--card">
      <section className="card">
        <div className="card__container wrapper">
          <button className="card__reset js-reset" type="reset">
            <i className="far fa-trash-alt"></i> Reset
          </button>
          <article className="card__data js-card">
            <h2 className="card__data--title name js-preview-name">
              Nombre Apellido
            </h2>
            <h3 className="card__data--title job js-preview-job">
              Front-end developer
            </h3>
            <div className="card__data--img js__profile-image js-preview-photo"></div>
            <ul className="card__data--list">
              <li className="circle">
                <a
                  href="555 333 222"
                  className="card__data--icon phone js-preview-phone"
                >
                  <i className="fas fa-mobile-alt"></i>
                </a>
              </li>
              <li className="circle">
                <a
                  href="mailto:username@example.com"
                  className="card__data--icon email js-preview-email"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li className="circle">
                <a
                  href="www.myLinkedIn.com"
                  className="card__data--icon linkedin js-preview-linkedin"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="circle">
                <a
                  href="www.myGitHub.com"
                  className="card__data--icon github js-preview-github"
                  target="_blank"
                >
                  <i className="fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default CardPreview;
