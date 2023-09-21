"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./contact.module.scss";
import { neodgm } from "@/styles/local.fonts";

type Email = {
  email: string;
  subject: string;
  message: string;
};

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

  const sendEmail = async ({ email, subject, message }: Email) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("실패함");
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
    <div className={styles.about}>
      <h2>Contact</h2>
      <div className={styles.email_form_container}>
        <form className={styles.contact_form} onSubmit={submitHandler}>
          <div className={styles.email_input}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type={"email"} name="email" id="email" />
          </div>
          <div className={styles.subject_input}>
            <label htmlFor="subject">Subject</label>
            <input ref={subjectRef} type={"text"} name="subject" id="subject" />
          </div>
          <div className={styles.message_input}>
            <label htmlFor="message">Message</label>
            <div>
              <textarea ref={messageRef} name="message" id="message" />
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
