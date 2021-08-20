import express from 'express';
import loaders from './loader';

const startServer = async () => {
    global.windowVar = '';
    let foo = null;
    if (typeof window !== "undefined") {
        foo = window.localStorage.getItem("foo");
    }
    
    const app = express();

    await loaders.init({ expressApp: app });

    app.listen(process.env.PORT, () => {
        console.log(`Backend listening on port ${process.env.PORT}!`);
    });

    return app;
};

startServer();
