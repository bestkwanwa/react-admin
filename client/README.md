# React 后台管理单页面应用
- axios、jsonp 前后端通信
- bizcharts、echarts 数据可视化
- react-draft-wysiwyg 所见即所得的富文本剪辑器
- antd UI框架

## 前后端通信
- axios再封装，使得请求结果更易处理
- 接口封装，节省大量代码及时间
- jsonp 请求天气接口

## 通用组件
- 头部
    - 请求天气
    - 格式化时间
    - 登录与登出
- 侧边栏
    - antd Menu组件
    - 根据权限显示菜单
- 外形像链接的按钮

## 页面
- 登录页
- 管理界面



## 分类管理
- 添加分类/修改分类
    - 模态框
- 查看子分类

## 商品管理
- 搜索
    - 受控，更新状态
    - 根据状态进行数据库查询
- 添加/修改/修改状态
- 详情展示

## 用户管理
- 创建/修改/删除

## 权限管理
- 设置菜单权限

## 数据可视化
- bizcharts、echarts 官网案例

## 富文本编辑器
- draft-js / react-draft-wysiwyg
- draftjs-to-html / html-to-draftjs

## 文件上传
- antd Upload组件

## 表单数据校验
- antd Form.create()()包装
    getFieldDecorator
    - 声明式校验
    - 自定义校验