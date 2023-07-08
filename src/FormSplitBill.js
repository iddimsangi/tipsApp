import Button from "./Button";
import { useState } from "react";
function FormSplitBill({ selectedFriend }) {
  const { id, name, image, balance } = selectedFriend[0];
  const [bill, setBill] = useState("");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name} </h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👫{name} 's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
