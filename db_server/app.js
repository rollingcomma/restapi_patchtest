const express = require("express"),
      app = express(),
      path = require("path");

module.exports = () => {
    const sheetRouter = require("./sheet_router")(); 
    app.set('view engine', 'ejs');
    app.use("/", sheetRouter);
    
    app.use(express.static(path.join(__dirname, "../public")));
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    return app;
};
