import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/login">Login</Link>
      <h1>Bem vindo!</h1>
    </main>
  );
}
