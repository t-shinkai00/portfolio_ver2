import React from "react";
import { IonTabBar, IonTabButton, IonLabel, IonIcon } from "@ionic/react";
import {
  codeSlashOutline,
  homeOutline,
  personCircleOutline,
} from "ionicons/icons";

function Header() {
  return (
    <div>
      <IonTabButton tab="Home" href="/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="About" href="/about">
        <IonIcon icon={personCircleOutline} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Works" href="/works">
        <IonIcon icon={codeSlashOutline} />
        <IonLabel>Works</IonLabel>
      </IonTabButton>
    </div>
  );
}

export default Header;
