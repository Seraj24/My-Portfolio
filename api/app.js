const express = require('express');
const path = require('path');
const app = express();

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'src', 'views'));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, '..', 'public')));


// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Welcome to My Story" });
});

app.get('/skills', (req, res) => {
    res.render('skills', { title: "My Skills" });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: "My Projects" });
});

// 404 Route (Catch-All)
app.use((req, res) => {
    res.status(404).render('404', { title: "Page Not Found" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
