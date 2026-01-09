import React, { useState, useEffect } from "react"


function meuAppComCache() {
    const [texto, setTexto] = useState("")

    useEffect(() => {
        const textoNoCache = localStorage.getItem('meu-texto')
        if (textoNoCache) setTexto(textoNoCache)
        }, [])
    
    useEffect(() => {
        localStorage.setItem('texto-salvo', texto)
    }, [texto])

    const limparTudo = () => {
        localStorage.clear()
        setTexto("")
    }
}

return (
    <>
        <input 
            type="text"
            style={{color: texto.length > 3 ? 'green' : 'red'}}
            value={texto}
            onChange={
                (e) => setTexto(e.target.value)
            }
        ></input>
        
            {texto.length > 3 ? (
                <h1>
                    {(texto.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))}
                </h1>
            ) : (
                <p>Continue digitando... (Mínimo 4 letras)</p>
            )
        }

        <button onClick={ limparTudo }>
            Limpar Cache e Texto
        </button>
    </>
)