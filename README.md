# 프리온보딩 프론트엔드 챌린지 (typescript)

## 프로젝트 목표
- 타입스크립트를 더욱 심도있게 공부하기
- 잘못된 코드 습관 고치기

## 프로젝트 기간
2.6 (월) - 2.19 (일)

## 과제 1
### 📝 Requirements
> 아래의 Todo 앱 요구사항을 참고하여

- [x] 필요한 데이터를 모두 모델링한다.
- [X] 사용되는 모든 함수를 선언부만 만든다.
- [X] 함수 및 클래스의 내부는 구현하지 않습니다.
- [X] JSDoc을 활용해 문서화한다.
- [X] GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

[repo](https://github.com/kwonhygge/wanted-pre-onboarding-challenge-fe-2)
[완성된 페이지 바로가기](https://kwonhygge.github.io/wanted-pre-onboarding-challenge-fe-2/docs/TodoList.html)

## 과제 2
- typescript로 todoList 모델링하기 

### 📝 Requirements

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 TypeScript's Interface로 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
    - 함수 및 클래스의 내부는 구현하지 않습니다.
- **Interface만을 따라 작성한 코드가 동작하는 애플리케이션이 되도록 유도하셔야합니다.**

[완성된 페이지 바로가기](https://kwonhygge.github.io/wanted-pre-onboarding-challenge-fe-ts/docs/modules.html)

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

## 과제 3

## 챌린지 과제 가이드

>타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에서 원하는 Interface 코드를 가져다 사용하세요
- 설계 & 모델링 된 Interface를 실제로 구현하는 챌린지 과제입니다.
- 모든 요구사항은 설계 & 모델링을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
  - 이미 1차~2차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.
- 완성한 과제의 저장소 링크를 **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에 제출해주세요.
- README.md를 꼭 작성해 주세요.
  - 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 필수 요구사항

>타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- 설계 & 모델링된 TypeScript's Interface를 따라 내부 구현부를 모두 작성한다.
- 동작되지 않더라도 설계 & 모델링을 지키는 것이 원칙이다.
  - 절대로 동작과 구현을 위해 설계 & 모델링 규칙을 어기지 않습니다.
- README.md 혹은 별도의 문서에 어떤 부분의 타입을 고치면 좋은지 피드백과 출처 링크를 남깁니다.

### 해결
[바로가기](https://github.com/kwonhygge/wanted-pre-onboarding-challenge-fe-ts/pull/1)

## 과제 4
### 챌린지 과제 가이드

https://typescript-exercises.github.io

>TypeScript Exercises

- TypeScript Exercises 에 도전합니다
- 해설까지 정리합니다.
- 직접 풀고 본인이 작성한 코드는 따로 저장해야합니다.
  - 서비스에 자체에서 저장 기능을 지원하지는 않습니다.
- 제출 방법
  - 단계 별로 해결한 코드와 해설을 포함하여 정리한 후 URL을 제출합니다.

### 📝 필수 요구사항

- 최소 ~9단계까지 푸는 것을 목표로 합니다.
- 왜? 타입에러가 발생했고 어떻게? 해결할 수 있었는지 별도의 문서에 저장합니다.

### 해결
[바로가기](https://github.com/kwonhygge/wanted-pre-onboarding-challenge-fe-ts/issues/2)
