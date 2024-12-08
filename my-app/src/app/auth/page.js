import react from "react";
import styles from "/workspaces/Just-One-Bite/my-app/src/app/styles/login.module.css";
import LoginForm from "../components/LoginForm.js";

const LoginPage = () => {
  const handleSubmit = (e) => {
    console.log("ddddd");
  }


  return (
  <div className={styles.login_box}>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className={styles.user_box}>
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div className={styles.user_box}>
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  );
};
  
export default LoginPage;