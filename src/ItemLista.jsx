import React from "react";

const ItemLista = ({ itemlista, listaMercado, setListaMercado }) => {
  const removerLista = () => {
    const novaLista = [...listaMercado];
    const novaListaFiltrada = novaLista.filter((item) => item !== itemlista);

    setListaMercado(novaListaFiltrada);
  };
  return (
    <li>
      <p>{itemlista}</p>
      <button onClick={() => removerLista()}>Remover</button>
    </li>
  );
};

export default ItemLista;
