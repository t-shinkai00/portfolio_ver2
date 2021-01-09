import React from "react";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import {
  logoFacebook,
  logoGithub,
  logoTwitter,
  mailOutline,
} from "ionicons/icons";

function Footer() {
  return (
    <section className="ion-text-center">
      <p>もし何か御用でしたらご連絡ください。</p>
      <IonButton
        href="https://github.com/t-shinkai00"
        target="_blank"
        fill="outline"
        color="dark"
      >
        <IonIcon icon={logoGithub} />
      </IonButton>
      <IonButton
        href="https://www.facebook.com/profile.php?id=100032320972953"
        target="_blank"
        fill="outline"
      >
        <IonIcon icon={logoFacebook} />
      </IonButton>
      <IonButton
        href="https://twitter.com/t_shinkai00"
        target="_blank"
        fill="outline"
      >
        <IonIcon icon={logoTwitter} />
      </IonButton>
      <IonButton href="mailto:t.shinkai00@gmail.com" fill="outline">
        <IonIcon icon={mailOutline} />
      </IonButton>
      <IonLabel>
        <p>&copy; t-shinkai00. All right reserved.</p>
      </IonLabel>
    </section>
  );
}

export default Footer;
