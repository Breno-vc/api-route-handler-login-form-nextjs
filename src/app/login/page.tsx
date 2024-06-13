import React from "react";
import Formulario from "../components/form";
import Link from "next/link";

export default async function LoginFunction() {
  return (
    <main>
      <Link href="/">Voltar</Link>
      <h1>Login</h1>
      <Formulario />
    </main>
  );
}
