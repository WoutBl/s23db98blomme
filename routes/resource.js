
var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sewer_controller = require('../controllers/sewer');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/sewer', sewer_controller.Sewer_create_post);
// DELETE request to delete Costume.
router.delete('/sewer/:id', sewer_controller.Sewer_delete);
// PUT request to update Costume.
router.put('/sewer/:id', sewer_controller.Sewer_update_put);
// GET request for one Costume.
router.get('/sewer/:id', sewer_controller.Sewer_detail);
// GET request for list of all Costume items.
router.get('/sewer', sewer_controller.Sewer_list);

router.get('/detail', sewer_controller.sewer_view_one_Page);
module.exports = router;
