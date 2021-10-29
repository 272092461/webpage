# 自动部署脚本

npm run build

tar -zcvf  ../deploy.tar.gz ./dist  # 打包源代码文件
scp -r ../deploy.tar.gz root@216.238.77.134:/usr/local/project   # 复制源代码文件到服务器上
ssh root@216.238.77.134 "cd /usr/local/project; tar -zxvf deploy.tar.gz; rm -rf deploy.back; mv deploy deploy.back; mv dist deploy"  # 