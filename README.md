# htmlToPdf-test

### Purpose

- CSS 스타일을 유지
  > 현재 issue: `background-color` CSS 속성이 적용되지 않음
  - inline-style 사용해서 테스트
    - 현재는 inline으로 해도 bg-color가 먹히지 않았음 / _추가 테스트 요망_
- image load 될 것
  - `{ waitUntil: 'networkidle2' }` 옵션 사용
- pdf 페이지 끊기는 시점 컨트롤
  - 현재는 A4이나, 하나의 페이지로 쭉 이어지게 할 것

<br/>

### Converting 실행 명령어

```
node -e "require('./convertUrlToPDF')()"
```
