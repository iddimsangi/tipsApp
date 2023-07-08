import { useState, useEffect } from "react";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const LOCAL_KEY = "friends";
  const [friends, setFriends] = useState(initialFriends);
  const addNewFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };
  console.log(friends);
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(friends));
  }, [friends]);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} addNewFriend={addNewFriend} />
      </div>

      <FormSplitBill />
    </div>
  );
}
