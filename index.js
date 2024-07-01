import express from "express";
import path from "path"
import { fileURLToPath } from 'url';
import fs from "node:fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine" , "ejs") //sets the embeded js templete for my app

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//use of static files in index.ejs
//static files are those files that contains images, audios, vanilla js, css files, etc.
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    fs.readdir(`./files`,(err,files)=>{
        res.render("index" , {files: files})

    })
});
app.post("/create", (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt` , req.body.details, (err)=>{
    res.redirect("/")
})
});
app.get("/file/:filename" , (req,res)=>{
    fs.readFile(`./files/${req.params.filename}` ,"utf-8" , (err,filedata)=>{
        res.render("show" , {filename: req.params.filename , filedata: filedata}  )
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
