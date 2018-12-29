# virtual-pizza
order some pizza through kubernetes and virtual kubelet

[![Build Status](https://travis-ci.com/bnookala/virtual-pizza.svg?branch=master)](https://travis-ci.com/bnookala/virtual-pizza)

## build and run instructions

### build from source

1. install node
2. `npm install` in this project directory
3. `npm run build`

to run: `npm run start`

### build as a docker image

1. install a docker engine to your machine
2. follow steps 1-3 under `build from source`
3. `npm run build-container` - this tags the container image as `virtual-pizza`

to run the docker container: `docker run virtual-pizza`

## prior art

based on https://github.com/stuartleeks/virtual-kubelet-web-mock-nodejs

## endpoint analogies
* /createPod - create and place order
* /updatePod - not implemented
* /deletePod - not implemented
* /getPod - order details
* /getContainerLogs - not implemented
* /getPodStatus - status of order (order processing, out for delivery, etc.)
* /getPods - historical order statii
* /capacity - not implemented
* /nodeConditions - business hours
* /nodeAddresses	- address of business