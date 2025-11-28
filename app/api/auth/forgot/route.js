import { connectDB } from "../../../lib/db";
import Users from "../../../../models/Users";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const emailRaw = String(body?.email || "");
    const email = emailRaw.trim().toLowerCase().replace(/[\r\n\t]/g, "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return new Response(JSON.stringify({ error: "Email inválido" }), { status: 400 });
    }
    if (!email) {
      return new Response(JSON.stringify({ error: "Email requerido" }), { status: 400 });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: "Usuario no encontrado" }), { status: 404 });
    }
    if (!process.env.JWT_SECRET) {
      return new Response(JSON.stringify({ error: "JWT_SECRET no configurado" }), { status: 500 });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "15m" });
    const origin = String(body?.origin || "").replace(/[\r\n\t]/g, "");
    const url = origin ? `${origin}/Pages/resetPage?token=${encodeURIComponent(token)}` : null;
    return new Response(JSON.stringify({ message: "Token generado", token, url }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error en el servidor" }), { status: 500 });
  }
}
