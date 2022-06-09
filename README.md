Bienvenid@s
Este proyecto se realizo con fines educativos respecto a la implementacion de la blockchain de CELO en un ambiente web creado en el 
framework de ruby on rails.
Su proposito principal es servir un sistema de login web3 el cual se conecta a Metamask y permitE de acuerdo a esto enviar un mensaje en un contrato " hola mundo " inteligente desplegado en la red de pruebas ALFAJORES de CELO

Direccion de Contrato desplegado en la red ALFAJORES
```bash
0x2594C4A55e2147d29c56797cFE81d54C22b38315
```



<a name="development"></a>
## Development build

Primer metodo para correr docker
```bash
docker-compose build
```
```bash
docker-compose up
```
En otra terminal
```bash
docker-compose run ruby_web3 rake db:create 
```
```bash
docker-compose run ruby_web3 rake db:migrate
```
para instalar gemas
```bash
docker-compose exec ruby_web3 bundle install
```
para crear migraciones
```bash
docker-compose exec ruby_web3 rails g migration
```

para finalizar los procesos usar
```bash
docker-compose down
```
correr consola de ruby_web3 en otra terminal
```bash
docker-compose exec ruby_web3 rails c
```



Segundo metodo


Development build
Build docker-compose using default yml and dev.yml:
- Build docker-compose using default yml and dev.yml:
```bash
docker-compose -f docker-compose.yml build
```
- Run services:
```bash
docker-compose -f docker-compose.yml  up -d
```

If it is a first time run, please go to: first time

Run services:
```bash
docker-compose -f docker-compose.yml up -d
```

Now you can see the site on visiting [http://localhost]

To stop services, use:

```bash
docker-compose down --remove-orphans
```
Stop services:

```bash
docker-compose down
```
First Run
If is the first run you must recreate the database using:

```bash
docker-compose run -d --rm rails-starter_ruby_1 rake db:setup
```
```bash
docker-compose run -d --rm rails-starter_ruby_1 rake db:migrate
```
```bash
docker exec -i rails-starter_db_1 bash -c "psql -U {_user} -d {_database} {_dbfile}"
```




### Recursos educativos: tutoriales, agradecimientos y creditos
Curso de Introducción a Celo con Solidity contratos inteligentes implementados sobre la blockchain de CELO. Patricio López Cerda Arquitecto Blockchain en Andes Blockchain https://platzi.com/cursos/solidity-celo/

La plantilla de DappWebConnectTempalte escrita por Rafael Santamaria [@rafasantama](https://github.com/rafasantama/DappWeb3ConnectTemplate)  

La plantilla de Ethereum-on-Rails escrita por [@q9f](https://github.com/q9f) se puede encontrar y usar en Github directamente: [github/q9f/ethereum-on-rails](https://github.com/q9f/ethereum-on-rails/)

Esta plantilla de aplicación de Rails implementa la lógica descrita por Amaury Martiny en [One-click Login with Blockchain: A MetaMask Tutorial](https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial)
