import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  codeSlashOutline,
  homeOutline,
  personCircleOutline,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import useBreakpoints from "./breakpoints";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";

const App = () => {
  const lgUp = useBreakpoints({ breakpoint: "lg", dir: "up" });
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/skills" component={Skills} exact={true} />
            <Route path="/works" component={Works} exact={true} />
            <Route component={NotFound} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          {/* <IonTabBar slot="top">
            <Header />
          </IonTabBar> */}
          {lgUp ? (
            <IonTabBar slot="top" color="dark">
              <IonTabButton tab="Home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Skills" href="/skills">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Skills</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Works" href="/works">
                <IonIcon icon={codeSlashOutline} />
                <IonLabel>Works</IonLabel>
              </IonTabButton>
            </IonTabBar>
          ) : (
            <IonTabBar slot="bottom" color="dark">
              <IonTabButton tab="Home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Skills" href="/skills">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Skills</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Works" href="/works">
                <IonIcon icon={codeSlashOutline} />
                <IonLabel>Works</IonLabel>
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
