import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import { View } from 'react-native';
import { SelectEventScreen } from './screens/SelectEventScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import enUS from 'antd-mobile/es/locales/en-US';
import {apolloClient} from './services/ApolloClient';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ConfigProvider locale={enUS}>
        <View>
          <SelectEventScreen />
       </View>
       </ConfigProvider>
    </ApolloProvider>
  )
}