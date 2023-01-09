## 1. 命名规则

### 1.1 常量命名规则

> * 统一采用大写字符, 如: PORT
> * 使用下划线链接, 如: LOGGER_FILE_PATH

### 1.2 变量命名规则

> * 统一采用驼峰命名法, 如appId, studentName
> * 首字母小写

### 1.3 文件命名规则

> * 统一采用驼峰命名法
> * 如果此文件导出的是一个class静态工具类, 以及构造函数, 则此文件的首字母大写, 如FSUtil
> * 如果此文件导出的是一个普通函数或实例对象, 则此文件的首字母小写, 如loggerUtil

### 1.4 目录命名规则

> * 首字母统一小写
> * 使用短划线分割, 如koa-body

### 1.5 数据库命令规则

> * 库名统一使用`db_`开头, 如db_school
> * 表名统一使用`t_`开头, 如t_student
> * 字段名通过一使用`f_`开头, 如f_name

## 2. DataHub接口

* **这些接口都是属于内部接口, 需要传递token才能调用; **
* **采用的是resetful风格进行的数据的增删改查**
* **{tableName}是一个变量, 表示数据库表名**

> * GET: http://localhost:3000/mykoa/dbhub/{tableName}?f_age=23
> * POST: http://localhost:3000/mykoa/dbhub/{tableName}
> * PUT: http://localhost:3000/mykoa/dbhub/{tableName}/{id}
> * DELETE: http://localhost:3000/mykoa/dbhub/{tableName}/{id}

### 2.1 查询数据

* query参数是where条件, 可以不传; 


### 2.2 增加数据

`POST: http://localhost:3000/mykoa/dbhub/{tableName}`

#### 2.2.1 请求参数

* 单独插入一条数据, 传递一个对象即可, 对象的key需要和数据表的属性一一对应
* 批量插入数据需要传递一个数组, 数组中放的是对象

#### 2.2.2 响应参数

* 相应参数是一个数组, 数组中只有两个值, 这两个值都是整数类型
* 第一个值表示的是第一条插入数据表的主键ID
* 第二个值表示插入的记录数量

#### 2.2.3 请求示例

```javascript
// 批量插入的请求参数, 数组中的每一个对象的key都和t_student表中的属性一一对应
[
    {
        "f_name": "张三",
        "f_age": 23,
        "f_sex": "男"
    },
    {
        "f_name": "张三",
        "f_age": 23,
        "f_sex": "男"
    },
    {
        "f_name": "张三",
        "f_age": 23,
        "f_sex": "男"
    }
]

// 批量插入数据的相应参数
[1]
```





