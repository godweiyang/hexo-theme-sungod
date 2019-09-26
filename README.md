# 介绍
这是我修改自[hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)的个性化hexo博客模板，主要修改了一些个性化配置，为了方便大家直接搭建使用。

# 我的博客演示
[https://godweiyang.com](https://godweiyang.com)

# 搭建教程
[https://godweiyang.com/2018/04/13/hexo-blog/](https://godweiyang.com/2018/04/13/hexo-blog/)

# 使用方法
为了减小源码的体积，我将插件目录`node_modules`放在了`node_modules`分支下面，有需要的同学可以另行下载。另外添加水印需要的字体文件我也删除了，大家可以直接从电脑自带的字体库中拷贝。

* 首先运行`git clone git@github.com:godweiyang/hexo-matery-modified.git`将`master`分支下的所有文件下载到本地。
* 然后进入`hexo-matery-modified`文件夹下，运行`git checkout -b node_modules origin/node_modules`将`node_modules`分支下的所有文件下载到本地。
* 然后运行`git checkout master`、`git pull origin master`、`git merge node_modules`，这样两个分支里的文件就合并了。
* 解压`node_modules.zip`，然后删除`node_modules.zip`和`.git`文件夹。
* 还缺一个字体（为图片添加水印需要用到），去`C:\Windows\Fonts`下找到`STSong Regular`，复制到`hexo-matery-modified`文件夹下。

这样所有准备工作就做好啦，剩下的工作就直接去看我的教程[https://godweiyang.com/2018/04/13/hexo-blog/](https://godweiyang.com/2018/04/13/hexo-blog/)