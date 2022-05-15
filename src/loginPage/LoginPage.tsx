import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import { UserContext } from "../userContext/UserContextComp";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from './LoginPage.module.scss';
import { decodeJwtResponse, IUser } from "../type";
import { attempLoginService } from "../services/ApiServices";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (!_.isEmpty(userContext.user)) {
      navigate("/");
    }
  }, [userContext]);

  return <form className={styles.loginPageForm} onSubmit={e => {
    e.preventDefault();
    attempLoginService(username, password).then(result => {
      if (result instanceof Error) {
        throw result;
      }
      let user: IUser = {
        username: username,
        token: result?.access_token,
        roles: jwt_decode<decodeJwtResponse>(result.access_token)?.roles
      };
      localStorage.setItem('user', JSON.stringify(user));
      userContext.setUser(user);
    }).catch(reason => {
      if (reason.message == '403') {
        toast.error(`Wrong username or password!`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
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