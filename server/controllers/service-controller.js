const Service = require("../models/service-model");

const services = async(req,res) => {
    try {
        const response = await Service.find();
        if(!response || response.length === 0){
            res.status(404).json({msg:'No Service found'});
            return;
        }
        res.status(200).json( response);

    } catch (error) {
        console.log(`services: ${error}`);
        
    }
};

module.exports = services;