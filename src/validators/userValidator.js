const { z } = require("zod");

const userSchema = z.object({
    nome: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
});

module.exports = { userSchema };