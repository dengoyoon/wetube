import {videos} from "../db";

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos: videos});
};

export const search = (req, res) => {
    //const searchingFor = req.query.term;  //before ECMA6
    const {// "{query} = req" is "req.query" , "{query: {term}}"" is "req.query.term"
        query: {term: searchingFor} // searchingFor is req.query.term
    } = req;
    //console.log(term)
    res.render("search", {pageTitle: "Search" , searchingFor: searchingFor});
}

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
