# Trabalho de Linguagens de programação 2

## Integrantes
Igor de Brito Coura 19.00165-7

Lucas Ribeiro Gonçalves RA: 19.00194-0

Luiz Felipe de Oliveira Rodrigues 19.00574-0

Mateus Silva Souza 19.01309-4

Vinicius Savrutsky Ivankovich 19.01014-0


## Instruções de Inicialização do projeto 

### Docker-Compose 

- Backend: Rodar o comando => docker-compose up -d --no-deps --build.
- Frontend: Rodar o comando no diretorio do projeto (haven-app ou haven-app-react) => npm start.

### Kubernets 

1 - Criar images docker
    - cd .\mss-authenticate\
    - docker build -t mss-auth .
    - cd ..\mss-user\
    - docker build -t mss-user .
    - cd ..\mss-haven\
    - docker build -t mss-haven .

2 - Comandos com KIND:
    - kind create cluster --name haven-cluster
    - kind load docker-image mss-user --name haven-cluster
    - kind load docker-image mss-haven --name haven-cluster
    - kind load docker-image mss-auth --name haven-cluster

3 - Comando Kubernets 
    - kubectl apply -f ./kubernetes/
    - kubectl port-forward service/mss-user-service 3100:8080
    - kubectl port-forward service/mss-authenticate-service 3200:8080
    - kubectl port-forward service/mss-haven-service 3300:8080

- Frontend: Rodar o comando no diretorio do projeto (haven-app ou haven-app-react) => npm start.