const express = require("express");
const cats = require('./data.js');
const app = express();

app.use(express.urlencoded({ extended: true }));


//to get all cats data
app.get('/', (req, res) => {
    res.send(cats);
})

//to get a cat data by id
app.get('/:cat_id', (req, res) => {
    const cat = cats.cats.find(cat => cat.cat_id === req.params.cat_id);
    console.log(cat);
    res.send(cat);
});

//to add cat
app.post("/", (req, res) => {
    const { name, age, breed, cat_id } = req.body;
    cats.cats.push({ name, age, breed, cat_id });
    res.send("cat added successfullly");
    console.log(cats.cats);
})

//to delete cat
app.delete('/:cat_id', (req, res) => {
    cats.cats = cats.cats.filter(cat => cat.cat_id !== req.params.cat_id);
    res.send("cat deleted");
    console.log(cats.cats);
})

//to update a cat details
app.put('/:cat_id', (req, res) => {
    const { name, age, breed ,cat_id} = req.body;
    cats.cats = cats.cats.map((cat) => {
        return cat.cat_id===req.params.cat_id?{name,age,breed,cat_id}:cat;
    })
    res.send("cat updated");
    console.log(cats.cats);
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})
