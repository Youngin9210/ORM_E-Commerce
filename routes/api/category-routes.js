// requiring express.Router()
const router = require("express").Router();
// importing Category and Product models
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// get all categories
router.get("/", async (req, res) => {
  // find all categories
  try {
    // getting data for all categories
    const categoryData = await Category.findAll({
      // including associated Products
      include: [{ model: Product }],
    });
    // if try is successful,
    // returning json object for categoryData if successful
    res.status(200).json(categoryData);
  } catch (e) {
    // otherwise returning error
    res.status(500).json(e);
  }
});
// get one category
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    // getting data for specified category id
    const categoryData = await Category.findByPk(req.params.id, {
      // including associated Products
      include: [{ model: Product }],
    });
    // if try is successful,
    // if categoryData is false,
    return !categoryData
      ? // status 404 with a message
        res.status(404).json({ message: "No category found" })
      : // else, return categoryData json
        res.status(200).json(categoryData);
  } catch (e) {
    // else return error
    res.status(500).json(e);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    // setting req.body json data to create new category
    const categoryData = await Category.create(req.body);
    // if try is successful,
    // return categoryData json
    res.status(200).json(categoryData);
  } catch (e) {
    // else, return error
    res.status(400).json(e);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    // updating specified category id
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    // if try is successful,
    // if categoryData[0] is false,
    return !categoryData[0]
      ? // return status 404 with a message
        res.status(404).json({ message: "No category found with that ID" })
      : // else, return categoryData json
        res.status(200).json(categoryData);
  } catch (e) {
    // else, return error
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    // deleting category with specified category id
    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    });
    // if try is successful,
    // if categoryData is false,
    return !categoryData
      ? // return status 404 with a message
        res.status(404).json({ message: "No category found with that ID" })
      : // else, return categoryData json
        res.status(200).json(categoryData);
  } catch (e) {
    // else, return error
    res.status(500).json(e);
  }
});
// exporting router model
module.exports = router;
