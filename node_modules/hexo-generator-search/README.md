# hexo-generator-search

[![npm](https://img.shields.io/npm/v/hexo-generator-search.svg)](https://www.npmjs.com/package/hexo-generator-search)
[![npm](https://img.shields.io/npm/dm/hexo-generator-search.svg)](https://www.npmjs.com/package/hexo-generator-search)

Generate search data for Hexo 3.0. This plugin is used for generating a search index file, which contains all the neccessary data of your articles that you can use to write a local search engine for your blog. Supports both XML and JSON format output.

- [Demo](http://www.hahack.com/hexo-theme-freemind-blog/) - try out the search engine in this site.
- [Demo JSON output](https://github.com/PaicHyperionDev/hexo-generator-search/blob/master/demo_output/search.json)
- [Demo XML output](https://github.com/PaicHyperionDev/hexo-generator-search/blob/master/demo_output/search.xml)

## Install

``` bash
$ npm install hexo-generator-search --save
```

## Options

You can configure this plugin in your root `_config.yml`.

``` yaml
search:
  path: search.xml
  field: post
  content: true
```

- **path** - file path. By default is `search.xml` . If the file extension is `.json`, the output format will be JSON. Otherwise XML format file will be exported.
- **field** - the search scope you want to search, you can chose:
  * **post** (Default) - will only covers all the posts of your blog.
  * **page** - will only covers all the pages of your blog.
  * **all** - will covers all the posts and pages of your blog.
- **content** - whether contains the whole content of each article. If `false`, the generated results only cover title and other meta info without mainbody. By default is `true`.

## Exclude indexing

To exclude a certain post or page from being indexed, you can simply insert `indexing: false` setting at the top of its front-matter, *e.g.*:

```
title: "Code Highlight"
date: "2014-03-15 20:17:16"
tags: highlight
categories: Demo
description: "A collection of Hello World applications from helloworld.org."
toc: true
indexing: false
---
```

Then the generated result will not contain this post or page.

## FAQ

### What's this plugin supposed to do? 

This plugin is used for generating a xml / json file from your Hexo blog that provides data for searching.

### Where's this file saved to?

After executing `hexo g` you will get the generated result at your public folder.

### How to use this plugin in my Hexo blog?

You have two choices:

* you don't want to write search engine by yourself. There are many themes that take use this plugin for local searching that works out of box. 
* you are familiar with Ajax and jQuery and would like to write your own search engine. You can implement one by yourself according to the example theme I give. Read the [source code](https://github.com/wzpan/hexo-theme-freemind) of this theme. Generally there are 3 steps:
  1. write a [search view](https://github.com/wzpan/hexo-theme-freemind/blob/master/layout/_widget/search.ejs#L8). This is the place for displaying a search form and search results ;
  2. write a [search script](https://github.com/wzpan/hexo-theme-freemind/blob/master/source/js/search.js). This script tells the browser how to grab search data and filter out contents what we're searching;
  3. tell hexo to [connect the above two part](https://github.com/wzpan/hexo-theme-freemind/blob/master/layout/_partial/after_footer.ejs#L22).
