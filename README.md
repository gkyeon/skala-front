# 🚀 하여니의 유니버스

JavaScript 심화 과제 — DOM 조작, 비동기 통신, 모듈 분리를 활용한 개인 Hub 페이지

## 📌 프로젝트 소개

내 프로필, 수업 시간표, 휴일 계획, 여행 기록, 회원가입 폼을 모아둔 개인 포트폴리오형 Hub 사이트입니다.
과제 요구사항(DOM 조작 → 비동기 호출 → 모듈 분리)을 단계별로 구현한 뒤, 실사용 가능한 수준까지 기능을 확장했습니다.

## 🖼️ 미리보기

![메인 화면](./screenshots/main.png)
![다크모드](./screenshots/darkmode.png)
![시간표](./screenshots/class.png)

🔗 [라이브 데모 바로가기](https://gkyeon.github.io/skala-01-front/html/index.html)

## 📁 폴더 구조
```
skala-front/
├── html/
│   ├── index.html
│   ├── myProfile.html
│   ├── myClass.html
│   ├── myHoliday.html
│   ├── myTrip.html
│   ├── signUp.html
│   └── signUpResult.html
├── css/
│   └── style.css        # 스타일
├── script/
│   ├── weatherAPI.js        # 날씨 데이터 fetch 전담
│   ├── realtimeInfo.js      # 날씨 화면 렌더링 전담 (weatherAPI.js import)
│   ├── darkMode.js        # 다크 모드 스타일 
│   ├── todayInfo.js        # 요일 정보(myClass.html)
│   ├── holidayCountdown.js        # 휴일 카운팅(myHolidya.html)
│   ├── upDown.js
│   ├── grade.js
│   └── bag.js
└── media/        # 미디어 모음
```


## ✅ 과제 요구사항 구현

| 단계 | 내용 | 파일 |
|---|---|---|
| DOM 조작 | `<select>` 도시 선택 → `innerHTML`로 좌표/정보 출력 | `index.html`, `realtimeInfo.js` |
| 비동기 호출 | `fetch()` + `async/await`로 Open-Meteo API 실시간 온도/습도 조회 | `weatherAPI.js` |
| 모듈 분리 | 데이터 로직(`weatherAPI.js`)과 화면 로직(`realtimeInfo.js`) 분리, `export`/`import` 사용 | `script/` 전체 |

## ⭐ 요구사항 이상으로 추가 구현한 것

과제 스펙에는 없지만, "진짜 쓰는 사이트"처럼 만들고 싶어서 직접 추가한 기능들입니다.

- **📍 Geolocation 기반 자동 날씨**: 도시를 선택하지 않아도 브라우저 위치 권한을 받아 내 현재 위치 날씨를 자동으로 표시
- **🌗 다크모드 토글**: CSS 커스텀 프로퍼티(`:root` 변수)를 통째로 스위칭, `localStorage`로 페이지 이동/새로고침 후에도 테마 유지
- **📅 실시간 날짜/요일 표시**: `Date` 객체로 오늘 날짜와 요일을 계산해 시간표 페이지에 동적 렌더링
- **⏳ 휴일 카운트다운**: 다음 주말까지 남은 일수를 자동 계산해 표시
- **🎮 미니게임 3종**: 업다운 게임 · 성적 계산기 · 왓츠 인 마이 백
- **📱 반응형 레이아웃**: `@media` 쿼리로 모바일 화면에서 flex 레이아웃 재배치

## 🎮 미니게임

| 게임 | 설명 |
|---|---|
| 업다운 게임 | 1~50 사이 숫자 맞추기, 정답까지 시도 횟수 카운트 |
| 성적 계산기 | 과목별 점수 입력 → 평균 계산 → 합격/불합격 판정 |
| 왓츠 인 마이 백 | 물품 이름/개수 입력 → 배열·객체로 저장 후 목록 출력 |

## 🎬 애니메이션

- **h1 등장 효과**: `fadeInDown` — 페이지 로드 시 위에서 아래로 부드럽게 등장
- **업데이트 공지 깜빡임**: `blink` — 메인 페이지 공지사항 텍스트 강조
- **휴일 카운트다운 강조**: `pulse` — 커지고 작아지며 색이 변하는 두근거림 효과
- **회원가입 fieldset**: `fadeInUp` — 폼 영역이 아래에서 위로 서서히 나타남
- **카드/버튼 hover**: `transform`, `box-shadow` 트랜지션으로 여행 카드, 네비게이션 메뉴, 게임 버튼에 입체감 있는 반응 효과

## 🛠️ 기술 스택

- HTML5 / CSS3 (Flexbox, Grid, 반응형 미디어쿼리, `@keyframes` 애니메이션)
- Vanilla JavaScript (ES Modules, `async/await`, DOM API, Geolocation API, Web Storage API)
- Open-Meteo API (무료 실시간 날씨 데이터)
- Git / GitHub

## 🎨 디자인 컨셉

핑크 · 라벤더 계열 팔레트, `Orbit` + `Grandiflora One` 폰트 조합으로 통일감 있는 UI 구성. CSS 변수 기반 설계라 다크모드 전환 시 색상 하드코딩 없이 대부분 자동으로 반영됨.

