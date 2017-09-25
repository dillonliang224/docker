# docker

docker介绍
docker下载安装及配置
docker常用命令
docker之Dockerfile
docker之node.js
docker之构建部署

## docker介绍
为什么容器技术讲主宰世界： http://blog.csdn.net/gaoyingju/article/details/49616295
docker入门： http://guide.daocloud.io/dcs/docker-9152673.html

## docker下载安装及配置

### 安装
在官网 https://www.docker.com/get-docker 下载docker安装包，然后直接打开安装就行。

在linux上使用的话:

使用 yum 从软件仓库安装 Docker：
```bash
yum install docker 
```

首先启动 Docker 的守护进程：
```bash
service docker start
```

如果想要 Docker 在系统启动时运行，执行：
```bash
chkconfig docker on 
```

### 配置
由于docker在国外，下载镜像资源比较麻烦，所以配置docker的源方便国内访问。


## docker常用命令

下载镜像
```bash
docker pull daocloud.io/dillonliang224/node-demo
```

启动
```bash
docker run ***
```

有时候，我们需要将本地的文件目录挂载到容器内的位置，同样是使用数据卷这一个特性，-v参数格式为：
```bash
docker run -it -v [host_dir]:[container_dir] 
```
host_dir 是主机的目录，container_dir 是容器的目录。


查看所有本地镜像
```bash
docker images
```

杀死所有正在运行的容器
```bash
docker kill $(docker ps -a -q)
```

删除所有已经停止的容器
```bash
docker rm $(docker ps -a -q)
```

通过镜像的id来删除指定镜像
```bash
docker rmi <image id>
```

删除所有镜像
```bash
docker rmi $(docker images -q)
```

## 工具
https://dashboard.daocloud.io

## 下载

```bash
docker pull daocloud.io/dillonliang224/node-demo
```