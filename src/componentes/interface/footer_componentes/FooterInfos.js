import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterInfos = () => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center  p-4"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="building" color="red" size="2x" />
        </div>
        <div className="align-self-center p-4" style={{ width: "75%" }}>
          Pereira Higiene, Limpeza e Descartáveis
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center p-4"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="clock" color="red" size="2x" />
        </div>
        <div className="align-self-center p-4" style={{ width: "75%" }}>
          Segunda a Sexta: 08:00 - 19:00
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center p-4"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="map-pin" color="red" size="2x" />
        </div>
        <div className="align-self-center p-4" style={{ width: "75%" }}>
          R. Eliane Mota, 2505 - Ipiranga, São José - SC
          <br />
          88110-840.
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center align-self-center  p-4"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="phone" color="red" size="2x" />
        </div>
        <div className="align-self-center p-4" style={{ width: "75%" }}>
          Fixo: (48)3246-9892
          <br />
          WhatsApp: (48)99947-0129
        </div>
      </div>
      <div className="d-flex">
        <div
          className="d-flex justify-content-center p-4"
          style={{ width: "25%" }}
        >
          <FontAwesomeIcon icon="envelope" color="red" size="2x" />
        </div>
        <div className="align-self-center p-4" style={{ width: "75%" }}>
          pereira@gmail.com
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterInfos;
