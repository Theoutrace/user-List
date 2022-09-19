import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log("hi");

    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      return
    }
    if(+enteredAge < 1){
      return
    }
    console.log(enteredUserName, enteredAge);


    setEnteredUserName('')
    setEnteredAge('')
  };

  const usernameChangeHandler = (event) => {
    // console.log('event.target.value: ', event.target.value);
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    // console.log('event.target.value: ', event.target.value);
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUserName}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
