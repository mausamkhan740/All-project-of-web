const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const {v4:uuid4}=require('uuid');


app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuid4(),
        username:"apnacollege",
        content:"i have the delta.2 batch of apnacollege",
    },
    {
        id:uuid4(),
        username:"mausam",
        content:"be confident",
    },
    {
        id:uuid4(),
        username:"arun",
        content:"lazy guy",
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts/posts",(req,res)=>{
    const {username,content}=req.body;
    const id=uuid4();
    // const id=Math.random().toString(36).substring(2,5);
    posts.push({id, username,content});
    // console.log("new post recived",username,content);
    res.send("post request working");
    res.redirect("/posts");
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(p=>id===p.id);
    res.render("edit.ejs",{post});
});

// app.get("/posts/id/:id",(res,req)=>{
    // let {id}=req.params;
    // console.log(id);
    // res.send(`request working with post  id :${id}`);
// });
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    console.log("Requested Post ID:", id );
    const post = posts.find(p => p.id === id);
    // console.log(post);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("show.ejs",{post});
});
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let posts=posts.filter(p=>id!==p.id);
    res.redirect("/posts");

});

app.listen(port,()=>{
    console.log(`listening to port:${port}`);
});