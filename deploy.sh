docker stop $2
docker rm $2
docker pull $1/$2
docker run --name $2 -d -p $3:$4 $1/$2
