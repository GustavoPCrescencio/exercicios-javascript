function ItemTarefa ({ item, index, aoAlternar, aoRemover }) {
    return (
        <li
            style={{
                marginBottom: '20px',
                listStyle: 'none',
                textDecoration: item.concluido ? 'line-through' : 'none'
            }}
        >
            <button
                onClick={() => aoAlternar(index)}
                style={{
                    marginRight: '30px',
                    color: item.concluido ? 'green' : 'gray'
                }}
            >✓</button>

            {item.tarefa}

            <button
                onClick={() => aoRemover(index)}
                style={{
                    color: 'red', 
                    marginLeft: '30px'
                }}
            >X</button>
        </li>
    )
}

export default ItemTarefa