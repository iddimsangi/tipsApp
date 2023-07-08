import Button from "./Button";
import logo from "./logo.svg";
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
export default Friend;
