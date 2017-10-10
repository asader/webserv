ssh root@146.185.165.184 '
  cd /root/webserv;
  git pull;
  npm install;
  forever stop index.js
  forever start index.js
'