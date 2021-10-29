# 自动部署脚本

scp -r ./nginx_local.conf root@216.238.77.134:/etc/nginx/   # 复制源代码文件到服务器上
ssh root@216.238.77.134 "cd /etc/nginx; rm -f nginx.conf.back; mv nginx.conf nginx.conf.back; mv nginx_local.conf nginx.conf"  # 