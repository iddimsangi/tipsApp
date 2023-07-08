import { useState } from "react";
import logo from "./logo.svg";

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

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        <FormAddFriend />

        <Button>"Add friend"</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      <Friend />
    </ul>
  );
}

function Friend() {
  return (
    <li className="">
      <img src={logo} alt="pcha" />
      <h3>jesho</h3>

      {/* <p className="red">You owe €</p> */}

      <p>You and ppp are even</p>

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with </h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👫 's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{"friend"}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
