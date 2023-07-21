#!/bin/bash
if [ "TRAVIS_DEBUG_MODE" != true ]; then
  set -e
fi

# AWS CLI v2
if ! which aws > /dev/null; then
  echo "Downloading and installing awscliv2..."
  curl -fSL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "/tmp/aws.zip"
  unzip -qq -d /tmp /tmp/aws.zip
  sudo bash /tmp/aws/install -i /usr/local/aws-cli -b /usr/bin
fi
