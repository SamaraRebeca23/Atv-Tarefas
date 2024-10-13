function tarefa({ titulo, usuario, completa, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "5px",
        border: "ipx solid black",
        margin: "5px",
      }}
    >
        <p
        style={{
          backgroundColor: "white",
          textDecoration: completa ? "line-through" : "none",
          padding: "05px",
          margin: "05px 0",
        }}
        
      >
        {titulo} - {usuario}
      </p>
      </div>
  );
}

export default tarefa;
