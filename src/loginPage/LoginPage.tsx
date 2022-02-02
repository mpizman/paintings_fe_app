import { useState } from "react";
import { attempLogin } from "../services/LoginService";
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  return <form className={styles.loginPageForm} onSubmit={e => {
    e.preventDefault();
    attempLogin(username, password).then(result => {
      console.log(result);
    });
  }}>
    <input className="inputPrimary" placeholder="Username" onChange={e => {
      setUsername(e.target.value);
    }} />
    <input className="inputPrimary" type={'password'} placeholder="Password" onChange={e => {
      setPassword(e.target.value)
    }} />
    <button className="btnSubmit" type="submit">
      Login
    </button>
  </form>
}

export default LoginPage;