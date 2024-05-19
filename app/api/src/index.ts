import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';

import { baseRoute } from './routes/base';
import { getAllUsersRoute } from './routes/user/get-all-users';

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.register(baseRoute);

app.register(getAllUsersRoute);

app.listen({
    port: 8888
}).then(() => {
    console.log('HTTP Server Running!')
});