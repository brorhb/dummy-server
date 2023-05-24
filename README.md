# dummy-server
Takes wildcard as endpoint, and returns the configured status code and response

## Get started
```
git clone
```

```
cd dummy-server && npm i && node server.js
```

I would suggest adding an alias in .zshrc for this as well.

## How to use it

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

You can also send in status and response as query params


Example:

GET: http://localhost:3000/mymockendpoint?status=400&response={"error":"Bad request"}
