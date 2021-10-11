import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonSearchbar, IonFooter } from '@ionic/react';
import SpaceXCall from '../components/SpaceXCall';
import './Home.css';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SpaceX Missions</IonTitle>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated showCancelButton="focus" placeholder="Search missions by name"/>
          <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Test</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonList>
          <SpaceXCall />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
