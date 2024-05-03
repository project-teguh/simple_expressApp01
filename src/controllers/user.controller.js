const knex = require('../knexmodels/knex');

const register = async (req, res) => {
    const {firstname, lastname, username, email, password, role} = req.body

    if (!username || !password || !email) {
        return res.status(400).send({
            message: "Username, password, and email are required"
        })
    }
    const register = await knex('users').insert({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        role: role,
    })
    const body = req.body;
    console.log(body);

    return res.status(201).send({
        message: "User registered successfully"
    })
}

const allUsers = async (req, res) => {
    const all = await knex.select().from('users');

    return res.status(200).send({
        message: "All users data retrieved successfully",
        data: all
    });
}
module.exports = {register, allUsers}