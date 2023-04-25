import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loading } from '@components/Loading';

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { THEME } from './src/theme/index';
import { Routes } from '@routes/index';
import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Home /> : <Loading />}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}