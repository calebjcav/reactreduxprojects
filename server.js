 
const express = require("express");
const fs = require("fs");
var cors = require('cors')

//app.use(cors())

// const sqlite = require("sql.js");

// const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

// const db = new sqlite.Database(filebuffer);

const app = express();

app.set("port", process.env.PORT || 3002);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static('public'))

// app.get("/api/Thumbnails/{$id}", cors(), (request, response, next) => {
//   fs.readFile('./Ajax/HeroList.json', "utf8", (err, data) => {
//     if (err) throw err
//     response.json(data)
//     next()
//   })
// })

app.get("/api/movieList", cors(), (request, response, next) => {
  fs.readdir('./public/Thumbnails', "utf8", (err, files) => {
    if (err) throw err
    let resp = files.map((file, index) => ({
      movieid : index,
      title : file,
      image : `http://localhost:3002/Thumbnails/${file}`
    }))
    response.json({files: resp})
    next()   
  })
})

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
