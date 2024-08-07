const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})