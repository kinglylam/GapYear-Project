import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Security = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerName={" Security Settings"} />
      onPress={() =>Navigation.navigator("Settings")}
    </SafeAreaView>
  )
}

export default Security


const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
    },
});