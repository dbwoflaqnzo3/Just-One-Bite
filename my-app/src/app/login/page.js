'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "/workspaces/Just-One-Bite/my-app/src/app/styles/login.module.css";
import Link from 'next/link'; // Link 컴포넌트 임포트

const LoginPage = () => {
  const [userId , setUserId] = useState('');
  const [pw , setPW] = useState('');
  const [isClient , setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // 로그인 처리 로직 (테스트용)
    console.log('Logging in with', {userId , pw})
  }

  if (!isClient) {
    return null; // 클라이언트가 아닌 경우 렌더링하지 않음
  }

  return (
    <section className={styles.user}>
    <div className={styles.user_optionsContainer}>
      <div className={styles.user_optionsText}>
        {/* 로그인 섹션 */}
        <div className={styles.user_optionsRegistered}>
          <h2 className={styles.user_registeredTitle}>Just One Bite</h2>
          <p className={styles.user_registeredText}>
            하아 어캐 만들어야 될지 모르겠으면 개추 <br></br>아니 색조합 어캐하노
          </p>
          {/* Link 컴포넌트를 사용하여 이동 */}
          <Link href="/signup" className={styles.user_unregisteredSignup}>
            Sign up
          </Link>
        </div>
      </div>

      {/* 로그인 폼 */}
      <div className={styles.user_optionsForms}>
        <div className={styles.user_formsLogin}>
          <h2 className={styles.forms_title}>Login</h2>
          <form className={styles.forms_form} onSubmit={handleSubmit}>
            <fieldset className={styles.forms_fieldset}>
              <div className={styles.forms_field}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.forms_fieldInput}
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className={styles.forms_field}>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.forms_fieldInput}
                  value={pw}
                  onChange={(e) => setPW(e.target.value)}
                  required
                />
              </div>
            </fieldset>
            <div className={styles.forms_buttons}>
              <button type="button" className={styles.forms_buttonsForgot}>
                Forgot password?
              </button>
              <input type="submit" value="Log In" className={styles.forms_buttonsAction} />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default LoginPage;
