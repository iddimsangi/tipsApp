import { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
function FriendsList({ friends, addNewFriend }) {
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const openFormHandler = () => setIsOpenAddForm(!isOpenAddForm);
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      {!isOpenAddForm ? (
        <Button onClick={openFormHandler}>Add friend</Button>
      ) : (
        ""
      )}
      {isOpenAddForm ? (
        <FormAddFriend
          setIsOpenAddForm={setIsOpenAddForm}
          isOpenAddForm={isOpenAddForm}
          addNewFriend={addNewFriend}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default FriendsList;
