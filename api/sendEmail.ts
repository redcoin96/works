interface Email {
  email: string;
  message: string;
};

export const sendEmail = async ({ email, message }: Email) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
