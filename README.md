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
            "email": "mv@gmail.com"
            "password": "121212"
           }

 + Response 200 (application/json)

    + Body

            {
             	"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2NhMjFjZDJiYzJmZjY3NGRmNTQwYiIsImlhdCI6MTY4MTc2MzM5NiwiZXhwIjoxNjgxNzY2OTk2fQ.yOieK7Jx5BDtqGpcXQkF2bbjot0xa0M9p4A-D- mjc_I"
             }

{"_type":"export","__export_format":4,"__export_date":"2023-04-17T19:48:08.655Z","__export_source":"insomnia.desktop.app:v2023.1.0","resources":[{"_id":"req_1f5f84ae0c7f4521b4590dc13e041fbf","parentId":"fld_c4b62be9a3c6428db304cafb38acd582","modified":1681757454541,"created":1681697211426,"url":"{{ _.baseURL }}/auth/recovery","name":"Recovery","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"email\":\"mv@gmail.com\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1681697211426,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_c4b62be9a3c6428db304cafb38acd582","parentId":"wrk_e4fca6d062b24ccf975182c60ef80962","modified":1681697351527,"created":1681697351527,"name":"Auth","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1681697351527,"_type":"request_group"},{"_id":"wrk_e4fca6d062b24ccf975182c60ef80962","parentId":null,"modified":1681581053734,"created":1681581053734,"name":"CarDealer_API","description":"","scope":"collection","_type":"workspace"},{"_id":"req_d0ca45a4bcba4b739df5f3ce7110deef","parentId":"fld_c4b62be9a3c6428db304cafb38acd582","modified":1681757461887,"created":1681752891420,"url":"{{ _.baseURL }}/auth/reset","name":"ResetPass","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"email\": \"mv@gmail.com\",\n\t\"answer\":\"Black\",\n\t\"password\":\"121212\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1681697211401,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_c080ccdc501e4e3bb269776a5fa5611a","parentId":"fld_c4b62be9a3c6428db304cafb38acd582","modified":1681757711265,"created":1681688056384,"url":"{{ _.baseURL }}/auth","name":"LoginUser","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"email\":\"mv@gmail.com\",\n\t\"password\":\"121212\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1681697211376,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_204db1728741401ab7e46650453cc477","parentId":"fld_f90341d3d7b840f1b7be16dee52ae818","modified":1681690677124,"created":1681682958270,"url":"{{ _.baseURL }}/car/643c7a2c3db8565fbf986dd8","name":"DeleteCar","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1681682958270,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_f90341d3d7b840f1b7be16dee52ae818","parentId":"wrk_e4fca6d062b24ccf975182c60ef80962","modified":1681583011026,"created":1681583003760,"name":"Car","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1681583003760,"_type":"request_group"},{"_id":"req_2a45b4f963c04ce393469c572b2bb6fe","parentId":"fld_f90341d3d7b840f1b7be16dee52ae818","modified":1681690670203,"created":1681681378323,"url":"{{ _.baseURL }}/car/643c7a2c3db8565fbf986dd8","name":"UpdateCar","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n \"brand\": \"Renault\",\n\t\"buyValue\": 23000\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1681681378323,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_c606813748d64bd48a308e55e43b12cc","parentId":"fld_f90341d3d7b840f1b7be16dee52ae818","modified":1681681260814,"created":1681583196456,"url":"{{ _.baseURL }}/car","name":"GetAll","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1681583196456,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_39ade1c060e4466aaa0224df7b33d26c","parentId":"fld_f90341d3d7b840f1b7be16dee52ae818","modified":1681583193157,"created":1681583043991,"url":"{{ _.baseURL }}/car","name":"CreateCar","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"plate\": \"OAK-1053\",\n  \"model\": \"Sandero\",\n  \"year\": 2014,\n  \"brand\": \"Renaul\",\n  \"color\": \"Prata\",\n  \"buyValue\": 20000\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1681583043991,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_39296b97b893454b8369e3de825dd811","parentId":"fld_f90341d3d7b840f1b7be16dee52ae818","modified":1681685491615,"created":1681583014543,"url":"{{ _.baseURL }}/car/643c7a2c3db8565fbf986dd8","name":"GetByID","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1681583041361,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_a59dc738bbea4085b761c7dcc794d8be","parentId":"fld_701d518bdc784c4bafa117b01f8d4ecf","modified":1681750076118,"created":1681683752900,"url":"{{ _.baseURL }}/user/643cac8190d2795e99d2553e","name":"DeleteUser","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2NhMjFjZDJiYzJmZjY3NGRmNTQwYiIsImlhdCI6MTY4MTc1MDAzNywiZXhwIjoxNjgxNzUzNjM3fQ.ehlSjopuGKQ7kcreyAKnv4xsiBN9WLmjAT8snHsKCts"},"metaSortKey":-1681683752900,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_701d518bdc784c4bafa117b01f8d4ecf","parentId":"wrk_e4fca6d062b24ccf975182c60ef80962","modified":1681581745600,"created":1681581745600,"name":"User","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1681581745600,"_type":"request_group"},{"_id":"req_05951e09d5d94f09a34729b0970069d2","parentId":"fld_701d518bdc784c4bafa117b01f8d4ecf","modified":1681756178064,"created":1681581108124,"url":"{{ _.baseURL }}/user","name":"GetAll","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2Q3ZDQ3MGNhZDNlMTNkOGJmNDhlNSIsImlhdCI6MTY4MTc1NTg3MSwiZXhwIjoxNjgxNzU5NDcxfQ.tYu1tN7Gpab8dK_Lo9lXnTqK0Oo1u60nkiOxZwtpvDY"},"metaSortKey":-1681581108124,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_ee085f585fcd4b9bbc63219b46eed90c","parentId":"fld_701d518bdc784c4bafa117b01f8d4ecf","modified":1681694716764,"created":1681582696130,"url":"{{ _.baseURL }}/user/643c98496fdc1cf697479393","name":"GetUserByID","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1681581108099,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_e7adc92079cd4f77a77f8a992f5bdcc8","parentId":"fld_701d518bdc784c4bafa117b01f8d4ecf","modified":1681697918159,"created":1681582485035,"url":"{{ _.baseURL }}/user","name":"Create User","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"name\": \"Felipe Botero\",\n  \"email\": \"fb@gmail.com\",\n  \"CPF\": \"13sd1asd45as64\",\n\t\"question\":\"Qual nome do meu pet?\",\n\t\"answer\":\"Godofredo\",\n  \"password\": \"123456\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{},"metaSortKey":-1681581108074,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_8e1feab8c1964d0d9b4c8ce3067743f7","parentId":"fld_701d518bdc784c4bafa117b01f8d4ecf","modified":1681757443256,"created":1681682853349,"url":"{{ _.baseURL }}/user/643ca21cd2bc2ff674df540b","name":"UpdateUser","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\"question\": \"Qual nome do meu pet?\",\n\t\t\"answer\": \"Black\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"}],"authentication":{"type":"bearer","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2NhMjFjZDJiYzJmZjY3NGRmNTQwYiIsImlhdCI6MTY4MTc1NjgxMSwiZXhwIjoxNjgxNzYwNDExfQ.H06eFvHKgdWfVTqer7w7k1JpKIFTsgjC8Br5isTRA2Q"},"metaSortKey":-1681581108024,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_067d2671701b0c5c84cc9cc09355dfb112904f34","parentId":"wrk_e4fca6d062b24ccf975182c60ef80962","modified":1681581053740,"created":1681581053740,"name":"Base Environment","data":{},"dataPropertyOrder":null,"color":null,"isPrivate":false,"metaSortKey":1681581053740,"_type":"environment"},{"_id":"jar_067d2671701b0c5c84cc9cc09355dfb112904f34","parentId":"wrk_e4fca6d062b24ccf975182c60ef80962","modified":1681581053742,"created":1681581053742,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_3e00014d2dad400fad000528f63e95f5","parentId":"wrk_e4fca6d062b24ccf975182c60ef80962","modified":1681581053735,"created":1681581053735,"fileName":"CarDealer_API","contents":"","contentType":"yaml","_type":"api_spec"},{"_id":"env_22a9b69a727b4960b306c2237771efb7","parentId":"env_067d2671701b0c5c84cc9cc09355dfb112904f34","modified":1681581105956,"created":1681581063412,"name":"BaseURL","data":{"baseURL":"localhost:3000"},"dataPropertyOrder":{"&":["baseURL"]},"color":null,"isPrivate":false,"metaSortKey":1681581063412,"_type":"environment"}]}
