const app = require("./src/server");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.info(`Running server on port http://localhost:${PORT}`);
});