const express = require('express');
const app = express();
let items = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    let today = new Date()
    let myDate = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", myDate)
    res.render("ToDoList", {myDate: day, addedItem: items});
});
app.post("/", (req, res) =>{
    var item = req.body.addItem;
    items.push(item);
    res.redirect("/");
});
app.listen(7000, () =>{
    console.log("Server is running on port 7000");
})