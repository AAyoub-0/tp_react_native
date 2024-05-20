/*
    Composent pour la liste des todos
    Les todos sont passés en props avec les fonction CompleteButton et DeleteButton
*/

import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import PropTypes from 'prop-types';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView>
            {this.props.todos.map(todo => (
              <View key={todo.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, color: todo.completed ? '#aaa' : '#000' }}>{todo.title}</Text>
                <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center' }}>
                  <Button title="Complete" onPress={() => this.props.CompleteButton(todo)} />
                  <Button title="Edit" onPress={() => this.props.EditButton(todo)} />
                  <Button title="Delete" onPress={() => this.props.DeleteButton(todo)} />
                </View>
              </View>
            ))}
          </SafeAreaView>
        )
    }
}

// Props Types

TodoList.propTypes = { 
    todos: PropTypes.array.isRequired, 
    CompleteButton: PropTypes.func.isRequired,
    EditButton: PropTypes.func.isRequired, 
    DeleteButton: PropTypes.func.isRequired 
};