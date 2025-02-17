import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Spinner } from '@core'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold.ttf': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Regular.ttf': require('./assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Light.ttf': require('./assets/fonts/PlaypenSans-Light.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'PlaypenSans-Bold.ttf' }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={{ fontFamily: 'PlaypenSans-Regular.ttf' }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={{ fontFamily: 'PlaypenSans-Light.ttf' }}>
        Open up App.tsx to start working on your app!
      </Text>

      <StatusBar style='auto' />
      <Spinner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
// function useEffect(arg0: () => void, arg1: (boolean | Error | null)[]) {
//   throw new Error('Function not implemented.')
// }
