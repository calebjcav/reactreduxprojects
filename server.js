const express = require("express");
const fs = require("fs");
var cors = require('cors')
const maria = require('mariadb');
const { resolve } = require("path");

const pool = maria.createPool({
  host: 'localhost', 
  user:'mediaserverhub', 
  password: 'Q1ttkrpk!',
  connectionLimit: 5,
  database: 'frub'
})

const appPool = maria.createPool({
  host: 'localhost', 
  user:'mediaserverhub', 
  password: 'Q1ttkrpk!',
  connectionLimit: 5,
  database: 'Movies'
})

const authUser = async ({username, password}) => {
  let conn
  try {
    conn = await pool.getConnection()
    return await conn.query("SELECT * from Users WHERE Username = ? AND Password = ?", [username, password]).then(rows => rows)
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end()
  }
}

const fetchMovieList = async () => {
  let conn
  try {
    conn = await appPool.getConnection()
    return await conn.query("SELECT * from Movies").then(rows => rows)
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end()
  }
}

const fetchGenreList = async () => {
  let conn
  try {
    conn = await appPool.getConnection()
    return await conn.query("SELECT * from Genres").then(rows => rows)
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end()
  }
}

const genreGet = async ({genre}) => {
  let conn
  try {
    conn = await appPool.getConnection()
    return await conn.query("SELECT * from Movie-Genre").then(rows => rows)
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end()
  }
}
//app.use(cors())

// const sqlite = require("sql.js");

// const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

// const db = new sqlite.Database(filebuffer);

const app = express()
app.use(express.json())
// app.use(express.urlencoded())
// app.use(express.raw())

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

app.options('*', cors())

app.get("/api/movieList", cors(), async(request, response, next) => {
  let resp = await fetchMovieList().then(data => data.map(movie => ({
    movieid: movie.Movie_ID,
    title: movie.Name,
    image : `http://localhost:3002/Thumbnails/${movie.Picture}`,
    video : `http://localhost:3002/Videos/${movie.Video}`
  })))
  response.json({movies: resp})
  next()   
})

app.post("/api/login", cors(), async(request, response, next) => {
    let valid = await authUser(request.body).then(data => data.length > 0 )
    response.json({auth: valid})
    next()
  })


app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
