import { useState, useEffect } from 'react';
import { User, getAllUsers } from './api';

export function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl mx-4 sm:mx-6 lg:mx-8">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">Idade</th>
              <th className="p-4 text-left">Empresa</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name} className="even:bg-gray-100 hover:bg-zinc-200 transition-all">
                <td className="p-4 border-t">{user.name}</td>
                <td className="p-4 border-t">{user.age}</td>
                <td className="p-4 border-t">{user.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}