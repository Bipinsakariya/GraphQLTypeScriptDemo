import React from 'react';
import {ApolloProvider} from '@apollo/client';
import Navigation from './src/navigation';
import client from './src/graphql/client';

const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);

export default App;
