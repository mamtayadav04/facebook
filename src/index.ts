import { Server } from './server';
const server = new Server().app;
const port = 5000;
server.listen(port, () => {
    console.log(`server is started on port ${port}`);
});

