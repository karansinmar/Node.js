const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello! , Node.js is working fine.");
    res.write("\n");
    res.write("My name is Karan Singh and I am a Full Stack Developer.");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});