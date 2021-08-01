import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const formatDate = (date) => {
  var today = new Date()
  var d = new Date(date)
  // month = '' + (d.getMonth() + 1),
  // day = '' + d.getDate(),
  // year = d.getFullYear();
  let dateDiff = today.getDate() - d.getDate();

  // if (month.length < 2) month = '0' + month;
  // if (day.length < 2) day = '0' + day;

  switch (dateDiff) {
    case 0:
      return 'today'
    case 1:
      return 'yesterday'
    default:
      return d.toLocaleDateString('en-GB')
    // return [day, month, year].join('-');
  }
}

const ChatListItem = (props) => {
  const { chatRoom } = props
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onClick = () => {
    // console.warn(`Click on ${user.name}`)
    navigation.navigate('ChatRoom', { id: chatRoom.id, name: user.name })
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.mainContainer}>
          <View style={styles.mainContainerTop}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{user.name}</Text>
            {/* <Text>yesterday</Text> */}
            <Text>{formatDate(Date.parse(chatRoom.lastMessage.createdAt))}</Text>
          </View>

          <Text style={styles.lastMessage}
            ellipsizeMode='tail'
            numberOfLines={1}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },
  mainContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  mainContainer: {
    width: '90%',
    paddingHorizontal: 15
  },
  lastMessage: {
    overflow: 'hidden'
  }
})

export default ChatListItem
