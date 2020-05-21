import React from 'react';
import ReactDOM from 'react-dom'; 

import App from './App.js';

ReactDOM.render(<App />,document.getElementById('root'));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);