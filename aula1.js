let idade = 21
let projetos = 10
let logado = true

idade = 22

const nome = 'Gustavo'
const nomesProjetos = ['Site da Padaria', 'App de Fotos', 'Jogo da Velha']

console.log(typeof(idade))
console.log(typeof(logado))
console.log(typeof(nome))

// Adicionando um novo projeto
nomesProjetos.push('Novo projeto') 

console.log('------------------------------')
console.log(nomesProjetos.length)

// Objetos (Uma forma de organizar dados complexos com chave: valor)
// O Model e o req.body são objetos

const novoUsuario = {
    id: 1,
    nome: 'Gustavo',
    email: 'gustavo@gmail.com',
    logado: true
}

console.log(novoUsuario.nome)
console.log(novoUsuario.logado)

novoUsuario.logado = false

console.log(novoUsuario.logado)
console.log('------------------------------')

const projetosForEach = ['Site A', 'Site B', 'Site C']

// Para cada objeto, imprimir o nome dele

projetosForEach.forEach(function(projetoForEach) {
    console.log(projetoForEach)
})
console.log('------------------------------')

// Funcoes

function somar(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}

const total = somar(10, 5)
console.log(total)
console.log('------------------------------')

// Arrow Functions (Um jeito mais limpo de escrever funcoes)

const somarArrow = (numero1, numero2) => {
    return numero1 + numero2
}

// Arrow function muito mais simplicicado (Se for um código de apenas uma linha)
const somarArrowSimples = (numero1, numero2) => numero1 + numero2

// Metodos de Array (.map, .filter, .find)
// Criando um array de objetos
const usuariosArray = [
    {id: 1, nome: 'Pedro', admin: false},
    {id: 1, nome: 'Bruno', admin: true},
    {id: 1, nome: 'Carla', admin: false}
]

// Aqui eu misturo arrow function simplificada com metodo de array
const admin = usuariosArray.find(usuarioArray => usuarioArray.admin === true)
const usuariosComuns = usuariosArray.filter(usuarioArray => usuarioArray.admin === false)

console.log(admin)
console.log(usuariosComuns)
console.log('------------------------------')

// Desestruturação ou Desempacotamento

// Sem desestruturação
const nomeSemDesempacotamento = req.body.nomeReq
const emailSemDesempacotamento = req.body.emailReq
const senhaSemDesempacotamento = req.body.senhaReq

// Com desestruturação (é a mesma coisa que escrever o de cima, mas em apenas uma linha)
const  { nomeComDesempacotamento, emailComDesempacotamento, senhaComDesempacotamento } = req.body

