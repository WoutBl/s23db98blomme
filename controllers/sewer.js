var Sewer = require('../models/Sewer');
// List of all Costumes
exports.Sewer_list = async function(req, res) {
    try{
        theSewers = await Sewer.find();
        res.send(theSewers);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Costume.
exports.Sewer_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Sewer detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Sewer_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Sewer create POST');
};
// Handle Costume delete form on DELETE.
exports.Sewer_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Sewer delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Sewer_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Sewer update PUT' + req.params.id);
};
