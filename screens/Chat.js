import React from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import ChatListItem from '../components/ChatListItem/ChatListItem'
import chatRoomData from '../data/ChatRooms'

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 0.8,
        width: '100%',
        backgroundColor: "#e6e6e6"
      }}
    />
  );
};

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Chat
