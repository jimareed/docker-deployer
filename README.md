# docker-deployer

Simple webhook listener which deploys a docker container to a host when a new build is available.  Follow **host setup** instructions to install the listener on the host server.  Follow **docker hub setup** instructions to configure the docker repository to call the listener when a build is ready.

![Alt text](/doc/overview.png "Docker Deployer Overview")


## host setup

```
sudo -i
yum install git
yum install -y docker ; service docker start
docker login (specify docker hub login info)
curl -sL https://rpm.nodesource.com/setup | bash -
yum install -y nodejs
npm install forever -g
cd /opt
git clone https://github.com/jimareed/docker-deployer
cd docker-deployer
npm install
forever start -o out.log listener.js
```

## docker hub setup

```
add webhook to docker automated build repository:
 http://{host}:9080/deploy/{hostport}/{containerport}
select Test to install an initial version of your docker image
```
