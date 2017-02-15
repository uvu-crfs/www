#!/bin/bash
ssh erik@stu-web4.uvu.edu 'cp ~/database.json /var/www/lib'
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR erik@stu-web4.uvu.edu:/var
