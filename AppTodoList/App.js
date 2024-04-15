import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [todoTitle, setText] = useState('');
  let [newTodos, setTodos] = useState([]);
  newTodos = todos;

  function CompleteButton({ todo }) {
    if (todo.completed) {
      return null;
    } else {
      return (
        <Button title="Complete" onPress={() => {
          todo.completed = true;
          setTodos([...newTodos]);
          alert(`${todo.title} is now completed`);
        }} />
      );
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.App}>
        <View style={styles.AppBar}>
          <Image source={require('./assets/logo.png')} style={{ width: 50, height: 50 }} />
        </View>
        <ScrollView style={styles.container}>
          <Text style={styles.strong}>My Todo list</Text>
          <SafeAreaView>
            {newTodos.map(todo => (
              <View key={todo.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, color: todo.completed ? '#aaa' : '#000' }}>{todo.title}</Text>
                <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                  <CompleteButton todo={todo} />
                  <TouchableOpacity onPress={() => {
                    const index = newTodos.indexOf(todo);
                    newTodos.splice(index, 1);
                    setTodos([...newTodos]);
                    alert(`${todo.title} is now deleted`);
                    }}>
                    <Image source={require('./assets/delete.png')} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </SafeAreaView>
        </ScrollView>
        <View style={styles.BottomBar}>
          <TextInput placeholder="Enter Todo" placeholderTextColor="#ccc" style={{ width: '70%', padding: 10, borderColor: '#ccc', borderWidth: 1 }}
                     onChangeText={newText => setText(newText)} ref={input => { this.todoTitle = input }} />
          <Button color="white" title="Add Todo" onPress={() => {
            newTodos.push({ id: newTodos.length + 1, title: todoTitle, completed: false });
            setTodos([...newTodos]);
            setText('');
            alert(`${todoTitle} is now added to the list`)
            this.todoTitle.clear();
            this.todoTitle.focus(false);
            }} />
        </View>
        <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}



const todos = [
  { id: 1, title: 'Learn React Native', completed: true },
  { id: 2, title: 'Learn React Navigation', completed: true },
  { id: 3, title: 'Learn React Native Elements', completed: false },
  { id: 4, title: 'Learn React Native Paper', completed: false },
  { id: 5, title: 'Learn React Native Vector Icons', completed: false },
  { id: 6, title: 'Learn React Native Elements', completed: false },
  { id: 7, title: 'Learn React Native Paper', completed: false },
  { id: 8, title: 'Learn React Native Vector Icons', completed: false },
  { id: 9, title: 'Learn React Native Elements', completed: false },
  { id: 10, title: 'Learn React Native Paper', completed: false },
  { id: 11, title: 'Learn React Native Vector Icons', completed: false },
  { id: 12, title: 'Learn React Native Elements', completed: false },
  { id: 13, title: 'Learn React Native Paper', completed: false },
  { id: 14, title: 'Learn React Native Vector Icons', completed: false },
  { id: 15, title: 'Learn React Native Elements', completed: false },
  { id: 16, title: 'Learn React Native Paper', completed: false },
  { id: 17, title: 'Learn React Native Vector Icons', completed: false },
  { id: 18, title: 'Learn React Native Elements', completed: false },
  { id: 19, title: 'Learn React Native Paper', completed: false },
  { id: 20, title: 'Learn React Native Vector Icons', completed: false },
];

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  AppBar: {
    backgroundColor: '#1F82AB',
    height: 120,
    paddingBottom: 10,
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  strong: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#0C0C0C',
  },
  BottomBar: {
    backgroundColor: '#1F82AB',
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: 'white',
  },
});
