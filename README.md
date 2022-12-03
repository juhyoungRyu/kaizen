<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

I Learning [Nest](https://github.com/nestjs/nest) framework with TypeScript

## Short Note

11/30 : Controller는 Express.js의 Router와 같다.<br/>데코레이터(@)를 활용해서 어떤 RestAPI인지 결정하고 함수를 짜는 방식으로 사용한다.
<br/>
<br/>
12/1 : Service는 로직을 짜는 공간이며 여기서 만든 함수를 Controller와 연결해서 사용한다.<br/>@Body는 POST에서 req같은 데이터를 받을 때 사용하는 데코레이터다.<br/>NestJS는 HttpExcept에서 NotFoundExcept같은 유용한 기능을 많이 제공한다.
<br/>
<br/>
12/2 : Pipe는 Express.js의 Middleware와 비슷한 역할을 수행한다.<br/>간단하게 유효성 검사부터 (진짜 대박)변수의 타입변환까지 해준다.. 최고..<br/>NestJS는 정말 엄청난 프레임워크인 것 같다...
<br/>
<br/>
12/3 : 처음으로 Testing을 해봤다.. Unit Testing은 함수 각각에서 일어날 수 있는 상황들을 테스트 해보고 정상적으로 작동하는지 확인하는 작업인데 정상작동부터 오류처리까지 함수가 제대로 작동하는지 문제가 터지기 전에 알아볼 수 있다니! 앞으로는 테스팅까지 고려해서 함수를 작성해야겠다..

## License

Nest is [MIT licensed](LICENSE).
