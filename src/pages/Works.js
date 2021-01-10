import React, { useState } from "react";
import Typical from "react-typical";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { colorPaletteOutline } from "ionicons/icons";
import TableImage from "../components/table.jpeg";

import "../theme/variables.css";
import useBreakpoints from "../breakpoints";

import Footer from "../components/Footer";

const Works = () => {
  const lgUp = useBreakpoints({ breakpoint: "lg", dir: "up" });

  const [red, setRed] = useState(234);
  const [green, setGreen] = useState(139);
  const [blue, setBlue] = useState(201);

  return (
    <IonPage>
      <IonContent fullscreen>
        {lgUp ? (
          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton
              onClick={() => {
                setRed(Math.random() * 255);
                setGreen(Math.random() * 255);
                setBlue(Math.random() * 255);
              }}
              color="dark"
              // size="small"
            >
              {/* 色を変える */}
              <IonIcon icon={colorPaletteOutline} />
            </IonFabButton>
          </IonFab>
        ) : (
          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton
              onClick={() => {
                setRed(Math.random() * 255);
                setGreen(Math.random() * 255);
                setBlue(Math.random() * 255);
              }}
              color="dark"
              size="small"
            >
              {/* 色を変える */}
              <IonIcon icon={colorPaletteOutline} />
            </IonFabButton>
          </IonFab>
        )}

        <section
          className="ion-text-center"
          style={{
            background: `linear-gradient(to right, rgb(255,161,3) ,rgba(${red},${green},${blue},0.4))`,
            height: "93vh",
            borderBottom: "2px solid grey",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "50vh",
              background: `url(${TableImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top left",
            }}
          />
          <div
            style={{
              paddingTop: "15vh",
            }}
          >
            <IonLabel>
              <Typical
                steps={["I am T-Shinkai00.", 3000, "Hello World!", 3000]}
                loop={Infinity}
                wrapper="h1"
              />
            </IonLabel>
            {lgUp ? (
              <p>
                こちらはT-Shinkai00のポートフォリオサイトです。
                <br />
                私がこれまでに手がけた制作物をご紹介します。
                <br />
                このサイトを訪れたあなたに私のことを深く知って欲しいと思い作りました。
              </p>
            ) : (
              <p className="ion-padding">
                こちらはT-Shinkai00のポートフォリオサイトです。
                私がこれまでに手がけた制作物をご紹介します。
                このサイトを訪れたあなたに私のことを深く知って欲しいと思い作りました。
              </p>
            )}
          </div>
        </section>

        <section
          className="ion-text-center"
          style={{
            background: `linear-gradient(to right, rgb(255,161,3) ,rgba(${red},${green},${blue},0.4))`,
            height: "93vh",
            borderBottom: "2px solid grey",
          }}
        >
          {/* {lgUp ? (
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCard href="/about">
                    <IonCardHeader>
                      <IonImg
                        src={PersonalImage}
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
                      <IonImg
                        src={WorksImage}
                        style={{ height: "50vh" }}
                      ></IonImg>
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
                  <IonImg
                    src={PersonalImage}
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
              <IonCard href="/works">
                <IonCardHeader>
                  <IonImg src={WorksImage} style={{ height: "50vh" }}></IonImg>
                </IonCardHeader>
                <IonCardContent>
                  <IonCardTitle>What I made</IonCardTitle>
                  <IonCardSubtitle>
                    私が過去に制作したものが分かります
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonGrid>
          )} */}
        </section>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Works;
