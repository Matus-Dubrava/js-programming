#!/bin/bash

if [[ ! "${JWT_KEY}" ]]; then
    echo "missing environment variable [JWT_KEY]"
else 
    kubectl create secret generic jwt-secret --from-literal=JWT_KEY=${JWT_KEY}
fi