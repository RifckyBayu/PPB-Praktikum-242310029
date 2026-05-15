import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function _layout() {
  return (
    <View style={styles.container}>
        <Text>Welcome</Text>
        <Text>Lab. Pemograman Perangkat Bergerak</Text>
    </View>
  )
}

const styles = StyleSheett.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  )
}
