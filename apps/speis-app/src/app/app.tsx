import React, { useState, useEffect } from 'react';

import { Route, Link } from 'react-router-dom';
import { PageTitle } from '@speis/ui-header';
import { API_URL, ApiResponse } from '@speis/api-interface'
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const MESSAGE = gql`
  {
    message
  }
`;

const AppBody = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-family: IBM Plex Mono, Arial, Helvetica, sans-serif;
`

export const App = () => {

  const { loading, error, data } = useQuery(MESSAGE);

  /* const [apiResponse, setApiResponse] = useState<ApiResponse>({ message: 'Loading...' });
  useEffect(() => {
    fetch(API_URL).then(r => r.json()).then(setApiResponse);
  }, []) */


  function message() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return <p>{data.message}</p>;
  }

  return (
      <AppBody>
        <header>
          <PageTitle />
        </header>

        <main>
          {/*apiResponse.message*/}
          {message()}
        </main>

        {/* START: routes */}
        <br />
        <hr />
        <br />
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
        {/* END: routes */}
      </AppBody>
  );
};

export default App;
