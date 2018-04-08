#!/bin/bash

cd ./admin/dist && scp  -P 26244 -r ./*  root@45.78.47.11:/home/www/battery/admin/dist && cd ./front/dist && scp  -P 26244 -r ./*  root@45.78.47.11:/home/www/battery/front/dist