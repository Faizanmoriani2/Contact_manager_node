const asyncHandler = require("express-async-handler")
//@desc Get all Contacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler ( (req, res)=>{
    res.status(200).json({message: "Get all Contacts"})
})

//@desc Create Contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler ((req, res)=>{
    console.log("the request body is: ", req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    res.status(201).json({message: "Create Contacts"})
})

//@desc delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler ((req, res)=>{
    res.status(201).json({message: "delete Contacts"})
})

//@desc update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler( (req, res)=>{
    res.status(200).json({message: `Update Contacts for ${req.params.id}`})
})

//@desc get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler ((req, res)=>{
    res.status(200).json({message: `Get Contact for ${req.params.id}`})
})

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact}