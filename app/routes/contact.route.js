const express = require ("express");
const contacts = require ("../controllers/contact.controllers.js");
const router = express.Router();
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route ("/favorites")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;