import React, { useEffect } from "react";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app"; // Importa desde 'firebase/compat/app' en lugar de 'firebase/app'
import "firebase/compat/database"; // Importa desde 'firebase/compat/database' en lugar de 'firebase/database'
import { firebaseConfig } from "./firebase/firebaseConfig";

import store from "./redux/store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  useEffect(() => {
    // Inicializa Firebase aquí en lugar de utilizar firebase.initializeApp()
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const todosRef = firebase.database().ref("todos");
    todosRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      store.dispatch({ type: "SET_TODOS", payload: todos });
    });
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
