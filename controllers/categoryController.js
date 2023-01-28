const CategoryModel = require('../models/category')

const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find({})
        res.status(200).json(categories)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

const createCategory = async (req, res) => {
    try {
        const categories = await CategoryModel.findOne({ name: req.body.name })
        if (categories) {
            return res.status(400).send('Category with that name already exists')
        }

        const newCategory = await CategoryModel.create({
            name: req.body.name,
        })
        await newCategory.save()
        return res.status(200).send('Category created successfully')
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports = { getAllCategories, createCategory }