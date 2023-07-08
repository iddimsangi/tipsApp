import { useState } from "react";
import Button from "./Button";
import logo from "./logo.svg";
function FormAddFriend({ setIsOpenAddForm, isOpenAddForm, addNewFriend }) {
  const [friendName, setFriendName] = useState("");
  let newFriend = {
    id: crypto.randomUUID(),
    name: friendName,
    image: logo,
    balance: 0,
  };
  const addFriendHandler = (e) => {
    e.preventDefault();
    console.log(newFriend);
    addNewFriend(newFriend);
    setIsOpenAddForm(!isOpenAddForm);
    setFriendName("");
  };
  return (
    <form className="form-add-friend" onSubmit={addFriendHandler}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        required
      />

      <label>🌄 Image URL</label>
      <input type="text" value={logo} disabled />

      <Button>Add</Button>
    </form>
  );
}
export default FormAddFriend;
