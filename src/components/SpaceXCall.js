import React from 'react';
import { IonItem, IonLabel } from '@ionic/react'
import { useQuery, gql } from "@apollo/client";

const spaceXQuery = gql`
  {
    launches(find: {mission_name: ""}) {
      id
      mission_name
      launch_year
      details
    }
  }
`;

export default function SpaceXCall(): JSX.Element {
  const { loading, error, data } = useQuery(spaceXQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:(</p>;
  const apiResponse = [...data.launches]
  const sortedResponse = apiResponse.sort((a, b) => a.mission_name.localeCompare(b.mission_name))
  console.log(sortedResponse)
  return sortedResponse.map(({ id, mission_name, launch_year, details }) => (
    <IonItem>
      <div key={id} className='missionDetails'>
        <p>
          <IonLabel>
            {mission_name} - {launch_year}
          </IonLabel>
          <br/>
          {details}
        </p>
      </div>
    </IonItem>
  ))
}