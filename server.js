const express=require ('express')
const app = express();
const Routes = require('./routes/routes')
//Solcitudes entrantes
app.use(express.json());

app.use('/api',Routes.user)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log("Server Activated Correctly"))