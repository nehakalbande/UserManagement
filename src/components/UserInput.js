import React, { useState, useEffect } from "react";
import "../css/UserInput.css";


const UserInput = ({ onSaveUser, selectedUser }) => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [id, setId] = useState(selectedUser ? selectedUser.id : null);


 useEffect(() => {
   if (selectedUser) {
     setName(selectedUser.name);
     setEmail(selectedUser.email);
     setId(selectedUser.id);
   } else {
     setName("");
     setEmail("");
     setId(null);
   }
 }, [selectedUser]);


 const handleNameChange = (event) => {
   setName(event.target.value);
 };


 const handleEmailChange = (event) => {
   setEmail(event.target.value);
 };


 const handleSubmit = (event) => {
   event.preventDefault();
   onSaveUser({ name, email, id });
   setName("");
   setEmail("");
   setId(null);
 };


 const handleClear = () => {
   setName("");
   setEmail("");
 };


 return (
   <div className="user-input-container">
     <h2>User Input</h2>
     <form onSubmit={handleSubmit}>
       <div>
         <label>Name</label>
         <input type="text" value={name} onChange={handleNameChange} />
       </div>
       <div>
         <label>Email</label>
         <input type="email" value={email} onChange={handleEmailChange} />
       </div>
       <div>
         <button type="submit">{selectedUser ? "Update" : "Submit"}</button>
         <button type="button" onClick={handleClear}>
           Clear
         </button>
       </div>
     </form>
   </div>
 );
};


export default UserInput;