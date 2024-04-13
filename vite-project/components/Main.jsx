/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { StateContext } from "../src/context/Context";

function Main() {
  const { userState } = useContext(StateContext)
  console.log(userState);
  return (
    <div>
      <h2>Name:{userState?.currentUser?.name}</h2>
      <h2>Tel:{userState?.currentUser?.tel}</h2>
      <h2>Parol:{userState?.currentUser?.parol}</h2>
      {/* Main */}
    </div>
  )
}

export default Main;