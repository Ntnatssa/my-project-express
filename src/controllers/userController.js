const e = require('express');
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');

exports.getUsers = catchAsync(async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
});

exports.createUser = catchAsync(async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});
exports.updateUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }
    await user.update({ nome, email });
    res.json(user);
});

exports.deleteUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: "User not found" });
    }
});