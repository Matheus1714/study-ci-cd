import { FastifyInstance } from 'fastify'
import { users } from '../../db/users';

export async function getAllUsersRoute(app: FastifyInstance) {
    app.get('/user', async () => {
        return { users }
    });
}