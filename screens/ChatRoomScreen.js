import React from 'react'
import { FlatList, ImageBackground, SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import ChatMessage from '../components/ChatMessage';
import ChatData from '../data/Chat';
import BackgroundImage from '../assets/images/BG.png'
import ChatInbox from '../components/ChatInbox';

const ChatRoomScreen = (props) => {
  const route = useRoute()
  const { messages } = props
  return (
    <SafeAreaView>
      <ImageBackground source={BackgroundImage} resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      >
        <FlatList
          data={ChatData.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          initialScrollIndex={ChatData.messages.length - 1}
        />
        <ChatInbox />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ChatRoomScreen
