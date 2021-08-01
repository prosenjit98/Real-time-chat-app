import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';


const ChatMessage = (props) => {
  const { message } = props;
  let date = new Date(message.createdAt);

  const isMyMessage = () => {
    return message.user.id === 'u1'
  }
  return (
    <View style={{ marginVertical: 5, marginHorizontal: 10 }}>
      <TouchableOpacity style={[styles.container,
      {
        backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
        marginLeft: isMyMessage() ? 'auto' : 5
      }]}>
        <Text style={styles.name}>{message.user.name}</Text>
        <Text>{message.content}</Text>
        <Text style={styles.time}>{date.toLocaleTimeString().substr(0, 5)}</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '80%',
    marginVertical: 5,
    borderRadius: 5,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5
  },
  time: {
    alignSelf: 'flex-end'
  }
})

export default ChatMessage
