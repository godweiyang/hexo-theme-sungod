# Hexo Baidu URL Submit

![百度主动提交](http://hui-wang.info/2016/10/23/Hexo%E6%8F%92%E4%BB%B6%E4%B9%8B%E7%99%BE%E5%BA%A6%E4%B8%BB%E5%8A%A8%E6%8F%90%E4%BA%A4%E9%93%BE%E6%8E%A5/baidu_urls_submit.png)

[开发动机和使用文档](https://www.hui-wang.info/2016/10/23/Hexo插件之百度主动提交链接/)

# 熊掌号支持

## baidu_url_submit 配置
```
baidu_url_submit:
  count: 1000 ## 提交最新的一个链接
  host: alili.tech ## 在百度站长平台中注册的域名
  token: xxxxx ## 请注意这是您的秘钥， 所以请不要把博客源代码发布在公众仓库里!
  path: baidu_urls.txt ## 文本文档的地址， 新链接会保存在此文本文档里
  xz_appid: 'xxxxxx' ## 你的熊掌号 appid
  xz_token: 'xxxxxx' ## 你的熊掌号 token
  xz_count: 10 ## 从所有的提交的数据当中选取最新的10条,该数量跟你的熊掌号而定
```

## deploy 配置
```
deploy:
- type: baidu_url_submitter # 百度
- type: baidu_xz_url_submitter # 百度熊掌号
```