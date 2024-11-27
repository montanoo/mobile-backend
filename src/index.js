import app from "./app.js";
import router from "./routes/index.js";

app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Backend service initialized at port: ${process.env.PORT || 3000}`
  );
});
