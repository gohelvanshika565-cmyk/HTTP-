const http =require ("http")

let server = http.createServer((req, res)=>{
    res.end("My page is running")
})

server.listen(2222,()=>{
    console.log("server is running on port 2222")
})
