import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
  IonCol, IonImg, IonActionSheet, useIonViewDidLeave
} from '@ionic/react'; import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import './Tab2.css';
import { useIonViewWillEnter, isPlatform } from '@ionic/react';

const Tab2: React.FC = () => {

  let counter = 0
  const checkActive = () => {
    if (isPlatform('ios')) {
      counter += 1
      console.log('The value of counter is ' + counter)

    }

  }

  useIonViewWillEnter(() => {
    console.log('Device Acitivity Started')
    setInterval(() => checkActive(), 1000)
  })


  const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>


    </IonPage>
  );
};

export default Tab2;
