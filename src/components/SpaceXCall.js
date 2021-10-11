import React from 'react';
import { IonItem, IonLabel } from '@ionic/react'
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

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

export default function SpaceXCall() {
  const { loading, error, data } = useQuery(spaceXQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(({ id, mission_name, launch_year, details }) => (
    <IonItem>
      <IonLabel>
      <div key={id} className='missionDetails'>
        <p>
          {mission_name}
          <br/>
          {launch_year}
          <br/>
          {details}
        </p>
      </div>
      </IonLabel>
    </IonItem>
  ))
}

// const client = new ApolloClient({
//   uri: 'https://api.spacex.land/graphql/',
//   cache: new InMemoryCache()
// });

// export default function SpaceXCall() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//       <ExchangeRates />    </div>
//   );
// }