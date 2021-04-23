// requiring express.Router()
const router = require("express").Router();
// importing Tag, Product and ProductTag models
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", async (req, res) => {
  try {
    // getting data for all tags
    const tagData = await Tag.findAll({
      // including Product model
      include: [{ model: Product }],
    });
    // if try is successful,
    // returning json object for tagData if successful
    res.status(200).json(tagData);
  } catch (e) {
    // otherwise returning error
    res.status(500).json(e);
  }
});

// find one tag by its `id` value
router.get("/:id", async (req, res) => {
  try {
    // getting data for specified tag id
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // if try is successful,
    // if categoryData is false,
    return !tagData
      ? // status 404 with a message
        res.status(404).json({ message: "No tag found with that ID" })
      : // else, return categoryData json
        res.status(200).json(tagData);
  } catch (e) {
    // else return error
    res.status(500).json(e);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (e) {
    res.status(400).json(e);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    // setting req.body json data to create new tag
    const tagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    // if try is successful,
    // if tagData[0] is false,
    return !tagData[0]
      ? // return status 404 with a message
        res.status(404).json({ message: "No tag found with that ID" })
      : // else, return tagData json
        res.status(200).json(tagData);
  } catch (e) {
    // else, return error
    res.status(500).json(e);
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    // deleting category with specified tag id
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    // if try is successful,
    // if categoryData is false,
    return !tagData
      ? // return status 404 with a message
        res.status(404).json({ message: "No tag found with that ID" })
      : // else, return categoryData json
        res.status(200).json(tagData);
  } catch (e) {
    // else, return error
    res.status(500).json(e);
  }
});
// exporting router model
module.exports = router;
