import { useState, useEffect, useRef } from "react";
import ItemLista from "./ItemLista";

function App() {
  const getListaInicial = () => {
    const listaSalva = localStorage.getItem("minhaListaMercado");

    if (listaSalva) {
      return JSON.parse(listaSalva);
    }

    return [];
  };

  const [listaMercado, setListaMercado] = useState(getListaInicial);

  useEffect(() => {
    localStorage.setItem("minhaListaMercado", JSON.stringify(listaMercado));
  }, [listaMercado]);

  const inputAdicionar = useRef();
  console.log(inputAdicionar);

  const adicionarItem = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;
    if (valorInput) {
      novaLista.push(valorInput);
      inputAdicionar.current.value = "";
    }
    setListaMercado(novaLista);
  };
  return (
    <>
      <h1>Lista de Mercado</h1>
      <input ref={inputAdicionar} type="text" placeholder="Digite um item" />
      <button onClick={() => adicionarItem()}>Adicionar</button>
      {listaMercado.length > 0 ? (
        <ul>
          {listaMercado.map((item, index) => (
            <ItemLista
              key={index}
              itemlista={item}
              listaMercado={listaMercado}
              setListaMercado={setListaMercado}
            />
          ))}
        </ul>
      ) : (
        <p>Você não tem nenhum item na sua lista!</p>
      )}
    </>
  );
}
export default App;
