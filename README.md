# docker-deployer

simple webhook listener to deploy docker containers.  Still under development (not fully functional yet).

## setup

```
install node.js
npm install forever -g
git clone https://github.com/jimareed/docker-deployer
cd docker-deployer
npm install
forever -w start index.js
```

## docker hub setup

```
add webhook to docker automated build repository:
http://<host>:9080/deploy
```
