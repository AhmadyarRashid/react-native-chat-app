import React from 'react';
import {View, Text} from 'react-native';

export type Props = {
  name?: string;
  baseEnthusiasmLevel?: number;
};

const ChatScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>This is chat app</Text>
    </View>
  );
};

export default ChatScreen;
