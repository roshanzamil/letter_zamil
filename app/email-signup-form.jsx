"use client";

import { useState } from "react";

const initialState = {
  status: "idle",
  message: ""
};

export default function EmailSignupForm() {
  const [state, setState] = useState(initialState);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      setState({
        status: "error",
        message: "please enter your email."
      });
      return;
    }

    setState({
      status: "loading",
      message: "sending..."
    });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "something went wrong.");
      }

      form.reset();
      setState({
        status: "success",
        message: data.message || "you&apos;re in."
      });
    } catch (error) {
      setState({
        status: "error",
        message: error.message || "something went wrong."
      });
    }
  }

  return (
    <div>
      <form className="email-capture" onSubmit={handleSubmit}>
        <input
          className="email-input"
          type="email"
          name="email"
          placeholder="your email"
          aria-label="your email"
          autoComplete="email"
          required
        />
        <button className="email-button" type="submit" disabled={state.status === "loading"}>
          {state.status === "loading" ? "sending" : "join"}
        </button>
      </form>
      {state.message ? (
        <p className={`form-message form-message-${state.status}`} role="status">
          {state.message}
        </p>
      ) : null}
    </div>
  );
}
