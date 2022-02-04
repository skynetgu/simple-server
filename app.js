const http = require("http");
const HOSTNAME = "0.0.0.0";

const PORT = process.env.PORT || 9090;
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
  const { method, url, httpVersion, headers } = req;
  console.log(method, url, httpVersion, headers);

  res.writeHead(200, "OK OK OK", {
    "Content-Type": "text/plain; charset=UTF-8",
  });
  res.end("Hello 你好啊");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Serve on ${PORT}`);
});
