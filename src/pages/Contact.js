import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoGithub,
  logoTwitter,
  mailOutline,
} from "ionicons/icons";

function Contact() {
  return (
    <div className="ion-text-center" style={{ padding: "20px" }}>
      <IonButton
        href="https://github.com/t-shinkai00"
        fill="outline"
        color="dark"
      >
        <IonIcon icon={logoGithub} />
      </IonButton>
      <IonButton
        href="https://www.facebook.com/profile.php?id=100032320972953"
        fill="outline"
      >
        <IonIcon icon={logoFacebook} />
      </IonButton>
      <IonButton href="https://twitter.com/t_shinkai00" fill="outline">
        <IonIcon icon={logoTwitter} />
      </IonButton>
      <IonButton
        href="mailto:t-shinkai00@gmail.com"
        fill="outline"
        color="success"
      >
        <IonIcon icon={mailOutline} />
      </IonButton>
    </div>
  );
}

export default Contact;
