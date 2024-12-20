# 使用 Node.js 18 作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 设置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 安装应用程序依赖
RUN npm install

# 如果你在生产环境中使用，可以使用以下命令代替
# RUN npm ci --only=production

# 复制应用程序的源代码到工作目录
COPY . .

# 暴露应用程序运行的端口（假设应用程序在 3000 端口上运行）
EXPOSE 8080

# 定义容器启动时要运行的命令
CMD ["npm", "start"]