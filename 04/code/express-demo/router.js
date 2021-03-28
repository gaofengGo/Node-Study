

// 路由其实就是一张表
// 这个表里面有具体的映射关系
// xxx 大厦
//   xxx 公司

app.get('/login', function(req, res) {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> hello login </h1>
</body>
</html>
`);
})