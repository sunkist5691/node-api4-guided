const server = require("./api/server.js");

const port = process.env.PORT || 5000;
// evn 는 environment 의 약자이며, 
// process.evn 은 "현재 이 앱에게 주어진 환경에서 프로세싱하자" 라고 얘기하는 것과 같다.
// 만약에 이 앱을 Heroku 에서 프로세싱 하게 된다면,
// process.evn.PORT 가 Heroku 를 현재 enviroment 로 인지하고,
// Heroku 에서 자동으로 이 앱에게 지어준 PORT 를 받아서 process 하는 것이다.
// Heroku 가 아닌 다른 어느 곳에서도 가능하다.
// process.evn.PORT || 5000 은 
// "Heroku 에서 PORT 가 있다면 그것을 쓰고, 만약 주어진 PORT 가 없다면, 5000 을 쓰도록 하자"
// 라고 얘기하는 것과 같다.

// 그리고 "start" : "node index.js" 를 package.json 에 해줘야한다.
// 이유는 Heroku by default 로 npm start 을 하기 때문

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
