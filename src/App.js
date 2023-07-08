import { useState, useEffect } from "react";
import FriendsList from "./FriendsList";
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
  const [selectedFriend, setselectedFriend] = useState("");

  const addNewFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };
  const splitFriendBill = (friendId) => {
    let friendObj = friends.slice().filter((friend) => friend.id === friendId);
    console.log(friendObj);
    setselectedFriend(friendObj);
  };
  console.log(friends);
  useEffect(() => {
    const friendsReceived = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (friendsReceived) setFriends(friendsReceived);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(friends));
  }, [friends]);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          splitFriendBill={splitFriendBill}
          addNewFriend={addNewFriend}
        />
      </div>
      {selectedFriend.length > 0 ? (
        <FormSplitBill selectedFriend={selectedFriend} />
      ) : (
        ""
      )}
    </div>
  );
}
