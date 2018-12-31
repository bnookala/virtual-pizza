#!/bin/bash
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

docker tag virtual-pizza $DOCKER_USERNAME/virtual-pizza
docker push $DOCKER_USERNAME/virtual-pizza