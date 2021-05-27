const logRequest = (req, _, next) => {
    console.info(`[${req.method}] '${req.url}': API Request on resource`);
    next();
}

module.exports = logRequest;