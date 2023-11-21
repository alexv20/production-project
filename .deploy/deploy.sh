cd ~/production-project
npm run build:prod

rm -rf /var/www/production-project/html
mv /root/production-project/build /var/www/production-project/html