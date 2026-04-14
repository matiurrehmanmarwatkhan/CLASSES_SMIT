const { log } = require("console");
const http = require("http");
const { json } = require("stream/consumers");
const users = [
  { id: 1, name: "Ali Khan", gmail: "ali.khan@gmail.com" },
  { id: 2, name: "Ahmed Raza", gmail: "ahmed.raza@gmail.com" },
  { id: 3, name: "Usman Tariq", gmail: "usman.tariq@gmail.com" },
  { id: 4, name: "Hassan Malik", gmail: "hassan.malik@gmail.com" },
  { id: 5, name: "Bilal Ahmed", gmail: "bilal.ahmed@gmail.com" },
  { id: 6, name: "Zain Ali", gmail: "zain.ali@gmail.com" },
  { id: 7, name: "Hamza Khan", gmail: "hamza.khan@gmail.com" },
  { id: 8, name: "Muneeb Shah", gmail: "muneeb.shah@gmail.com" },
  { id: 9, name: "Talha Noor", gmail: "talha.noor@gmail.com" },
  { id: 10, name: "Saad Rehman", gmail: "saad.rehman@gmail.com" },
  { id: 11, name: "Awais Iqbal", gmail: "awais.iqbal@gmail.com" },
  { id: 12, name: "Farhan Ali", gmail: "farhan.ali@gmail.com" },
  { id: 13, name: "Taimoor Khan", gmail: "taimoor.khan@gmail.com" },
  { id: 14, name: "Shayan Ahmed", gmail: "shayan.ahmed@gmail.com" },
  { id: 15, name: "Danish Malik", gmail: "danish.malik@gmail.com" },
  { id: 16, name: "Rafay Hassan", gmail: "rafay.hassan@gmail.com" },
  { id: 17, name: "Sufyan Ali", gmail: "sufyan.ali@gmail.com" },
  { id: 18, name: "Abdullah Khan", gmail: "abdullah.khan@gmail.com" },
  { id: 19, name: "Huzaifa Noor", gmail: "huzaifa.noor@gmail.com" },
  { id: 20, name: "Mati Ur Rehman", gmail: "matiurrehman@gmail.com" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.method === "GET" && req.url === "/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
