import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const id = Symbol("id");
const me = {
  name: "Ndeye Fatou Diop",
  age: 30,
  [id]: "123",
  hasPremium: true,
  rank: 25n,
  linkedAccounts: null,
};
const greet = (user) => console.log(`Hello ${user.name}. You are ${user.age > 18 ? "major" : "minor"}.`);
greet(me);

/**
 * Says hi to the user.
 * @param {String} name - User name
 */
const sayHi = (name) => {
  //...
}

sayHi(30)
