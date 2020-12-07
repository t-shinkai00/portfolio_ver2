import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

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
import {
  codeSlashOutline,
  homeOutline,
  personCircleOutline,
  sendOutline,
} from "ionicons/icons";
import useBreakpoints from "./breakpoints";

const App = () => {
  const lgUp = useBreakpoints({ breakpoint: "lg", dir: "up" });
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/works" component={Works} exact={true} />
            <Route path="/contact" component={Contact} exact={true} />
            <Route component={NotFound} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          {lgUp ? (
            <IonTabBar slot="top">
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
              <IonTabButton tab="Contact" href="/contact">
                <IonIcon icon={sendOutline} />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>
            </IonTabBar>
          ) : (
            <IonTabBar slot="bottom">
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
              <IonTabButton tab="Contact" href="/contact">
                <IonIcon icon={sendOutline} />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
