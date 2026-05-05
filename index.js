import express from "express";
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs",{posts:posts});
});
let posts=[];
let postId=1;
app.post("/submit", (req, res) => {
    const title=req.body.title;
    const content=req.body.content;
    const newPost={
        id:postId,
        title:title,
        content:content
    };
    posts.push(newPost);
    postId++;
    res.redirect("/");
});
app.post("/delete",(req,res)=>{
    const postingId=req.body.id;
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.post("/delete/:id",(req,res)=>{
    const id = Number(req.params.id);
    posts = posts.filter((post) => post.id !== id);
    res.redirect("/");
})
app.get("/edit/:id",(req,res)=>{
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    res.render("edit.ejs", { post: post });
})
app.post("/update/:id",(req,res)=>{
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
})