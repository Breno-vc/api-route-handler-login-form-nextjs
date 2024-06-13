"use client";
import React from "react";

export default function Formulario() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
