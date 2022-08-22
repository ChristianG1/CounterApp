import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { DimensioneScreen } from './src/screens/DimensioneScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    // <ContadorScreen />
    <SafeAreaView style={{ flex: 1, backgroundColor: "#28425B" }}>
      {/* <DimensioneScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;
