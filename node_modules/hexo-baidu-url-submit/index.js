hexo.extend.generator.register('baidu_url_generator', require('./lib/generator'));
hexo.extend.deployer.register('baidu_url_submitter', require('./lib/submitter'));
hexo.extend.deployer.register('baidu_xz_url_submitter', require('./lib/xz_submitter'));