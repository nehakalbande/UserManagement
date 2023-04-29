import React, { useState } from "react";
import UserInput from "./UserInput";
import "../css/UserList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


const UserList = ({ users, onDeleteUser, onSaveEditedUser }) => {
 const [selectedUser, setSelectedUser] = useState(null);
 const [visibleUsers, setVisibleUsers] = useState(3);
 const [editMode, setEditMode] = useState(false);


 const handleUserClick = (user) => {
   setSelectedUser(user);
   setEditMode(false);
 };


 const handleDeleteClick = (user) => {
   onDeleteUser(user);
   setSelectedUser(null);
 };


 const handleEditClick = (user) => {
   setSelectedUser(user);
   setEditMode(true);
 };


 const handleSaveClick = (editedUser) => {
   onSaveEditedUser(editedUser);
   setSelectedUser(null);
   setEditMode(false);
 };


 const usersToShow = users.slice(0, visibleUsers);


 return (
   <div className="userDetails">
     <h2>User Details</h2>
     {users.length === 0 ? (
       <p>Add a user to get started!</p>
     ) : (
       <table>
         <tbody>
           {usersToShow.map((user) => (
             <tr key={user.id}>
               <td
                 onClick={() => handleUserClick(user)}
                 style={{
                   fontWeight: user === selectedUser ? "bold" : "normal",
                 }}
               >
                 {user.name}
               </td>
               <td
                 onClick={() => handleUserClick(user)}
                 style={{
                   fontWeight: user === selectedUser ? "bold" : "normal",
                 }}
               >
                 {user.email}
               </td>
               <td>
                 <button onClick={() => handleEditClick(user)}>
                   <FontAwesomeIcon icon={faEdit} />
                 </button>
                 <button onClick={() => handleDeleteClick(user)}>
                   <FontAwesomeIcon icon={faTrash} />
                 </button>
               </td>
            </tr>
           ))}
         </tbody>
       </table>
     )}
     {usersToShow.length < users.length && (
       <button
         onClick={() => setVisibleUsers(visibleUsers + 3)}
         className="loadButton"
       >
         Load More
       </button>
     )}


     {editMode && selectedUser && (
       <div>
         <h2>Edit User</h2>
         <UserInput onSaveUser={handleSaveClick} selectedUser={selectedUser} />
       </div>
     )}
   </div>
 );
};


export default UserList;
