docker stop $2
docker rm $2
echo deploying $1 $2
docker pull $1/$2
docker run --name $2 -d -p $3:$3 $1/$2
