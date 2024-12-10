import express = require("express");
import * as dotenv from "dotenv";
import router from "./routes/indexRoute";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);

app.listen(PORT,()=>{
    console.log(`Sevidor rodando na porta ${PORT}`);
});


