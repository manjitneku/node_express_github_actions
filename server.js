var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
  const htmlContent = `
  <h1><a href='https://c0869661-node-app.azurewebsites.net/name'>Go To Name Page</a></h1>
  <h1><a href='https://github.com/manjitneku/node_express_github_actions.git'>Go To Github Page</a></h1>
  <h1><a href='https://c0869661-node-app.azurewebsites.net/admin'>Go To Admin Page</a></h1>
  <h1><a href='https://c0869661-node-app.azurewebsites.net/user/109'>Go To User ID</a></h1>  
`;
res.send(htmlContent);
})

//http://localhost:3000/name
app.get('/name', function (req, res) {
  res.send("<h1>C0869661 - Manjit Neku</h1>")
  
})

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.send('Admin Homepage')
})

//http://localhost:3000/user/100
app.get("/user/:id", (req, res)=> {
      res.send(`User ID: ${req.params.id}`);
    }
)

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});
  
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})
