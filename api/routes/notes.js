const express = require("express");
const router = express.Router();


//ROUTE     PUT      edit-notes-info-by-id  
const  edit_notes_info_by_id  = require("../controllers/notes/edit-notes-info-by-id");
router.put("/edit-notes-info-by-id",edit_notes_info_by_id.put_edit_notes_info_by_id);

//ROUTE     GET      fetch-all-notes-info   
const fetch_all_notes_info = require("../controllers/notes/fetch-all-notes-info");
router.get("/fetch-all-notes-info",fetch_all_notes_info.get_fetch_all_notes_info);

//ROUTE     GET      fetch-notes-by-id      
const fetch_notes_by_id   = require("../controllers/notes/fetch-notes-by-id");
router.get("/fetch-notes-by-id",fetch_notes_by_id.get_fetch_notes_by_id);

//ROUTE     DELETE   remove-notes-by-id     
const remove_notes_by_id  = require("../controllers/notes/remove-notes-by-id");
router.delete("/remove-notes-by-id",remove_notes_by_id.delete_remove_notes_by_id);

//ROUTE     POST     users-upload-notes     
const users_upload_notes  = require("../controllers/notes/users-upload-notes");
router.get("/users-upload-notes",users_upload_notes.get_users_upload_notes);

module.exports = router;
