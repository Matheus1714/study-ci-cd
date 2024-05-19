import { FastifyInstance } from 'fastify'

export async function baseRoute(app: FastifyInstance) {
    app.get('/', async () => {
        return { message: 'Welcome to my API!' }
    });
}