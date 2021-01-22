const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Here is a list of the restricted Legendary Pokémon that will be available:

Mewtwo
Lugia
Ho-Oh
Kyogre
Groudon
Rayquaza
Dialga
Palkia
Giratina
Reshiram
Zekrom
Kyurem
Xerneas
Yveltal
Zygarde
Cosmog
Cosmoem
Solgaleo
Lunala
Necrozma
Zacian
Zamazenta
Eternatus
Calyrex (fused with Glastrier or Spectrier)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
