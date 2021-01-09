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
import {
  codeSlashOutline,
  homeOutline,
  personCircleOutline,
} from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

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

const App = () => {
  const lgUp = useBreakpoints({ breakpoint: "lg", dir: "up" });
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/" component={Home} exact={true} />
            {/* <Route path="/about" component={About} exact={true} /> */}
            {/* <Route path="/works" component={Works} exact={true} /> */}
            <Route component={NotFound} />
            {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
          </IonRouterOutlet>
          {/* <IonTabBar slot="top">
            <Header />
          </IonTabBar> */}
          {lgUp ? (
            <IonTabBar slot="top" color="dark">
              <IonTabButton tab="Home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="About">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>About</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Works">
                <IonIcon icon={codeSlashOutline} />
                <IonLabel>Works</IonLabel>
              </IonTabButton>
            </IonTabBar>
          ) : (
            <IonTabBar slot="bottom" color="dark">
              <IonTabButton tab="Home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="About">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>About</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Works">
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
