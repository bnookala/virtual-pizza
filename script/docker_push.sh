#!/bin/bash
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker tag virtual-pizza $DOCKER_USERNAME/virtual-pizza
docker push $DOCKER_USERNAME/virtual-pizza