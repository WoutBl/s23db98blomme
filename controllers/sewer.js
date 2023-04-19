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
exports.Sewer_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Sewer.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
    
// Handle Costume create on POST.
exports.Sewer_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Sewer();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document._id = req.body._id;
    document.Length = req.body.Length;
    document.Material = req.body.Material;
    document.Location = req.body.Location;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.Sewer_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Sewer delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Sewer_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Sewer update PUT' + req.params.id);
};

exports.Sewer_view_all_Page = async function(req, res) {
    try{
        theSewers = await Sewer.find();
        
        res.render('Sewer', { title: 'Sewer Search Results', results: theSewers });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

    
