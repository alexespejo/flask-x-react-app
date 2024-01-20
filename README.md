# flask-x-react-app

There's a lot of files and code in this project but there's only 2 folders/files to pay attention to **[/server/app.py]([http://www.example.com](https://github.com/alexespejo/flask-x-react-app/blob/main/server/app.py)https://github.com/alexespejo/flask-x-react-app/blob/main/server/app.py)** and **[/src/App.jsx]([http://www.example.com](https://github.com/alexespejo/flask-x-react-app/blob/main/src/App.jsx)https://github.com/alexespejo/flask-x-react-app/blob/main/src/App.jsx)**

## Clone The Project 
Open a terminal and enter
```bash
git clone https://github.com/alexespejo/flask-x-react-app.git
```

To view this example you have to run the server and website at the same time 

### Dependecies 
Make sure you have flask installed 
```bash
pip install flask
```

## Flask Code: /server/app.py
```python 
from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 

# This is our api route 
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data) 

if __name__ == '__main__':
    app.run(debug=True) # Focus on the URL: http://127.0.0.1:5000/api/data
```
### Run the server
Create one terminal and run the following commands
```bash
cd server
flask app.py
```

## React Code: /src/App.jsx
```javascript
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
 const [data, setData] = useState({});

 useEffect(() => {
  /*
  To connect the website with the server we preform a task called "fetching" 
  */
  fetch("http://127.0.0.1:5000/api/data") // Notice how this is the URL we get from the Flask code
   .then((response) => response.json())
   .then((data) => setData(data))
   .catch((error) => console.error("Error fetching data:", error));
 }, []);

 return (
  <div className="App">
   <header className="App-header">
    <h1>React App</h1>
    <p>Data from Flask API: {data.message}</p>
   </header>
  </div>
 );
}

export default App;
```

### Run the website 
The website will display the message **fetched** from the Flask server 
```bash
npm run dev
```
