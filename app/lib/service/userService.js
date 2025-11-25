import api from "../axios";

export async function getUsers(filters) {
    try {
        let qs = "";
        if (filters && typeof filters === "object") {
            const params = new URLSearchParams();
            if (filters.query) params.set("query", filters.query);
            if (filters.nombre) params.set("nombre", filters.nombre);
            if (filters.email) params.set("email", filters.email);
            if (filters.identificacion) params.set("identificacion", filters.identificacion);
            const str = params.toString();
            if (str) qs = `?${str}`;
        }
        const res = await api.get(`/admin/users${qs}`);
        return res?.users || [];
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function deleteUser(id) {
    try {
        const res = await api.delete(`/admin/users?id=${id}`);
        return res;
    } catch (err) {
        console.log("error al eliminar usuario:", err);
        console.error(err);
        throw err;
    }
}

export async function updateUser(id, data) {
    try {
        const res = await api.patch(`/admin/users?id=${id}`, data);
        return res;
    } catch (err) {
        console.log("error al actualizar usuario:", err);
        console.error(err);
        throw err;
    }
}
