# docker-deployer

Simple webhook listener which deploys a docker container to a host when a new build is available.  Follow **host setup** instructions to install the listener on the host server.  Follow **docker hub setup** instructions to configure the docker repository to call the listener when a build is ready.

## host setup

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
 http://{host}:9080/deploy/{hostport}/{containerport}
```
