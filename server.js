import express from "express";
import { UsersRoutes, AuthRoutes, ContactsRoutes } from "./routes";

const app = express();

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
