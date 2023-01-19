import React from "react";
import { useState } from "react";
import { loginFn, registrationFn } from "../../api/userAPI";
import s from "./registrationPage.module.scss";

const RegistartionPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [radioValue, setRadioValue] = useState("USER");

  const signIn = async () => {
    try {
      const user = await registrationFn(username, password, radioValue);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={s.root}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="type user"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="type password"
      />
      <form>
        <input
          type="radio"
          value={"USER"}
          checked={radioValue === "USER"}
          onChange={(e) => setRadioValue(e.target.value)}
          name={"user"}
        />
        <label htmlFor="user">Ученик</label>
        <input
          type="radio"
          name={"user"}
          value={"ADMIN"}
          checked={radioValue === "ADMIN"}
          onChange={(e) => setRadioValue(e.target.value)}
        />
        <label>Учитель</label>
      </form>
      <button onClick={signIn}>Clcik</button>
    </div>
  );
};

export default RegistartionPage;
