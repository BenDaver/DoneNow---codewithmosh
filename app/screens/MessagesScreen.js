import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteItem from '../components/ListItemDeleteItem'
import ListItemSeperator from '../components/ListItemSeperator'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 4,
        title: 'T4',
        description: 'D4',
        image: require('../assets/mosh.jpg')
    },
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };

  return (
    <Screen> 
        <FlatList
         data={messages}
         keyExtractor={messages => messages.id.toString()}
         renderItem={({ item }) => 
         (<ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => (
            <ListItemDeleteItem onPress={ () => handleDelete(item)} />)}
             />
            )} 
         ItemSeparatorComponent={ListItemSeperator}
         refreshing={refreshing}
         onRefresh={() => {
            setMessages([
                {
                    id: 3,
                    title: 'T3',
                    description: 'D3',
                    image: require('../assets/mosh.jpg')
                },
            ])
         }}
         />
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen: {
        
    }
})