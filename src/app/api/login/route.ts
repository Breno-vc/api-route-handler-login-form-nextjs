import { cookies } from "next/headers";

import type { NextRequest } from "next/server";

type Body = {
	username: string;
	password: string;
};

export async function POST(request: NextRequest) {
	const body = (await request.json()) as Body;
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${baseUrl}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: body.username,
			password: body.password,
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
