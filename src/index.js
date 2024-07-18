//require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

//efis js

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 800, () => {
      console.log(`Server Running on PORT Number is ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("MongoDB Connection Failed!", e);
  });

//-r dotenv/config --experimental-json-modules
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (e) => {
      console.log("Error on Express", e);
      throw e;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is Listening on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.error("Error", e);
    throw e;
  }
})();


*/
