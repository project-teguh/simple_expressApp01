const knex = require('../knexmodels/knex');

const post = async (req, res) => {
    const { title, body } = req.body

    if (!title || !body) {
        return res.status(400).send({
            message: "Title and body are required"
        })
    }

    const data = await knex('posts').insert({
        title: title,
        body: body,
    })
    const content = req.body;
    console.log(content);

    return res.status(201).send({
        message: "Post created successfully",
        data: content
    })
}

const allPosts = async (req, res) => {
    const data = await knex.select().from('posts');

    return res.status(200).send({
        message: "All posts data retrieved successfully",
        data: data
    });
}

module.exports = {post, allPosts}