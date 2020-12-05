import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "../theme/variables.css";

const Home = () => {
  const [color, setColor] = useState("lightgreen");
  const [count, setcount] = useState(0);
  const changeColor = () => {
    setcount(count + 1);
    if (count % 3 == 0) {
      setColor("lightgreen");
    } else if (count % 3 == 1) {
      setColor("lightyellow");
    } else {
      setColor("green");
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ backgroundColor: color }}>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">ホーム</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonButton
            onClick={() => {
              changeColor();
            }}
          >
            push!!
          </IonButton>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
