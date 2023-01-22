const blogModel = require("./blogModel");


async function createBlog(req, res) {
    try {
        const { title, blog } = req.body
        const post = await blogModel.create({ title, blog })
        if (!post) return res.status(400).send({ error: "Something Wrong" })
        res.status(201).send(post)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

async function getBlog(req, res) {
    try {
        const blogs = await blogModel.find()
        if (!blogs) return res.status(400).send({ error: "no data found" })
        return res.status(200).send(blogs)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

async function getBlogbyId(req, res) {
    try {
        const { blogId } = req.params
        const blog = await blogModel.findById(blogId)
        if (!blog) return res.status(400).send({ error: "no data found" })
        return res.status(200).send(blog)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}


module.exports = { createBlog, getBlog, getBlogbyId }

