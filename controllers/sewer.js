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
exports.Sewer_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Sewer.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
    
};
// Handle Costume update form on PUT.
exports.Sewer_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Sewer.findById( req.params.id)
    // Do updates of properties
    if(req.body.Length) toUpdate.Length = req.body.Length;
    if(req.body.Material) toUpdate.Material = req.body.Material;
    if(req.body.Location) toUpdate.Location = req.body.Location;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
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

// Handle a show one view with id specified by query
exports.sewer_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Sewer.findById( req.query.id)
    res.render('sewerdetail',
    { title: 'Sewer Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

    // Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
exports.sewer_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('sewercreate', { title: 'sewer Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.sewer_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Sewer.findById(req.query.id)
        res.render('sewerupdate', { title: 'Sewer Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.sewer_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Sewer.findById(req.query.id)
    res.render('sewerdelete', { title: 'Sewer Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

    
