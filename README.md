# Boas vindas ao repositório frontend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de frontend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do frontend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/betrybe/sd-0x-stranger-things) em que os requisitos do projeto são destrinchados.

heroku create mayconfelipes-ft --buildpack mars/create-react-app
npm install dotenv

heroku config:set REACT_APP_HAWKINS_TIMEOUT="30000" REACT_APP_HAWKINS_URL="https://mayconfelipes-bk.herokuapp.com/" REACT_APP_UPSIDEDOWN_TIMEOUT="30000" REACT_APP_UPSIDEDOWN_URL="https://mayconfelipes-bd.herokuapp.com" --app mayconfelipes-ft

git checkout -b mayconfelipe-sd-09-stranger-things-frontend
git commit -am ""
git push heroku mayconfelipe-sd-09-stranger-things-frontend:master

git remote rename heroku development  
git commit -am ""
git push development mayconfelipe-sd-09-stranger-things-frontend:master

heroku create mayconfelipes-pd 

git remote rename heroku development  
git commit -am ""
git push heroku mayconfelipe-sd-09-stranger-things-frontend:master