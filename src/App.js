import React, { useState, useEffect } from "react";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import "./App.css";


const App = () => {
 const [users, setUsers] = useState([]);


 useEffect(() => {
   const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
   setUsers(savedUsers);
 }, []);


 useEffect(() => {
   localStorage.setItem("users", JSON.stringify(users));
 }, [users]);


 const handleSaveUser = (user) => {
   const emailExists = users.some((u) => u.email === user.email);
   if (emailExists) {
     alert("Email already exists");
   } else if (user.id) {
     setUsers(
       users.map((u) => {
         if (u.id === user.id) {
           return { ...u, ...user };
         } else {
           return u;
         }
       })
     );
     alert("User details have been updated");
   } else {
     setUsers([...users, { ...user, id: new Date().getTime() }]);
     alert("User details have been saved");
   }
 };


 const handleDeleteUser = (user) => {
   if (window.confirm("Are you sure you want to delete this user?")) {
     setUsers(users.filter((u) => u.id !== user.id));
   }
 };


 const handleSaveEditedUser = (editedUser) => {
   setUsers(
     users.map((u) => {
       if (u.id === editedUser.id) {
         return { ...u, ...editedUser };
       } else {
         return u;
       }
     })
   );
 };


 return (
   <div className="App">
     <UserInput onSaveUser={handleSaveUser} />
     <UserList
       users={users}
       onDeleteUser={handleDeleteUser}
       onSaveEditedUser={handleSaveEditedUser}
     />
   </div>
 );
};


export default App;
