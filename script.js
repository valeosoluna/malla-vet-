body {
  font-family: Arial, sans-serif;
  background: #f2f2f2;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.semestre {
  margin-bottom: 40px;
}

.ramos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ramo {
  padding: 10px 15px;
  background-color: #ffc0cb; /* rosado */
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  border: 1px solid #999;
}

.ramo.aprobado {
  background-color: #a64ca6; /* morado */
  color: white;
  text-decoration: line-through;
}

.ramo.bloqueado {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  pointer-events: none;
}
