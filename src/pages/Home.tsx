import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonList, IonSearchbar, IonRow, IonCol,IonGrid } from '@ionic/react';
import SpaceXCall from '../components/SpaceXCall';
import '../theme/variables.css';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  // const [apiResponseArray, getAPIResponseArray] = React.useState([]);
  
  // const sendAPIResponseToParent = (apiResponse: String[] = []) => {
  //   getAPIResponseArray(apiResponse)
  // }

  return (
    <IonPage class="homePage">
      <IonGrid>
        <IonHeader>
          <IonRow style={{alignItems: 'center'}}>
            <IonCol size="4"> 
              <IonTitle>SpaceX <br/> Missions</IonTitle>
            </IonCol>
            <IonCol size="8">
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated showCancelButton="focus"/>
            </IonCol>
          </IonRow>
        </IonHeader>
        <IonContent >
          <IonList>
            <SpaceXCall
              // apiResponseArray={apiResponseArray}
              // sendAPIResponseToParent={sendAPIResponseToParent}
            />
          </IonList>
        </IonContent>
      </IonGrid>
    </IonPage>
  );
};

export default Home;
