#!/bin/bash
for arg in "$@"
do
    touch "ex"$arg
done
