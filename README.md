# CarDealer

Backend  - Sistema de Revenda de automoveis

Recursos disponíveis para acesso via API:


Recursos disponíveis para acesso via API:
 <a href="#usuario">Usuários</a> 
 <a href="#car">Carros</a> 


## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Registro executado com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|


# Group Autenticação
Em nossa API realizamos a validação do usuário com email e senha  como forma de autenticação/autorização.

## Solicitando tokens de acesso

### Utilizando personal_token [POST]

O `personal_token` é do formato JWT e contém informações do usuário. Este é o token utilizado para realizar algumas requisições dentro da API.

#### Dados para envio no POST
| Parâmetro | Descrição |
|---|---|
| `email` | Informar: `email` |
| `password` |  Informar: `senha` |

+ Request (application/json)

    + Body
      {
  "email": "mv@gmail.com",
  "password": "121212"
}


