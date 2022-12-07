const json_data = [{"id":567,"dsecricao":"RIA","ativa":true,"professor":{"matricula":"4567890","nome":"Joao carlos"},"alunos":["maria","sergio","luan"]},{"id":123,"dsecricao":"APOO","ativa":false,"professor":{"matricula":"26352","nome":"Alessndro Souza"},"alunos":["maria","sergio","luan"]}]
const disciplinas = document.getElementById('disciplinas')

json_data.forEach((disciplina) => {
    node = document.createElement("li")
    text = document.createTextNode(disciplina.id)
    node.appendChild(text)
    disciplinas.appendChild(node)
})