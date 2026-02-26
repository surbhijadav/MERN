const User = require("../models/user_model");
const Contact = require("../models/contact-model")

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({},{password:0});
        console.log("Users",users);
        
        if (!users || users.length === 0) {
            return res.status(404).json({message : "No users Found"});
        } else {
           return res.status(200).json(users);
        }
       
    } catch (error) {
        next(error);
    }
}

// delete user by admin using their id's 
const deleteUserById = async(req,res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id : id});
        return res.status(200).json({message: "User Deleted Successfully"})
    } catch (error) {
        next(error);
    }
}


// delete contacts by admin using their id's 
const deleteContactsById = async(req,res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id : id});
        return res.status(200).json({message: "User Deleted Successfully"})
    } catch (error) {
        next(error);
    }
}

// get single user for update 
const getUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id : id},{password:0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

//update the data
const updateUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne(
            { _id:id},
            {
                $set : updatedUserData,
            }
        );
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

// Fetch All the user 
const getAllContacts = async (req,res) => {
    try {
        const contacts = await Contact.find();
        console.log("Contacts",contacts);
        
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({message : "No contacts Found"});
        } else {
       return res.status(200).json(contacts);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getAllContacts,
    deleteUserById,
    getUserById,
    updateUserById,
    deleteContactsById,};