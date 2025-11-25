"use client";
import { getUsers, deleteUser, updateUser } from '../../../lib/service/userService';
import Button from '../../ui/Button';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

function formatDate(d) {
  try {
    const date = new Date(d);
    return isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10);
  } catch {
    return '';
  }
}

export default function Table() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ nombre: '', email: '', identificacion: '', fechaNacimiento: '', rol: 'user' });
  const [filters, setFilters] = useState({ nombre: '', email: '', identificacion: '' });

  const loadUsers = async (f) => {
    setLoading(true);
    setError('');
    try {
      const data = await getUsers(f);
      setUsers(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e?.message || 'Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initial = {
      nombre: searchParams.get('nombre') || '',
      email: searchParams.get('email') || '',
      identificacion: searchParams.get('identificacion') || ''
    };
    setFilters(initial);
    loadUsers(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const applyFilters = async () => {
    const params = new URLSearchParams();
    if (filters.nombre) params.set('nombre', filters.nombre);
    if (filters.email) params.set('email', filters.email);
    if (filters.identificacion) params.set('identificacion', filters.identificacion);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
    await loadUsers(filters);
  };

  const clearFilters = async () => {
    setFilters({ nombre: '', email: '', identificacion: '' });
    router.replace(pathname);
    await loadUsers({});
  };

  const startEdit = (u) => {
    setEditingId(u._id);
    setForm({
      nombre: u.nombre || '',
      email: u.email || '',
      identificacion: u.identificacion || '',
      fechaNacimiento: formatDate(u.fechaNacimiento),
      rol: u.rol || 'user',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ nombre: '', email: '', identificacion: '', fechaNacimiento: '', rol: 'user' });
  };

  const saveEdit = async () => {
    try {
      const payload = { ...form };
      if (payload.fechaNacimiento) {
        payload.fechaNacimiento = new Date(payload.fechaNacimiento).toISOString();
      }
      const res = await updateUser(editingId, payload);
      const updated = res?.user;
      setUsers((prev) => prev.map((u) => (u._id === editingId ? { ...u, ...updated } : u)));
      cancelEdit();
    } catch (e) {
      setError(e?.message || 'Error al actualizar usuario');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (e) {
      setError(e?.message || 'Error al eliminar usuario');
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Usuarios</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={applyFilters}>Aplicar filtros</Button>
          <Button variant="ghost" onClick={clearFilters}>Borrar filtros</Button>
          <Button variant="outline" onClick={() => loadUsers(filters)}>Recargar</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Filtrar por nombre"
          value={filters.nombre}
          onChange={(e) => setFilters({ ...filters, nombre: e.target.value })}
        />
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Filtrar por email"
          value={filters.email}
          onChange={(e) => setFilters({ ...filters, email: e.target.value })}
        />
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Filtrar por identificación"
          value={filters.identificacion}
          onChange={(e) => setFilters({ ...filters, identificacion: e.target.value })}
        />
      </div>

      {error && (
        <div className="mb-4 bg-red-100 text-red-700 px-3 py-2 rounded-md">{error}</div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Identificación</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Nac.</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr><td className="px-4 py-3" colSpan={7}>Cargando...</td></tr>
            ) : (
              users.map((u) => (
                <tr key={u._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{u._id}</td>
                  <td className="px-4 py-3">
                    {editingId === u._id ? (
                      <input className="w-full border rounded-md px-2 py-1" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                    ) : (
                      u.nombre
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === u._id ? (
                      <input className="w-full border rounded-md px-2 py-1" value={form.identificacion} onChange={(e) => setForm({ ...form, identificacion: e.target.value })} />
                    ) : (
                      u.identificacion
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === u._id ? (
                      <input className="w-full border rounded-md px-2 py-1" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    ) : (
                      u.email
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === u._id ? (
                      <input type="date" className="border rounded-md px-2 py-1" value={form.fechaNacimiento} onChange={(e) => setForm({ ...form, fechaNacimiento: e.target.value })} />
                    ) : (
                      formatDate(u.fechaNacimiento)
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingId === u._id ? (
                      <select className="border rounded-md px-2 py-1" value={form.rol} onChange={(e) => setForm({ ...form, rol: e.target.value })}>
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-cyan-100 text-cyan-800">{u.rol}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    {editingId === u._id ? (
                      <>
                        <Button size="sm" onClick={saveEdit}>Guardar</Button>
                        <Button variant="outline" size="sm" onClick={cancelEdit}>Cancelar</Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm" className="border border-cyan-600 text-cyan-600" onClick={() => startEdit(u)}>Editar</Button>
                        <Button variant="destructive" size="sm" className="border border-red-600 text-red-600" onClick={() => handleDelete(u._id)}>Eliminar</Button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
