import React, { useEffect, useState } from 'react';
import Tarefa from "../tarefa"; 
import './lista.css'; 

function Lista() {
  const [tarefas, setTarefas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const [tarefasRes, usuariosRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/todos'),
          fetch('https://jsonplaceholder.typicode.com/users'),
        ]);

        const tarefasData = await tarefasRes.json();
        const usuariosData = await usuariosRes.json();

        setTarefas(tarefasData);
        setUsuarios(usuariosData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchDados();
  }, []);

  const getNomeUsuario = (userId) => {
    const usuario = usuarios.find((user) => user.id === userId);
    return usuario ? usuario.name : 'Usuário não encontrado';
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "48%", backgroundColor: "green", padding: "10px" }}>

          <h2 className= "tituloC">Tarefas Completas</h2>
          <div className="tarefasCompletas">
            {tarefas
              .filter((tarefa) => tarefa.completed)
              .map((tarefa) => (
                <Tarefa
                  key={tarefa.id}
                  titulo={tarefa.title}
                  usuario={getNomeUsuario(tarefa.userId)}
                  completa={true}
                />
              ))}
          </div>
        </div>

        <div style={{ width: "48%", backgroundColor: "yellow", padding: "10px" }}>
          <h2 className="tituloP">Tarefas Pendentes</h2>
          <div className="tarefasPendentes">
            {tarefas
              .filter((tarefa) => !tarefa.completed)
              .map((tarefa) => (
                <Tarefa
                  key={tarefa.id}
                  titulo={tarefa.title}
                  usuario={getNomeUsuario(tarefa.userId)}
                  completa={false}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Lista; 
