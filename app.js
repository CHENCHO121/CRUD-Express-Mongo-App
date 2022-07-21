import express from 'express';
import {join} from 'path'
const app = express();
const port = process.env.PORT || '3000';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';

//database url

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//connection db

connectDB(DATABASE_URL)

//middleware for req.body form data

app.use(express.urlencoded({extended:false}));

// static file

app.use(express.static(join(process.cwd(),'public')))
app.use('/edit',express.static(join(process.cwd(),'public')))


//template engine
app.set('views','./views');
app.set('view engine', 'ejs');

//load routes

app.use('/',web)



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})