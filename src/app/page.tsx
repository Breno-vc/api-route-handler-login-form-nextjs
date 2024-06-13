import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { cookies } from "next/headers";

type Account = {
  autorizado: boolean;
  usuario: string;
};

export default async function Home() {
  let account = {
    autorizado: false,
    usuario: "",
  };
  const token = cookies().get("token_de_acesso")?.value;
  const baseUrl = process.env.API_URL_2;
  const response = await fetch(`${baseUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    account = (await response.json()) as Account;
    account.usuario = account.usuario
      .charAt(0)
      .toUpperCase()
      .concat(account.usuario.slice(1));
  }
  return (
    <main>
      <Link href="/login">Login</Link>
      <h1>Bem vindo {account.autorizado ? `${account.usuario}!` : ""}</h1>
    </main>
  );
}
