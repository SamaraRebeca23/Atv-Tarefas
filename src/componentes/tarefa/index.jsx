function tarefa({ titulo, usuario, completa }) {
    return (
      <p
        style={{
          backgroundColor: "white",
          textDecoration: completa ? "line-through" : "none", 
          padding: "10px",
          margin: "5px 0",
        }}
      >
        {titulo} - {usuario}
      </p>
    );
  }
  
  export default tarefa;