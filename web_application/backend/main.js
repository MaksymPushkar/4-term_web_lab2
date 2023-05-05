// // ...............................................................................................
// // Підключення модулів ...........................................................................

// // Підключаємо express - веб фреймворк
// const express = require("express");

// // Підключаємо path - модуль для роботи із шляхами
// const path = require("path");

// // Підключаємо mongodb - модуль для роботи з MongoDB
// const mongo_client = require("mongodb").MongoClient;

// // Підключаємо cors - модуль для увімкненя Cross-Origin Resource Sharing
// const cors = require ("cors"); 
// const { error } = require("console");

// // ...............................................................................................
// // Створення необхідних констант та змінних ......................................................

// // Назва бази даних
// const db_name = "web_application";

// // Доступ до функцій модуля express
// const exp = express();
// const parser = express.json();

// // Порт доступу до локального сервера
// const PORT = process.env.npm_package_config_port_backend || 3000;

// // Шлях до директорії проекту
// const dir_proj = path.join(__dirname, "/../../");

// // Шлях до директорії бекенду
// const dir_back = __dirname;

// // Шлях до директорії view-елементів
// const dir_views = path.join(dir_back, "/views");

// // Створення об'єкту для підключення до бази даних
// const mongo = new mongo_client("mongodb+srv://Maksym:qwertyAtlas@labcluster.try3guc.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true });

// // Створення об'єкту для доступу до бази даних
// let db_client;

// // ...............................................................................................

// exp.listen(PORT, (err) => {
//   err ? console.log(err) : console.log(`listening port ${PORT}`);;
// })

// // Увімкнення CORS-запитів
// exp.use(cors());

// // Встановлюємо директорію для віддачі статичного контенту
// // У нашому випадку це буде директорія проекту
// exp.use(express.static(dir_proj));

// // Задаємо шаблонізатор, який буде використовуватися для відображення веб-сторінок
// exp.set("view engine", "ejs");

// // Задаємо шлях до view-елементів
// exp.set("views", dir_views);

// // Під'єднюємося до бази даних
// mongo.connect((error, client) => {

//   // Виводимо в консоль можливу помилку
//   if (error) { return console.log(error); }

//   // Ініціалізуємо об'єкт <db_client>
//   db_client = client;
//   console.log(111);

//   // Отримуємо доступ до колекцій в базі даних
//   exp.locals.projects      = client.db(db_name).collection("projects");
//   exp.locals.executors        = client.db(db_name).collection("executors");
//   exp.locals.customers       = client.db(db_name).collection("customers");
//   exp.locals.cured_customers = client.db(db_name).collection("cured_customers");
//   exp.locals.identificators = client.db(db_name).collection("identificators");
//   exp.locals.testtt = 111;

//   // Запускаємо локальний сервер
//   exp.listen(PORT, () => {

//     // Виводимо інформаційне повідомлення
//     console.log(`Backend server is started on ${PORT} port`);
//     console.log(`Url: http://localhost:${PORT}`);

//   });
// });

// // ...............................................................................................
// // Налаштовуємо маршрутизацію

// // ... для головної сторінки
// exp.get(["/", "/index"], (req, res) => {
//   res.render("pages/index", { title: "/index",
//                               port: PORT });
// });

// // ... для запиту /get_projects
// exp.get("/get_projects", (req, res) => {

//   collection = req.app.locals.projects;
//   collection.find({}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для запиту /get_executors
// exp.get("/get_executors", (req, res) => {

//   collection = req.app.locals.executors;
//   collection.find({}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для запиту /get_customers
// exp.get("/get_customers", (req, res) => {

//   collection = req.app.locals.customers;
//   collection.find({}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для запиту /get_cured_customers
// exp.get("/get_cured_customers", (req, res) => {

//   collection = req.app.locals.cured_customers;
//   collection.find({}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для запиту /get_last_hostipal_id
// exp.get("/get_last_project_id", (req, res) => {

//   collection = req.app.locals.identificators;
//   collection.find({name: "last_project_id"}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для запиту /get_last_executor_id
// exp.get("/get_last_executor_id", (req, res) => {

//   collection = req.app.locals.identificators;
//   collection.find({name: "last_executor_id"}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для запиту /get_last_customer_id
// exp.get("/get_last_customer_id", (req, res) => {

//   collection = req.app.locals.identificators;
//   collection.find({name: "last_customer_id"}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { res.send(result); }

//   });
// });

// // ... для /set_... запитів
// exp.put(["/set_projects",
//          "/set_executors",
//          "/set_customers",
//          "/set_cured_customers",
//          "/set_identificators"], parser, async (req, res) => {
//           console.log("req", req);

//   if (!req.body) { return res.sendStatus(400); }

