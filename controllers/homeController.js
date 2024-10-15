const homeController = (req, res) =>{
    // res.send("hello htis is me")
    // it directly takes the ejs(view) from the views folder
    // mentioning the extension is not necessary since we have mentioned the engine in app.js
    res.render('index', {'name' : "saksham", 'branch' : "IT B"})
    // even arrays can be passed here
}
module.exports =  homeController;