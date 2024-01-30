const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://matheusguilhermediresto10:Determinacao-0246@cluster0.nvqn3wq.mongodb.net/?retryWrites=true&w=majority');




const Filme = mongoose.model('Filme', {
    titulo: String,
    avaliacao: Number
});


app.post('/filmes', async (req, res) => {
    try {
        const novoFilme = new Filme(req.body);
        await novoFilme.save();
        res.json({ message: 'Filme criado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o filme.' });
    }
});


app.get('/filmes', async (req, res) => {
    try {
        const filmes = await Filme.find();
        res.json({ filmes });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os filmes.' });
    }
});


app.put('/filmes/:id/avaliar', async (req, res) => {
    try {
        const filme = await Filme.findByIdAndUpdate(
            req.params.id,
            { avaliacao: req.body.avaliacao },
            { new: true }
        );
        res.json({ message: 'Avaliação do filme atualizada com sucesso!', filme });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao avaliar o filme.' });
    }
});

app.get('/filmes/naoavaliado', async (req, res) => {
    try {
        const filmeNaoAvaliado = await Filme.findOne({ avaliacao: null });
        res.json({ filmeNaoAvaliado });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar filme não avaliado.' });
    }
});

app.listen(port, () => {
    console.log(`App Running`);
});
