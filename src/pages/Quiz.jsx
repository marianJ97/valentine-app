import { useEffect, useRef, useState } from "react";
import { Title } from "../components/Title";
import { Layout } from "../components/Layout";
import { Question } from "../components/Question";
import styles from "./Quiz.module.css";
import { useNavigate } from "react-router";
import { Modal } from "../components/Modal";
import gif from "../assets/valentineGif.gif";

export const Quiz = () => {
  const [answer, setAnswer] = useState(null);
  const [finish, setFinish] = useState(null);
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    let intervalId;
    if (finish) {
      intervalId = setInterval(() => setTimer(timer - 1), 1000);
    }

    if (finish && timer <= 0 && modalRef) {
      modalRef.current?.open();
    }
    return () => clearInterval(intervalId);
  }, [finish, timer]);

  return (
    <Layout>
      <Title
        text={"The true interrogation start now!"}
        title={"Welcome my love"}
      />
      <Question
        question={"Are you ready for the hardest question today? ⚔️"}
        onConfirm={() => setAnswer(1)}
        onReject={() => setAnswer(0)}
      />
      {answer === 0 && (
        <div className={styles.container}>
          <p>
            😠 Again!!?? I told you that you will get something sweet at the
            end... 🙏🎂
          </p>
        </div>
      )}
      {answer === 1 && (
        <div>
          <div className={styles.auth}>
            <p>💗 Get ready and think carefully!!!</p>
            <span>Investigate both options before you decide 🔍</span>
          </div>
          <Question
            question={"😳 Will you be my valentine? 😳"}
            onConfirm={() => setFinish(true)}
            onReject={() => setFinish(true)}
            rejectText={"YES"}
          />
        </div>
      )}
      {finish && (
        <div className={styles.finish}>
          😍 Yeeeee!!! I knew you will pick correct answer {timer ?? 0}
        </div>
      )}
      {timer <= 0 && (
        <Modal
          text={"Now you can redeem your gift i promised!"}
          buttonText={"Accept gift"}
          onClick={() => {
            navigate("/Gift");
            // modalRef.current.close();
          }}
        >
          <img className={styles.gif} src={gif} alt="gif" />
        </Modal>
      )}
    </Layout>
  );
};
