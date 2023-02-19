import Students from "../models/Students.js";

export const createStudent = async(req, res)=>{
    const studentid = await Students.findOne({stId:req.body.stId});

    try {
        if(studentid){
            res.status(422).json('Student is already registered');
        }
        else{
            const newStudent = new Students(req.body);
            const savedStudent = await newStudent.save();
            res.status(200).json(savedStudent);
        }
    } catch (err) {
        console.log(err)
    }
    
}

export const getStudent = async(req, res)=>{
    const student = await Students.findOne({stId:req.params.studentid});
   try {
        if(student){
            res.status(200).json(student);
        }
        else{
            res.status(404).json('No student bears the provided ID');
        }
   } catch (err) {
       console.log(err)
   }
}


export const getAllStudent = async(req, res)=>{
    try {
        const students = await Students.find();
        res.status(200).json(students);
    } catch (err) {
        console.log(err)
    }
    
}