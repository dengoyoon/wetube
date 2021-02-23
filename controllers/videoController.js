import routes from "../routes";

export const home = (req, res) => {
    res.render("home.pug", {pageTitle: "Home", videos: videos});
};

export const search = (req, res) => {
    //const searchingFor = req.query.term;  //before ECMA6
    const {// "{query} = req" is "req.query" , "{query: {term}}"" is "req.query.term"
        query: {
            term: searchingFor
        } // searchingFor is req.query.term
    } = req;
    //console.log(term)
    res.render("search", {pageTitle: "Search" , searchingFor: searchingFor, videos});
};

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const postUpload = (req, res) => {
    const {
        body: {file, title, description}
    } = req;
    // To Do : Upload and Save Video
    res.redirect(routes.videoDetail(324912));

};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
