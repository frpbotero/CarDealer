# CarDealer

Backend  - Sistema de Revenda de automoveis

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


# Rotas

##User

| Metodo | Endpoint | Descrição | Status | Autenticação|
|---|---|---|---|---|
|`GET`|/user|Listar todos usuários|200| SIM|
|`GET`|/user/:id|Lista um usuário pelo ID|200| SIM|
|`POST`|/user|Cria um usuário|201| NÃO|
|`PUT`|/user/:id|Atualiza um usuário pelo ID|200| SIM|
|`DELETE`|/user/:id|Deleta um usuário pelo ID|200| SIM|


##Cars

| Metodo | Endpoint | Descrição | Status | Autenticação |Permissão|
|---|---|---|---|---|---|---|
|`GET`|/car|Listar todos carros|200| SIM | ADM / Colab|
|`GET`|/car/:id|Lista um usuário pelo ID|200| SIM| ADM / Colab|
|`POST`|/car|Cria um usuário|201| NÃO| ADM / Colab|
|`PUT`|/car/:id|Atualiza um usuário pelo ID|200| SIM| ADM |
|`DELETE`|/car/:id|Deleta um usuário pelo ID|200| SIM| ADM |

##Authenticate


| Metodo | Endpoint | Descrição | Status | Autenticação| 
|---|---|---|---|---|---|
|`POST`|/auth|Autentica o usuário|200| NÃO |
|`POST`|/auth/recovert|Envia a pergunta secreta cadastrada do usuario|200| NÃO|
|`POST`|/auth/reset|Atualiza a nova senha|201| NÃO| 


