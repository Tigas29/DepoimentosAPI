import express from "express";
import cors from "cors";
import connectDatabase from "./database/db.js";
import routes from "./routes.js";
const app = express();

app.use(express.json());

app.use(cors(`http://localhost:3001`));

app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(3000, () => console.log("Conectado"));
  })
  .catch((error) => console.log(error));

//pode ter o mesmo nome, o que importa é o verbo ser diferente.
