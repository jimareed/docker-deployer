# docker-deployer

simple webhook listener to deploy docker images.  Still under development (not functional yet).

## setup

```
install node.js
npm install forever -g
git clone https://github.com/jimareed/docker-deployer
cd docker-deployer
npm install
forever -w start index.js
```