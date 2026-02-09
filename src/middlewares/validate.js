const { ZodError } = require('zod');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.issues.map(issue => ({
                    campo: issue.path[0],
                    mensagem: issue.message
                }))
            });
        }
        next(error);
    }
};

module.exports = validate;