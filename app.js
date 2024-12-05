const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();

app.set('views', path.join(__dirname, 'src', 'views'));
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Welcome to Seraj's Story" });
});

app.get('/skills', (req, res) => {
    res.render('skills', {title: "My Skills"})
});

app.get('/projects', (req, res) => {
    res.render('projects', {title: "My Projects"})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
