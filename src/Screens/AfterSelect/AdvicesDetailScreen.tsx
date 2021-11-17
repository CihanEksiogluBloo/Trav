import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AdvicesStackScreenProps } from '../../types'

const AdvicesScreen: React.FC<AdvicesStackScreenProps<"AdvicesScreen">> = () => {
    return (
        <View>
            <Text>AdvicesScreen</Text>
        </View>
    )
}

export default AdvicesScreen

const styles = StyleSheet.create({})
