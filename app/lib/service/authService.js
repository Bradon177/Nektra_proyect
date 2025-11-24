import api from "../axios";

export async function registerUser(data) {
    try {
        const response = await api.post("/auth/register", data);
        console.log("Registro exitoso:", response);
        return response;
    } catch (error) {
        throw error;
    }
}