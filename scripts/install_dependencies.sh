#!/bin/bash

#stdout logs of this process executing can be found in /opt/codedeploy-agent/deployment-root/47../<deployment_id>/logs/scripts.log

# here we update the server and install node and npm
echo installing dependencies
sudo apt-get update
sudo apt install nginx -y
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo apt-get -y install npm

# check to make sure the symbolic link for nodejs node exists
echo checking for nodejs symlink
file="/usr/bin/node"
if [ -f $file ] && [ ! -L $file ] ; then
  echo "$file exists and is not a symlink"
  sudo ln -s /usr/bin/nodejs
else
  echo "$file exists and is already a symlink"
fi

# install the application using npm
# we need to traverse to where the application bundle is copied too.
echo installing application with npm
cd /var/www/
sudo npm install
