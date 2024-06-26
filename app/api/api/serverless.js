import * as dotenv from "dotenv";
dotenv.config();

import { init } from "../dist/index";

export default async (req, res) => {
    const app = init();
    await app.ready();
    app.server.emit('request', req, res);
}