import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import logoAwardsBianco from "../images/logoAwardsBianco.webp";
import global from "../../resources/global.json";

export default function Awards() {
  return (
    <section>
      <header
        className="header-awards"
        style={{
          textAlign: "center",
          height: "45vh",
          marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
        }}
      ></header>

      <div className="where-is-the-event-awards row mx-0 pt-3 pb-3">
        <div className="col-md-6">
          <div className="row">
            <FontAwesomeIcon
              className="col-2"
              icon={faLocationDot}
              style={{ color: "#ffd800" }}
              size="2x"
            />
            <p className="col-8">
              Università La Sapienza - Nuovo Teatro Ateneo Piazzale Aldo Moro,
              5, 00185 Roma RM
            </p>
          </div>
          <div className="row">
            <FontAwesomeIcon
              className="col-2"
              icon={faCalendar}
              style={{ color: "#ffd800" }}
              size="2x"
            />
            <p className="col-8">18 Aprile 2023</p>
          
            <div className="row mt-3">
              <a
                href="https://www.eventbrite.it/e/biglietti-awards-by-tedxsapienzau-514452590547"
                type="button"
                className="btn5-1"
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontFamily: "GothamBold",
                }}
              >
                Compra i biglietti
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <LazyLoadImage src={logoAwardsBianco} width="300px" />
        </div>
      </div>
      <div className="container mb-5 d-flex justify-content-center align-items-center flex-column">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          COSA SONO I TEDxSAPIENZA AWARDS?
        </h1>
        <p
          style={{
            fontSize: "23px",
            fontFamily: "GothamBook",
            maxWidth: "75ch",
            textAlign: "justify",
            lineHeight: "40px",
          }}
        >
          Il concorso <strong>Back to Zero Awards</strong> è organizzato dal
          Comitato TEDxSapienzaU ed ha lo scopo di promuovere idee di valore in
          linea con il motto TED <i>“Ideas worth spreading”</i>, offrendo ai
          vincitori la prestigiosa opportunità di esibirsi sul palco dell’
          <strong>edizione 2023</strong> del TEDxSapienzaU. I 5 vincitori del
          concorso TEDxSapienzaU Awards,{" "}
          <strong style={{ color: global.COLORS.ROSSO_EDIZIONE_2022 }}>
            3 Speaker
          </strong>{" "}
          e{" "}
          <strong style={{ color: global.COLORS.ROSSO_EDIZIONE_2022 }}>
            2 Artist
          </strong>
          , vengono premiati sul palco della finale e hanno l’occasione di
          esibirsi durante l’evento <strong>TEDxSapienzaU 2023</strong>!
        </p>
      </div>
    </section>
  );
}
