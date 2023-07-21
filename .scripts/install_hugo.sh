#!/bin/bash
if [ "TRAVIS_DEBUG_MODE" != true ]; then
  set -e
fi


wget https://github.com/gohugoio/hugo/releases/download/v0.55.6/hugo_0.55.6_Linux-64bit.deb -O /tmp/hugo.deb
sudo dpkg -i /tmp/hugo.deb
hugo version
