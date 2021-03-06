import express, { json } from "express";
import { UsersRoutes, AuthRoutes, ContactsRoutes } from "./routes";
import "./db.connection";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/users", UsersRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/contacts", ContactsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
