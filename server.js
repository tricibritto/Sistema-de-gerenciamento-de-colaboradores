const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./src/database/connection');

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/colaboradores', (req, res) => {

    db.query(
        'SELECT * FROM colaboradores',
        (err, results) => {
            if(err){
                return res.status(500).json(err);
            }
            res.json(results);
        }
    );

});

app.post('/colaboradores', (req, res) => {

    const {
        nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status
    } = req.body;

    const sql = `
    INSERT INTO colaboradores
    (nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?) `;

    db.query(
        sql,
        [  nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status ],
        (err, result) => {
            if(err){
                return res.status(500).json(err);
            }
            res.json({
                mensagem: 'Colaborador cadastrado'
            });
        }
    );

});

app.put('/colaboradores/:id', (req, res) => {

    const { id } = req.params;

    const {
        nome_completo, idade, cargo, salario, tempo_empresa, data_admissao, setor, status
    } = req.body;

    const sql = `
        UPDATE colaboradores
        SET nome_completo=?, idade=?, cargo=?, salario=?, tempo_empresa=?, data_admissao=?, setor=?, status=? WHERE id=?
    `;

    db.query(
        sql,
        [nome_completo,idade,cargo,salario,tempo_empresa,data_admissao,setor,status,id],
        
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }
            res.json({
                mensagem: 'Atualizado com sucesso'
            });
        }
    );
});

app.delete('/colaboradores/:id', (req, res) => {

    const { id } = req.params;
    db.query(
        'DELETE FROM colaboradores WHERE id=?',
        [id],
        (err, result) => {
            if(err){
                return res.status(500).json(err);
            }
            res.json({
                mensagem: 'Colaborador removido'
            });
        }
    );

});