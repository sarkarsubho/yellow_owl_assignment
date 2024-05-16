import express from "express";
import { StudentModel } from "../models/students";

export const createStudent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let studentDetails = req.body;
    const newStudent = await new StudentModel(studentDetails)
      .save()
      .then((data) => data.toObject());

    return res.status(201).send({ success: true, student: newStudent });
  } catch (error) {
    console.log(error);

    res.status(400).send({ error: true, message: "Something went wrong..." });
  }
};

export const getStudents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const students = await StudentModel.find({});

    return res.status(200).send({ students });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ error: true, message: "Something went wrong..." });
  }
};

export const deleteStudent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedStudent = await StudentModel.findByIdAndDelete({ _id: id });

    return res.status(200).send({ success: true, student: id });
  } catch (error) {
    console.log(error);

    res.status(400).send({ error: true, message: "Something went wrong..." });
  }
};
export const updateStudent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const studentDetails = req.body;

    const updatedStudent = await StudentModel.findByIdAndUpdate(
      id,
      studentDetails,
      {
        new: true,
      }
    ).then((data) => data.toObject());

    return res.status(200).send({ success: true, student: updatedStudent });
  } catch (error) {
    console.log(error);

    res.status(400).send({ error: true, message: "Something went wrong..." });
  }
};
