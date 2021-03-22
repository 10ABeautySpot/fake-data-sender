# fake-data-sender

### 假数据模拟生成器
- 基于 json schema& 自定义 业务规则快速生成随机的符合期望的假数据

### 如何运行
- 直接运行
```
node src/demo.js
```

- [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) 后台运行
```
pm2 start process.yml --env development
```

### 项目原理
- 使用 [yapi](https://hellosean1025.github.io/yapi/)（在定义 api 过程中）或其他工具 生成 json schema；
- 使用[json-schema-faker](https://github.com/json-schema-faker)将 json schema作为模板 生成 json数据；
- 自定义逻辑utils/transform.js 将生成的 json 数据进行拼装&重新组织；
- 使用node-fetch 以及 schedule，实现定时调用 api，将生成的模拟数据传给后端

### 配置逻辑
- demo.js 控制 schedule 的时间逻辑
- config/devices.js 控制生产模拟设备的 id 信息
- utils/transform.js 用于自定义的数据拼装规则的逻辑



