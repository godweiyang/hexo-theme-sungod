# hexo-permalink-pinyin

[![NPM version](https://img.shields.io/npm/v/hexo-permalink-pinyin.svg?style=flat)](https://npmjs.org/package/hexo-permalink-pinyin)

A Hexo plugin which convert Chinese title to transliterate permalink.

> `_posts/你今日饮咗未.md` => `http://your-site/ni-jin-ri-yin-zuo-wei/`

## Install

```bash
npm i hexo-permalink-pinyin --save
```

## Usage

Add configuration in `_config.yml`

```yaml
# https://github.com/viko16/hexo-permalink-pinyin
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```

## Options

```yaml
permalink_pinyin:
  enable: true             # Enable this plugin
  separator: '-'           # Separator of the slug, default: '-'
  exclude: /ignore_post/   # Regex for which post should skip
```

## License

MIT