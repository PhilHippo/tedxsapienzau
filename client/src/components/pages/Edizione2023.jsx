import React, { useState, useEffect } from "react";

import "../../index.css";
import "../../resources/styles/edizione2023style.css";

import SpeakerCard from "../components/SpeakerCard";
import BioSpeakerPopup from "../components/BioSpeakerPopup";

import global from "../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Buffer } from "buffer";

import axios from "axios";

export default function Edizione2023() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);

  // useEffect(() => {
  // 	axios
  // 		.get(global.CONNECTION.ENDPOINT + "/speakers/edizione/2023")
  // 		.then((res, err) => {
  // 			setSpeakers(res.data);
  // 		})
  // 		.catch((err) => {
  // 			console.error(err);
  // 		});
  // }, []);

  /**
   * This function returns a spinner when the data from the db is still loading.
   * When all the speakers are fetched, this function returns the speaker card section
   */
  const handleSpeakersCardSection = () => {
    if (speakers.length === 0) {
      /** SPEAKERS NOT YET FETCHED FROM DATABASE */
      return (
        <div
          style={{
            height: "200px",
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="spinner"></div>
        </div>
      );
    } else {
      let res = [];
      speakers.map((speaker) => {
        const { id, nome, bio, categoria, foto, fotoSidebar } = speaker;
        let base64StringImage = Buffer.from(foto, "binary").toString("base64");
        let base64StringImageSidebar = Buffer.from(
          fotoSidebar,
          "binary"
        ).toString("base64");
        res.push(
          <SpeakerCard
            key={id}
            nomeSpeaker={nome}
            imgSrc={base64StringImage}
            bio={bio}
            fotoSidebar={base64StringImageSidebar}
            tag={categoria}
            setIsBioOpen={setIsBioOpen}
            setSelectedSpeakerInfo={setSelectedSpeakerInfo}
          />
        );
      });
      return res;
    }
  };

  return (
    <>
      <section>
        <header
          className="header-ed2023"
          style={{
            textAlign: "center",
            height: "45vh",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        ></header>

        <div className="where-is-the-event23 row mx-0 pt-3 pb-3">
          <div className="col-md-6">
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faLocationDot}
                style={{ color: global.COLORS.ROSSO_POSTER }}
                size="2x"
              />
              <p className="col-8">
                Aula Magna, <br />
                Palazzo del Rettorato <br />
                Sapienza Università di Roma
              </p>
            </div>
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faCalendar}
                style={{ color: global.COLORS.ROSSO_POSTER }}
                size="2x"
              />
              <p className="col-8">15 novembre 2023</p>
            </div>
          </div>
          <div className="col-md-6">
            <a
              href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-2023-back-to-zero-717157827367?aff=oddtdtcreator"
              type="button"
              className="btn5-1"
              style={{
                fontWeight: "bold",
                width: "50%",
                marginLeft: "50px",
                alignItems: "center",
                fontFamily: "GothamBold",
              }}
            >
              Ottieni i biglietti
            </a>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          IL NOSTRO OBIETTIVO
        </h1>
        <p style={{ fontSize: "20px", fontFamily: "GothamBook" }}>
          Il nostro obiettivo è <strong>azzerare</strong>, ricercare un punto{" "}
          <strong>zero</strong>: le disuguaglianze, i conflitti, i cattivi stili
          di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che
          rallentano la crescita della nostra società, peggiorando la qualità
          della nostra vita. <strong>Riconsiderare noi stessi </strong> ed il
          nostro modo di confrontarci. Imparare ed interagire con la società
          contemporanea, con le <strong>arti</strong> e le{" "}
          <strong>scienze</strong>. È fondamentale per costruire un mondo dove
          l'essere umano possa '<strong>rinascere</strong>', prosperando ed
          esprimendosi al meglio in ogni disciplina. Riscoprire le basi per{" "}
          <strong>rinascere</strong>, diventare persone migliori in un luogo
          migliore.
        </p>

        <p
          style={{
            fontSize: "30px",
            fontFamily: "GothamBook",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          ❝ L'uomo e il mondo che lo circonda non sono binari separati, ma
          rotaie che si muovono insieme, hanno bisogno l'uno dell'altro. ❞
        </p>
      </div>

      <div className="container mb-5">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          GLI SPEAKERS
        </h1>
        {/**NON CI SONO ANCORA SPEAKER DA MOSTRARE */}
        {/* <div className="row">{handleSpeakersCardSection()}</div> */}
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            fontStyle: "",
            color: "grey",
            textAlign: "center",
          }}
        >
          Coming Soon...
        </p>
      </div>
      {/* <BioSpeakerPopup
				isBioOpen={isBioOpen}
				setIsBioOpen={setIsBioOpen}
				selectedSpeakerInfo={selectedSpeakerInfo}
			/> */}
    </>
  );
}
