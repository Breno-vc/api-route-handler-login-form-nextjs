import { cookies } from "next/headers";

export async function GET() {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${baseUrl}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "dog",
			password: "dog",
		}),
	});
	if (!response.ok) {
		return Response.json(
			{ authorized: true, error: "Dados incorretos" },
			{ status: 401 },
		);
	}
	const data = await response.json();
	cookies().set("token_de_acesso", data.token, {
		httpOnly: true,
		secure: true,
	});
	return Response.json({ authorized: true }, { status: 200 });
}
