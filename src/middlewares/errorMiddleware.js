const errorMiddleware = (err, req, res, next) => {
    console.error("Error detectado:", err.message);

    if (err.name === 'ZodError') {
        return res.status(400).json({
            success: false,
            status: 400,
            message: 'Validation Error',
            errors: err.errors.map(e => ({
                campo: e.path[0],
                mensagem: e.message
            }))
        });
    }

    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    console.log([`[ERRO] ${status} - ${message}`]);
    
    res.status(status).json({
        success: false,
        status,
        message
    });
};

module.exports = errorMiddleware;