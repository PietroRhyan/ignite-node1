const express = require('express')

const app = express()

// Função para habilitar que o Express use/receba JSON
app.use(express.json())

/**
 * Tipos de parâmetros 
 * 
 * Route Params => Identificar um recurso p/ editar/deletar/buscar
 * Query Params => Grande uso em paginação / filtro 
 * Body Params => Os objetos p/ inserção/alteração (JSON)
 */

app.get('/courses', (req, res) => {
  const query = req.query
  console.log(query)

  return res.json([
    "Curso 1",
    "Curso 2",
    "Curso 3",
  ])
})

app.post('/courses', (req, res) => {
  const body = req.body
  console.log(body)

  return res.json([
    "Curso 3",
    "Curso 4",
    "Curso 5",
  ])
})

app.put('/courses/:id', (req, res) => {
  const params = req.params
  console.log(params)

  return res.json([
    'Curso Louco',
    'Curso Louco',
    'Curso Louco',
  ])
})

app.patch('/courses/:id', (req, res) => {
  return res.json([
    'Curso Louco',
    'Curso Louco',
    'Curso Louco',
  ])
})

app.delete('/courses/:id', (req, res) => {
  return res.json([
    'Curso Louco',
    'Curso Louco',
  ])
})

// localhost:3333
app.listen(3333)