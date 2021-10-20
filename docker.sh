#!/bin/bash
NAME=abrikostrator/react-ts
docker build . -t ${NAME}
docker run -p 3002:3000 -d ${NAME}