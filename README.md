### CloudBase 部署签到脚本

通过 CloudBase 运行签到脚本[script](https://github.com/NobyDa/Script)

#### 配置 Cookies

- 参考.env.example 配置 COOKIES 并重命名为.env
- COOKIES 获取方法参考 scripts 中的相关描述

#### 部署

_注意更新 cloudbaserc.json 中的 envId_

```bash
tcb
```

#### 部署 Triggers

配置 cloudbaserc.json 函数中的 config 项
[doc](https://cloud.tencent.com/document/product/876/32314)

```bash
tcb fn trigger create [functionName] [triggerName]
```

#### 如何更新脚本

- 增加导出 module.exports = ReadCookie
- ReadCookie 方法更新为 async
- ReadCookie 方法最后 all()修改为 await all();
- 修改 NodeSet 为/tmp 目录
