const express=require('express');
const router=express.Router();
const Note=require('../models/Notes');
const fetchUser=require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");

//Get all notes from the database and send them to the client : Login required
router.get('/allnotes', fetchUser ,(req,res)=>{
    const note=Note.find({user:req.user.id});
    note.then((notes)=>{
        res.json(notes);
    }
    ).catch((err)=>{
        res.json(err);
    }
    );

}
);


//Add a new note to the database using Get request : Login required
router.get('/add', fetchUser ,[
    body('title',"Title is required").isLength({min:5}),
    body('description',"Description is required").isLength({min:10})
],
(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const note=new Note({
        title:req.body.title,
        description:req.body.description,
        user:req.user.id
    });
    note.save().then((note)=>{
        res.json(note);
    }
    ).catch((err)=>{
        res.json(err);
    }
    );
}
);

//Update a note in the database using Get request : Login required
router.put('/update/:id', fetchUser ,async (req,res)=>{
    try{
    const {title,description,tag}=req.body;
    let newNote={};
    if(title) newNote.title=title;
    if(description) newNote.description=description;
    if(tag) newNote.tag=tag;
     //Find the note in the database and update it
    let note=await Note.findById(req.params.id);
    if(!note) return res.status(404).json({msg:"Note not found"});
    if(note.user.toString()!==req.user.id) return res.status(401).json({msg:"Not authorized"});
    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
    res.json(note);
    }
    catch(err){
        res.status(500).send("Server Error");
    }
}
);

//Delete a note in the database using Get request Using DELETE : Login required
router.delete('/delete/:id', fetchUser ,async (req,res)=>{
    //Find the note in the database and delete it
    try{
    let note=await Note.findById(req.params.id);
    if(!note) return res.status(404).json({msg:"Note not found"});
    if(note.user.toString()!==req.user.id) return res.status(401).json({msg:"Not authorized"});
    note=await Note.findByIdAndDelete(req.params.id);
    res.json({msg:"Note deleted"});
    }
    catch(err){
        res.status(500).send("Server Error");
    }
}
);


module.exports=router;