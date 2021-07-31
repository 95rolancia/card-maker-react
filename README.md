# Business Card Maker

- 사진 + 정보를 입력 받아서 명함을 만들어주는 웹 애플리케이션

## 미리보기

![Animation](https://user-images.githubusercontent.com/41102293/127738007-3a2e6890-0bb2-46cf-9ec9-104fcad5cce1.gif)

## 기술 스택

- react
- firebase
- cloudineary

## 구조

    ├── public
    ├── src
    │   ├── common // 공통 CSS
    │   │   ├──  colors.css
    │   │   └──  size.css
    │   ├── components // 컴포넌트들
    │   │   ├──  button
    │   │   ├──  card
    │   │   ├──  card_addform
    │   │   └──  ...
    │   ├── service // 비즈니스 로직
    │   │   ├──  auth_service.js
    │   │   ├──  card_repository.js
    │   │   ├──  firebase.js
    │   │   └──  image_uploader.js
    │   ├── app.jsx
    │   ├── app.module.css
    │   ├── index.js
    │   └── index.module.css
    └── README.md

## Quick Start

```
$ git clone https://github.com/95rolancia/card-maker-react.git
$ cd card-maker-react
$ touch .env
```

### env template

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DB_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_CLOUDINARY_CLOUD_NAME=
REACT_APP_CLOUDINARY_UPLOAD_PRESET=
```

## 소감

컴포넌트와 컴포넌트 안에서 사용하는 로직을 분리하는 것이 유닛테스트와 디커플링에 좋다는 점을 배웠습니다. 그리고 Firebase를 처음 접하면서 백엔드를 구축하기 위한 부담이 있을 때 사용하면 좋을 것 같습니다.
