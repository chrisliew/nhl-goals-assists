const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`NHL goals and assists listening on port ${port}`);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/goals', (req, res) => {
  const goals2017 = [
    {player: 'Alex Ovechkin', goals: 49},
    {player: 'Patrik Laine', goals: 44},
    {player: 'William Karlsson', goals: 44},
    {player: 'Evgeni Malkin', goals: 42},
    {player: 'Eric Staal', goals: 42}
  ]

  res.json(goals2017);
  console.log("Sent Goals");
})

app.get('/api/assists', (req, res) => {
  const assists2017 = [
    {player: 'Claude Giroux', assists: 68},
    {player: 'Blake Wheeler', assists: 68},
    {player: 'Connor McDavid', assists: 67},
    {player: 'Jakub Voracek', assists: 65},
    {player: 'Mathew Barzal', assists: 63}
  ]

  res.json(assists2017);
  console.log("Sent Assists");
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});