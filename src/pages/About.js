import React from "react";
import { IonPage, IonContent } from "@ionic/react";

import "../theme/variables.css";
import Footer from "../components/Footer";

function About() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>about</h1>
        <Footer />
      </IonContent>
    </IonPage>
  );
}

export default About;
