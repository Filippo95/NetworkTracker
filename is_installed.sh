#!/bin/bash

dpkg -s $1 &> /dev/null
echo $?
