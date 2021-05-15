import {ApolloClient, ApolloLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createUploadLink} from 'apollo-upload-client';

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('auth_token');

  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    createUploadLink({uri: 'YOUR_API_URL_HERE'}),
  ]),
  cache: new InMemoryCache(),
});
export default client;
