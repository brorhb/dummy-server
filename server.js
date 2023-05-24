const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

function generateResponse(req, res) {
    if (req.body) {
        return res.status(req.body.status ?? 200).send(req.body.response ?? {})
    } else if (req.query) {
        const { status, response } = req.query
        return res.status(status).send(response)
    }
}


app.get('*', (req, res) => {
    generateResponse(req, res)
})

app.post('*', (req, res) => {
    generateResponse(req, res)
})

app.put('*', (req, res) => {
    generateResponse(req, res)
})

app.delete('*', (req, res) => {
    generateResponse(req, res)
})

app.patch('*', (req, res) => {
    generateResponse(req, res)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  console.log(`
This mockserver takes GET, POST, DELETE, PATCH and PUT requests and returns the statuscode and response defined in the request body.


Example:

GET: http://localhost:3000/mymockendpoint

{
    "status": 500,
    "response": {
        "error": "Something went wrong"
    }
}

The app looks for the key status, for the return status, and response for the response
  `)
})
