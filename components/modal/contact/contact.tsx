"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./contact.module.scss";
import { neodgm } from "@/styles/local.fonts";
import { sendEmail } from "@/api/sendEmail";

export default function Contact() {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [submitComplete, setSubmitComplete] = useState(false);

  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current && subjectRef.current && messageRef.current) {
      const email = emailRef.current.value;
      const subject = subjectRef.current.value;
      const message = messageRef.current.value;

      await sendEmail({
        email,
        subject,
        message,
      });

      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";

      setSubmitComplete(true);
    }
  };

  useEffect(() => {
    const showSumbitComplte = setTimeout(() => {
      setSubmitComplete(false);
    }, 3000);

    return () => {
      clearTimeout(showSumbitComplte);
    };
  }, [submitComplete]);

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm} onSubmit={submitHandler}>
          <div className={styles.emailInput}>
            <label htmlFor="email">Email:</label>
            <input ref={emailRef} type={"text"} name="email" id="email" autoComplete="off" className={(neodgm.className)} />
          </div>
          <div className={styles.subjectInput}>
            <label htmlFor="subject">Title:</label>
            <input ref={subjectRef} type={"text"} name="subject" id="subject" autoComplete="off" className={(neodgm.className)} />
          </div>
          <div className={styles.messageInput}>
            <textarea ref={messageRef} name="message" id="message" className={(neodgm.className)} spellCheck="false" placeholder="message.."/>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