//   let array      = req.body.array;
//   let collection = req.body.collection;

//   switch (collection) {
//     case 1: collection = req.app.locals.projects;      break;
//     case 2: collection = req.app.locals.executors;        break;
//     case 3: collection = req.app.locals.customers;       break;
//     case 4: collection = req.app.locals.cured_customers; break;
//     case 5: collection = req.app.locals.identificators; break;
//   }

//   try {

//     let result;
//     await collection.deleteMany({});

//     if (array.length === 0) { result = array; }
//     else                    { result = await collection.insertMany(array); }

//     return res.send(result);

//   }

//   catch (error) {

//     console.log(error);
//     return res.sendStatus(500);

//   }

// });

// // ... для інших запитів
// exp.use((req, res) => {

//   res.sendStatus(400);

// });

// // ...............................................................................................

// // Прослуховуємо переривання роботи сервера (ctrl-c)
// process.on("SIGINT", () => {

//   console.log("\n" + "Server is stopped");
//   db_client.close();  
//   process.exit();

// });

const express = require("express");

const PORT = process.env.npm_package_config_port_backend || 3000;

const db_name = "web_application";

const exp = express();

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Maksym:qwertyAtlas@labcluster.try3guc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const cors = require ("cors");
exp.use(cors());

const parser = express.json();

const start = async () => {
  try {

    await client.connect();

    exp.locals.projects       = client.db(db_name).collection("projects");
    exp.locals.executors      = client.db(db_name).collection("executors");
    exp.locals.customers      = client.db(db_name).collection("customers");
    exp.locals.identificators = client.db(db_name).collection("identificators");
    

    exp.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    })

  } catch (error) {

    console.log(error);
    
  }
} 
start();

exp.get("/get_customers", async (req, res) => {

  collection = await req.app.locals.customers;
  res.send(await collection.find({}).toArray());
});

exp.get("/get_projects", async (req, res) => {

  collection = await req.app.locals.projects;
  res.send(await collection.find({}).toArray());
});

exp.get("/get_executors", async (req, res) => {

  collection = await req.app.locals.executors;
  res.send(await collection.find({}).toArray());
});

exp.get("/get_last_project_id", async (req, res) => {

  collection = await req.app.locals.identificators;
  res.send(await collection.find({name: "last_project_id"}).toArray());
});

exp.get("/get_last_customer_id", async (req, res) => {

  collection = await req.app.locals.identificators;
  res.send(await collection.find({name: "last_customer_id"}).toArray());
});

exp.get("/get_last_executor_id", async (req, res) => {

  collection = await req.app.locals.identificators;
  res.send(await collection.find({name: "last_executor_id"}).toArray());
});

exp.put(["/set_projects",
         "/set_executors",
         "/set_customers",
         "/set_cured_customers",
         "/set_identificators"], parser, async (req, res) => {

  if (!req.body) { return res.sendStatus(400); }

  let array      = req.body.array;
  let collection = req.body.collection;

  switch (collection) {
    case 1: collection = req.app.locals.projects;       break;
    case 2: collection = req.app.locals.customers;      break;
    case 3: collection = req.app.locals.executors;      break;
    case 4: collection = req.app.locals.identificators; break;
  }

  try {

    let result;
    await collection.deleteMany({});

    if (array.length === 0) { result = array; }
    else                    { result = await collection.insertMany(array); }

    return res.send(result);

  }

  catch (error) {

    console.log(error);
    return res.sendStatus(500);

  }

});


// exp.get("/get_last_project_id", (req, res) => {
//   collection = req.app.locals.identificators;
//   collection.find({name: "last_project_id"}).toArray((error, result) => {

//     if (error) { console.log(error);
//                  res.sendStatus(500); }
//     else       { console.log(result);
//                  res.send(result); }

//   });
// });

// // Під'єднюємося до бази даних
// mongo.connect((error, client) => {

//   // Виводимо в консоль можливу помилку
//   if (error) { return console.log(error); }

//   // Ініціалізуємо об'єкт <db_client>
//   db_client = client;
//   console.log(111);

//   // Отримуємо доступ до колекцій в базі даних
//   exp.locals.projects      = client.db(db_name).collection("projects");
//   exp.locals.executors        = client.db(db_name).collection("executors");
//   exp.locals.customers       = client.db(db_name).collection("customers");
//   exp.locals.cured_customers = client.db(db_name).collection("cured_customers");
//   exp.locals.identificators = client.db(db_name).collection("identificators");
//   exp.locals.testtt = 111;

//   // Запускаємо локальний сервер
//   exp.listen(PORT, () => {

//     // Виводимо інформаційне повідомлення
//     console.log(`Backend server is started on ${PORT} port`);
//     console.log(`Url: http://localhost:${PORT}`);

//   });
// });