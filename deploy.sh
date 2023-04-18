# #!/usr/bin/env sh

# # 忽略错误
# set -e

# # 构建
# npm run docs:build

# # 进入待发布的目录
# cd docs/.vitepress/dist

# # 如果是发布到自定义域名
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # 如果部署到 https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# # git push -f git@github.com:liang14658fox/liang14658fox.github.io.git main 

# # git push -f git@github.com:liang14658foxgithub/liang14658foxgithub.github.io.git main 
# # git remote add origin https://github.com/liang14658foxgithub/docs.git 
# git remote rm origin
# git remote add origin https://github.com/liang14658fox/docs.git 
# git push origin main
# # git push -f https://gitee.com/liang14658fox/docs.git dict



# # 如果是部署到 https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git remote add origin git@github.com:liang14658fox/liang14658fox.github.io.git
git push -f git@github.com:liang14658fox/liang14658fox.github.io.git main
# git push -f git@github.com:liang14658fox/liang14658fox.github.io.git pagesbrahch
# git remote rm origin
# git remote add origin git@github.com:liang14658fox/liang14658fox.github.io.git
# git push -u origin main
cd -