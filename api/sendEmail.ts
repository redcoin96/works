interface Email {
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({ email, subject, message }: Email) => {
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
    console.error(err);
  }
};
