const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const authRoutes=require("./Routes/AuthRoutes")


const app=express()
const cookieParser=require("cookie-parser");

app.listen(4000,()=>{
    console.log("server started on port 4000")
});

mongoose.connect("mongodb+srv://demo5:demo5@cluster0.ypmr80m.mongodb.net/demo5?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connection successfully")
}).catch(err=>{
    console.log(err.message)
})

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true,
}))

app.use(cookieParser())
app.use(express.json())
app.use("/",authRoutes)