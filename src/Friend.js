import Button from "./Button";
import logo from "./logo.svg";
function Friend({ friend, splitFriendBill }) {
  const { id, name, image, balance } = friend;

  return (
    <li className="" key={id}>
      <img src={image} alt="pcha" />
      <h3>{name}</h3>

      {/* <p className="red">You owe €</p> */}

      <p className={balance > 0 ? "green" : "red"}>
        {balance > 0
          ? `${name} owe me ${balance}€`
          : `You owe ${name} ${balance}€`}
      </p>

      <Button onClick={() => splitFriendBill(id)}>Select</Button>
    </li>
  );
}
export default Friend;
