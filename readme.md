# 清华大学网络学堂自动登录油猴脚本

> 油猴脚本 自动登录 thu 网络学堂

## 前言

网络学堂的登录权限过期非常快，每次使用都需要重新登入，浪费数秒钟时间。

GitHub的现有相关工作中大多已经失效。有的是通过后台定时刷新的方式来保持登录权限，造成资源浪费。本工作只是一个自动化的输入和点击脚本，仅在进入网页的时候发挥作用。

## 安装 Tampermonkey 

篡改猴(Tampermonkey) 是一款管理脚本的浏览器插件，其社区支持可以下载到很多功能丰富的插件。下载地址：[Tampermonkey](https://www.tampermonkey.net/)

比起爬虫或者自动化浏览器的技术，插件或油猴脚本的实现方式是在原有网站的页面中“增加”功能，可以无缝的融合到日常的使用当中。

## 添加脚本

复制[auto_login.js](./auto_login.js)中的代码，并在Tampermonkey中添加脚本。

## 使用

![](./source/img/2024-10-29-10-25-39.png)

- 在设置当中存储用户名和密码
- 通过左侧开关启用脚本

现在，它就可以帮助你自动输入和登录进入网络学堂了。