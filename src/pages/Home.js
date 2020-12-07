import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonToolbar,
  IonTitle,
  IonMenu,
  IonHeader,
  IonList,
  IonItem,
} from "@ionic/react";
import { colorPaletteOutline } from "ionicons/icons";
import Personal from "../components/undraw_personal_goals_edgd.svg";
import Works from "../components/undraw_Firmware_jw6u.svg";

import "../theme/variables.css";
import useBreakpoints from "../breakpoints";

import Footer from "./Footer";

const Home = () => {
  const lgUp = useBreakpoints({ breakpoint: "lg", dir: "up" });

  const [red, setRed] = useState(255);
  // const [red, setRed] = useState(58);
  const [green, setGreen] = useState(255);
  // const [green, setGreen] = useState(223);
  const [blue, setBlue] = useState(255);
  // const [blue, setBlue] = useState(111);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="ion-text-center ion-padding"
          style={{
            backgroundColor: `rgba(${red},${green},${blue},0.4)`,
          }}
        >
          <IonLabel>
            <h1>Hello World!</h1>
          </IonLabel>
          {lgUp ? (
            <p>
              こちらはt-shinkai00のポートフォリオサイトです。
              <br />
              私がこれまでに手がけた制作物をご紹介します。
              <br />
              このサイトを訪れたあなたに私のことを深く知って欲しいと思い作りました。
            </p>
          ) : (
            <p>
              こちらはt-shinkai00のポートフォリオサイトです。
              私がこれまでに手がけた制作物をご紹介します。
              このサイトを訪れたあなたに私のことを深く知って欲しいと思い作りました。
            </p>
          )}
          <IonButton
            shape="round"
            // fill="outline"
            // style={{
            //   color: `rgb(${255 - red},${255 - green},${255 - blue})`,
            // }}
            onClick={() => {
              setRed(Math.random() * 255);
              setGreen(Math.random() * 255);
              setBlue(Math.random() * 255);
            }}
          >
            色を変える
            <IonIcon icon={colorPaletteOutline} />
          </IonButton>
          {lgUp ? (
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCard href="/about">
                    <IonCardHeader>
                      <IonImg
                        src={Personal}
                        style={{ height: "50vh" }}
                      ></IonImg>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonCardTitle>About me</IonCardTitle>
                      <IonCardSubtitle>
                        私の生い立ちや趣味などが分かります
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard href="/works">
                    <IonCardHeader>
                      <IonImg src={Works} style={{ height: "50vh" }}></IonImg>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonCardTitle>What I made</IonCardTitle>
                      <IonCardSubtitle>
                        私が過去に制作したものが分かります
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          ) : (
            <IonGrid>
              <IonCard href="/about">
                <IonCardHeader>
                  <IonImg src={Personal} style={{ height: "50vh" }}></IonImg>
                </IonCardHeader>
                <IonCardContent>
                  <IonCardTitle>About me</IonCardTitle>
                  <IonCardSubtitle>
                    私の生い立ちや趣味などが分かります
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
              <IonCard href="/works">
                <IonCardHeader>
                  <IonImg src={Works} style={{ height: "50vh" }}></IonImg>
                </IonCardHeader>
                <IonCardContent>
                  <IonCardTitle>What I made</IonCardTitle>
                  <IonCardSubtitle>
                    私が過去に制作したものが分かります
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonGrid>
          )}
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
