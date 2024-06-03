import path from "path";
import { addPostQuery, mostrarPostsQuery, addLikeQuery, deletePostQuery } from "../models/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
};

export const addPost = async (req, res) => {
  try {
    const { usuario, URL, descripcion } = req.body;

    const result = await addPostQuery(usuario, URL, descripcion);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const mostrarPosts = async (req, res) => {
  try {
    const result = await mostrarPostsQuery();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const addLike = async (req, res) => {
  try {
    const { id } = req.query
    const result = await addLikeQuery(id);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.query
    const result = await deletePostQuery(id);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
}
