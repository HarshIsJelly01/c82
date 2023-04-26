import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Post extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
            <Text  style = {styles.text}>Post screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor: 'black'},
    text: {alignSelf:"center", color:"white", fontSize:30, }


})
