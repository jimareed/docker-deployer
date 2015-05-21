# docker-deployer

Simple webhook listener which will automatically deploy a docker container to {host} running on {port}.  **{host} setup** installs the listener on host server.  **docker hub setup** configures the docker repository to call the listener when a new build is available.

## {host} setup

```
install node.js
npm install forever -g
git clone https://github.com/jimareed/docker-deployer
cd docker-deployer
npm install
forever start -o out.log listener.js
```

## docker hub setup

```
add webhook to docker automated build repository:
 http://{host}:9080/deploy/{port}
```
