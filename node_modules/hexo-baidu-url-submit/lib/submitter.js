var pathFn = require('path');
var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(args) {
    var log = this.log;
    var config = this.config;

    var urlsPath = config.baidu_url_submit.path;
    var host = config.baidu_url_submit.host;
    var token = config.baidu_url_submit.token;

    var publicDir = this.public_dir;
    var baiduUrlsFile = pathFn.join(publicDir, 'baidu_urls.txt');
    var urls = fs.readFileSync(baiduUrlsFile, 'utf8');

    log.info("Submitting urls \n" + urls)

    var target = "http://data.zz.baidu.com/urls?site=" + host + "&token=" + token;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', target, false);
    xhr.setRequestHeader('Content-type', 'text/plain');
    xhr.onload = function () {
        console.log(this.responseText);
    };
    xhr.send(urls);
};