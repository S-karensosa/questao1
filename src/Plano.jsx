import "./Plano.css";

function Plano( {titulo, preco, usuarios, projetos, tipo}){
    const cor_tip = "plano-container " + tipo;
    return(
        <div className={cor_tip}>
            <h1 className="plano-titulo">titulo</h1>
            <h2 className="plano-preço">preco</h2>
            <p className="plano-info">usuarios</p>
            <p className="plano-info">projetos</p>
        </div>
    );
}

export default Plano;