import React from 'react';

import { PageTitle } from '@speis/ui-header';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const FOODS = gql`
  {
    foods {
      name
      amount
      location
    }
  }
`;

const AppBody = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-family: IBM Plex Mono, Arial, Helvetica, sans-serif;
`

export const App = () => {

  const { loading, error, data } = useQuery(FOODS);

  function displayFoods() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <ul>{data.foods.map(food => <li key={food.name+Date.now()}>{food.amount} x {food.name} ({food.location})</li>) }</ul>
  }

  return (
    <AppBody>
      <header>
        <PageTitle />
      </header>

      <br />
      <hr />
      <br />

      <main>
        {displayFoods()}
      </main>

      {/* START: routes */}
      { /*
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />

      */}
      {/* END: routes */}
    </AppBody>
  );
};

export default App;
