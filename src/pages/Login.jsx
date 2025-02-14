import { useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { Question } from "../components/Question";
import { Title } from "../components/Title";
import styles from "./Login.module.css";
import { Options } from "../components/Options";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router";

export const Login = () => {
  const [answer, setAnswer] = useState(null);
  const [nickname, setNickname] = useState(null);
  const dialogRef = useRef();
  let navigate = useNavigate();

  const nickNames = [
    { name: "Honey 🍯", value: "H" },
    { name: "Rabbit 🐰", value: "R" },
    { name: "Baby 👶", value: "B" },
    { name: "Ghost 👻", value: "G" },
  ];

  return (
    <Layout>
      <Title
        text={"You need to prove first that you are the one!"}
        title={"It is you?"}
      />
      <Question
        question={"You dare to take up this challenge?"}
        onConfirm={() => setAnswer(1)}
        onReject={() => setAnswer(0)}
      />
      {answer === 0 && (
        <div className={styles.container}>
          <p>😱 Whaat? Please...I promise sweet reward at the end 🙏🎂</p>
        </div>
      )}
      {answer === 1 && (
        <div className={styles.auth}>
          <p>💗 Thats my girl!!! 💗</p>
          <span>You need to prove me its really you 🔍</span>
          <Options
            onSelect={(name) => {
              if (dialogRef) {
                setNickname(name);
                dialogRef.current?.show();
              }
            }}
            options={nickNames}
            active={nickname}
            question={"What is name of your boyfriend?"}
          />
        </div>
      )}

      {nickname && (
        <Modal
          ref={dialogRef}
          onClick={() => {
            navigate("/Quiz");
            dialogRef.current.close();
          }}
          buttonText="Log in"
          text={"🥰 YESS!!! Thats my nickname 🥰"}
        />
      )}
    </Layout>
  );
};
