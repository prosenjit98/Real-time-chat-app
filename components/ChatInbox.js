import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChatInbox = () => {
  const [message, setMessage] = React.useState()
  return (
    <View style={styles.container}>
      <View style={styles.mainContaier}>
        <SimpleLineIcons name="emotsmile" size={24} />
        <TextInput
          style={[styles.inputText, styles.inputIcons]}
          multiline
          placeholder={"Type message here"}
          value={message} onChangeText={setMessage} />
        <FontAwesome name="paperclip" size={24} color="black" style={styles.inputIcons} />
        <FontAwesome name="camera" size={20} color="grey" style={styles.inputIcons} />
      </View>
      <View style={styles.micContainer}>
        {
          message ? <Ionicons name="send" size={26} color="white" onPress={() => setMessage(null)} />
            : <FontAwesome name="microphone" size={26} color="white" />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  inputText: {
    flex: 1
  },
  mainContaier: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
  },
  micContainer: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 35,
    margin: 1
  },
  inputIcons: {
    paddingLeft: 10
  }
})

export default ChatInbox
