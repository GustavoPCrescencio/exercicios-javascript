import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [ texto, setTexto ] = useState(() => {
    const textoSalvo = localStorage.getItem('texto-salvo')
    return textoSalvo || ""
  })

  const [ lista, setLista ] = useState(() => {
    const listaSalva = localStorage.getItem('lista-salva')
    const listaObj = JSON.parse(listaSalva)
    return listaObj || []
  })

  const adicionarItem = () => {
    // Spread Operator = ... = adicionar

    if(texto.trim() === "") return

    const novoItem = {
      id: Date.now(),
      tarefa: texto,
      concluido: false
    }

    setLista([...lista, novoItem])
    setTexto("")
  }

  const removerItem = (indexParaRemover) => {
    const novaLista = lista.filter((_, index) => index !== indexParaRemover)
    setLista(novaLista)
  }

  const alterarConcluido = (indexParaModificar) => {
    const novaLista = lista.map((item ,index) => { 
      if(index === indexParaModificar) {
        return { ...item, concluido: !item.concluido }
      }
      return item
    })
    setLista(novaLista)
  } 

  useEffect(() => { localStorage.setItem('texto-salvo', texto) }, [texto])

  useEffect(() => { localStorage.setItem('lista-salva', JSON.stringify(lista)) }, [lista])

  return (
    <>
      <input 
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => { e.key === 'Enter' && adicionarItem()} /* Isto escrito é = if(e.key === 'Enter') { adicionarItem() } */ }  
      />

      <button onClick={ adicionarItem }>Adicionar Item</button>

      <ul>
        { lista.map((item, index) => (
          <li key={index}>

          <span
            onClick={ () => alterarConcluido(index) }
            style={{ 
              textDecoration: item.concluido ? 'line-through' : 'none', 
              cursor: 'pointer'
            }}
          >
            {item.tarefa}
          </span>
            <button onClick={ () => removerItem(index) } style={{ color: 'red',  marginLeft: '30px', }} >X</button>
          </li>
        )) }
      </ul>
    </>
  )
}

export default App