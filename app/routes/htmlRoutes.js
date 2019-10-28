const path = require('path');

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get("/projects", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/projects.html"));
    });
    app.get('/contact', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/contactMe.html'));
    })
}