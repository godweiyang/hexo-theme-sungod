# Hexo-WordCount

[![npm](https://img.shields.io/npm/v/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount) [![npm](https://img.shields.io/npm/dm/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount) [![npm](https://img.shields.io/npm/dt/hexo-wordcount.svg?style=plastic)](https://npmjs.org/package/hexo-wordcount)

## Installation

```bash
yarn add hexo-wordcount
# or
npm i --save hexo-wordcount
```

## Usage

### 字数统计 WordCount


```js
wordcount(post.content)
```

### 阅读时长预计 Min2Read

```js
min2read(post.content)
```

设置阅读速度 Set Reading Speed:

```js
min2read(post.content, {cn: 300, en: 160})
// p.s. (v3.0.0 added)
```

### 总字数统计 TotalCount

```js
totalcount(site)
```

## Demo

### Swig

Post Count:

```swig
   <span class="post-count">{{ wordcount(post.content) }}</span>
```

Post Minutes to Read:

```swig
   <span class="post-count">{{ min2read(post.content) }}</span>
```

Total Count:

```swig
   <span class="post-count">{{ totalcount(site) }}</span>
```

### Ejs

Post Count:

```ejs
   <span class="post-count"><%= wordcount(post.content) %></span>
```

Post Minutes to Read:

```ejs
   <span class="post-count"><%= min2read(post.content) %></span>
```

Total Count:

```ejs
   <span class="post-count"><%= totalcount(site) %></span>
```

### Jade

Post Count:

```jade
   span.post-count= wordcount(post.content)
```

Post Minutes to Read:

```jade
    span.post-count= min2read(post.content)
```


Total Count:

```swig
   span.post-count= totalcount(site)
```


## LICENSE

MIT

Alipay Donation(通过支付宝捐赠)：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
