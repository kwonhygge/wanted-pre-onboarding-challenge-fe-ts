# wanted-pre-onboarding-challenge-fe-ts

## 설명
- typescript로 todoList 모델링하기 

### 과제 3
- [jaypedia](https://github.com/jaypedia/wanted-pre-onboarding-challenge-fe-2) 님의 모델링을 바탕으로 설계하였습니다.

- 이슈 및 궁금한 점
  - id를 대조해서 필터링하는 부분에서 아래 ts 에러가 났다. 시간 관계상 해결하지 못했는데 4차 과제 전에 해결해야겠다.
  
  ```TS2367: This comparison appears to be unintentional because the types 'number' and 'Pick ' have no overlap.```

  - `updateTags` 함수에서 파라미터로 tags가 들어왔는데 클라이언트에서 tags를 아예 가공해서 보내주는 건지 궁금했다. 서버에서 바뀔 태그만 받아 가공해주는 경우만 본 것 같은데 각각의 방법에 어떤 장단점이 있는지 궁금했다.

## typedoc으로 생성한 docs 페이지
[바로가기](https://kwonhygge.github.io/wanted-pre-onboarding-challenge-fe-ts/docs/modules.html)

## 챌린지 과제 가이드

>요구 사항을 구현하지 않고 설계만합니다.

- Todo 앱을 Interface로 설계하고 모델링하는 챌린지 과제입니다.
- 모든 요구사항은 선언을 기반으로 수행합니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 Requirements

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 TypeScript's Interface로 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
    - 함수 및 클래스의 내부는 구현하지 않습니다.
- **Interface만을 따라 작성한 코드가 동작하는 애플리케이션이 되도록 유도하셔야합니다.**

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.


#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```