const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
//@desc Get all Contacts
//@route Get /api/contacts
//@access private
const getContacts = asyncHandler ( async (req, res)=>{
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})

//@desc Create Contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler (async (req, res)=>{
    console.log("the request body is: ", req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    const contact = await Contact.create({
        name, email, phone, user_id: req.user.id
    })
    res.status(201).json(contact)
})

//@desc delete Contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler ( async(req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found!")
    }

    if(contact.user_id.toString() !== req.user_id){
        res.status(403)
        throw new Error("User don't have permisson to delete other user's contacts!!")
    }

    await Contact.deleteOne(contact)
    res.status(200).json(contact)
})

//@desc update Contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler( async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user_id){
        res.status(403)
        throw new Error("User don't have permisson to update other user's contacts!!")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.status(200).json(updateContact)
})

//@desc get Contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler (async (req, res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    res.status(200).json(contact)
})

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact}