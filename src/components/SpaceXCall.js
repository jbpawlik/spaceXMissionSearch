import React from 'react';
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

  return data.launches.map(({ id, missionName, launchYear, details }) => (
    <div className='missionDetails'>
      <p>
        {id}: {missionName}
        <br/>
        {launchYear}
        <br/>
        {details}
      </p>
    </div>
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