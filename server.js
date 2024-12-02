const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configurar conexão com o banco de dados
const db = mysql.createConnection({
  host: 'autorack.proxy.rlwy.net',
  user: '-plQJnGNuvsohaoDofhuEygkkvgbacVIzz', 
  password: 'lQJnGNuvsohaoDofhuEygkkvgbacVIzz', 
  database: 'sistema_login'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para buscar dados do estoque normal
app.get('/estoque-normal', (req, res) => {
  const query = 'SELECT id, material, quantidade FROM estoque_normal';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Rota para buscar dados do estoque de doações
app.get('/estoque-doacao', (req, res) => {
  const query = 'SELECT id, material, quantidade FROM estoque_doacao';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
 
// Rota para receber os dados do formulário
app.post('/submit-form', (req, res) => {
  const withdrawData = req.body;
 
  // Configuração do transporte do Nodemailer = FOI CRIADO UM EMAIL PARA RECEBER O FORMS de retirada E ENVIAR DIRETO PARA O ADM APROVAR A RETIRADA.
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'respostacondeleal@titan.com',
      pass: 'RespostaC032',
    },
  });
 
  // Configuração do e-mail
  const mailOptions = {
    from: 'respostacondeleal@titan.com',
    to: 'administrativocondeleal@gmail.com',
    subject: 'Nova Solicitação de Retirada',
    text: `
      Nome: ${withdrawData.name}
      Setor: ${withdrawData.sector}
      Data: ${withdrawData.date}
      E-mail: ${withdrawData.email}
      Nº: ${withdrawData.number}
      Material: ${withdrawData.material}
      Quantidade: ${withdrawData.quantity}
      Tipo de Estoque: ${withdrawData.stockType}
    `,
  };
 
  // Enviando o e-mail
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Erro ao enviar e-mail:', err);
      res.status(500).send('Erro ao enviar e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.status(200).send('Dados recebidos e e-mail enviado');
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
