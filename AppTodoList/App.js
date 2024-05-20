import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setText] = useState('');
  const [editState, setEditState] = useState(false);
  const [editTodoIndex, setEditTodoIndex] = useState(0);

  const addTodo = () => {
    if (editState) {
      todos[editTodoIndex].title = newTodo;
      setTodos([...todos]);
    } else{
      setTodos([...todos, { id: todos.length + 1, title: newTodo, completed: false }]);
    }
    setText('');
    setModalVisible(!modalVisible);
  }

  function CompleteButton(todo) {
    if (todo.completed) return null;
    todo.completed = true;
    setTodos([...todos]);
    alert(`${todo.title} is now completed`);
  }

  function DeleteButton(todo){
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    setTodos([...todos]);
    alert(`${todo.title} is now deleted`);
  }

  function EditButton(todo){
    setText(todo.title);
    setEditState(true);
    setEditTodoIndex(todos.indexOf(todo));
    setModalVisible(true);
    alert('Todo has been edited');
  }
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.App}>
      <View style={styles.AppBar}>
        <Image source={require('./assets/logo.png')} style={{ width: 50, height: 50 }} />
      </View>
      <ScrollView style={styles.container}>
        
        <Text style={styles.strong}>My Todo list</Text>
        <TodoList todos={todos} CompleteButton={CompleteButton} DeleteButton={DeleteButton} EditButton={EditButton} />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Entrer un nouveau todo"
              value={newTodo}
              onChangeText={setText}
            />
            <Button title="Ajouter" onPress={() =>{
              addTodo();
              console.log('new todo:', newTodo);
              }} />
            <Button title="Annuler" onPress={() => {
              setModalVisible(false)
              setText('');
              }} />
          </View>
        </View>
      </Modal>
      </ScrollView>
      <View style={styles.BottomBar}>
        <Button color="white" title="Add Todo" onPress={() => {
            setModalVisible(!modalVisible);
          }} />
      </View>
      
      <StatusBar style="light" />
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  App: {
    zIndex: 0,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
