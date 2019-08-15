let express = require("express");
let app = express();
let reloadMagic = require("./reload-magic.js");
let multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
let cookieParser = require("cookie-parser");
let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;
let sha1 = require("sha1");
sessions = {};

let dbo = undefined;
let url =
  "mongodb+srv://chuckedup:zsxiIYiIBXJRSG3R@cluster0-z0c2g.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  dbo = db.db("AliBay");
});

reloadMagic(app);

app.use(cookieParser());
app.use("/image", express.static("uploads"));
app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/", express.static("public")); // Needed for local assets

let generateid = () => {
  return Math.floor(Math.random() * 1000000000);
};

// Your endpoints go after this line
app.post("/login", upload.none(), (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  dbo.collection("users").findOne({ username }, (err, user) => {
    console.log(user);
    if (err) {
      res.send(JSON.stringify({ success: false }));
      return;
    }
    if (user === null) {
      res.send(JSON.stringify({ success: false }));
      return;
    }
    if (user.password === sha1(password)) {
      let sid = generateid();
      sessions[sid] = username;
      res.cookie("sid", sid);
      res.send(JSON.stringify({ success: true }));
      return;
    }
    res.send(JSON.stringify({ success: false }));
  });
});

app.post("/signup", upload.none(), (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  dbo.collection("users").findOne({ username }, (err, user) => {
    if (err) {
      res.send(JSON.stringify({ success: false }));
      return;
    }
    if (user === null) {
      dbo
        .collection("users")
        .insertOne({ username, password: sha1(password), email });
      res.send(JSON.stringify({ success: true }));
      return;
    }
    res.send(JSON.stringify({ success: false }));
  });
});

app.post("/newItem", upload.single("img"), (req, res) => {
  let brand = req.body.brand;
  let model = req.body.model;
  let movement = req.body.movement;
  let date = new Date();
  let country = req.body.country;
  let price = parseInt(req.body.price);
  let style = req.body.style;
  let username = req.body.username;
  let title = req.body.title;
  let desc = req.body.desc;
  let id = generateid();
  let file = req.file;
  let imgPath = "/uploads/" + file.filename;

  let sid = req.cookies.sid;
  if (sessions[sid] === username) {
    dbo.collection("items").insertOne({
      brand,
      imgPath,
      model,
      movement,
      date,
      country,
      price,
      style,
      username,
      title,
      desc,
      id
    });
  }

  res.send(JSON.stringify({ success: true }));
});

app.get("/checkLogin", (req, res) => {
  let sid = req.cookies.sid;
  let username = sessions[sid];
  if (sessions[sid] === undefined) {
    res.send(JSON.stringify({ success: false }));
    return;
  }
  res.send(JSON.stringify({ success: true, username }));
});

app.get("/logout", (req, res) => {
  let sid = req.cookies.sid;
  delete sessions[sid];
  res.send(JSON.stringify({ success: true }));
});

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
