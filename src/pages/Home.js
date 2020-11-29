import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "../theme/variables.css";

const Home = () => {
  const [state, setstate] = useState(initialState);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ホーム</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ backgroundColor: "rgb(0,0,255)" }}>
          <h1>hello</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
