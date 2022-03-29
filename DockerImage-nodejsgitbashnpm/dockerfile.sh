#!/bin/sh

apk update

apk upgrade

apk add bash

# Making the version fixed tobe able to rebuild the image with no
# surprises
apk add nodejs=12.15.0-r1

# Includes npx
apk add nodejs-npm

apk add git nano

# Don't end this script with exit otherwise the container stops
cat << EOF > /root/.bashrc
#!/bin/bash
alias ll="ls -al"
export PS1="[\u@\h \W]\\$ "
EOF

