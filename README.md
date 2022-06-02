# 나의 라이딩 메이트, RIKEY 🚲

> RIDE + BIKE = RIKEY 💚
> 
> 삼성청년SW아카데미 2학기 특화 프로젝트 우수상 수상

![rikey_logo](README.assets/rikey_logo.png)


## 프로젝트 소개

* 프로젝트명: RIKEY
* 개발 기간: 2022.02.21 ~ 2022.04.08
* 서비스 특징 및 주요기능
  - 오늘의 날씨, 라이딩 안전 수칙 등의 정보 제공
  - 내 위치를 기준으로 가까운 자전거 코스 추천
  - 주행 시간, 주행 거리, 소모 칼로리 등의 주행 정보 관리 기능
  - 실시간 주변 편의시설 정보 제공
  - 라이더 모집, 자유 게시판 등의 커뮤니티 서비스 제공
* 주요 기술
  - React Native
  - Spring boot
  - JPA
  - Rest API
  - MySQL




## 목차 

[**1.팀소개**](#1-팀소개-)

[**2.프로젝트 소개**](#2-프로젝트-소개-)

   - 홈
   - 프로필
   - 주행
   - 코스 추천
   - 주변 편의시설
   - 커뮤니티

   

[**3.프로젝트 명세**](#3-프로젝트-명세-)

   - 아키텍처
   - ERD
   - UI 프토로타입
   - API 명세서
   - 요구사항 명세서   

<div id="1"></div>

## 1. 팀소개 🙌

> 팀명 : 한사랑개발회🤎

<table>
  <tr>
    <td align="center"><a href="https://github.com/khyunchoi"><img src="https://avatars.githubusercontent.com/u/77478732?v=4" width="100px;" alt=""/><br /><sub><b>최강현<br>Back-end, 팀장</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/kimhyeongjun95"><img src="https://avatars.githubusercontent.com/u/86656921?v=4" width="100px;" alt=""/><br /><sub><b>김형준<br>Front-end</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/hongjungkimm"><img src="https://avatars.githubusercontent.com/u/87457152?v=4" width="100px;" alt=""/><br /><sub><b>김홍중<br>Back-end</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/yeongsummer"><img src="https://avatars.githubusercontent.com/u/87457128?v=4" width="100px;" alt=""/><br /><sub><b>장영하<br>Back-end</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/DongKyunJung"><img src="https://avatars.githubusercontent.com/u/87457171?v=4" width="100px;" alt=""/><br /><sub><b>정동균<br>Front-end</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/woosteelz"><img src="https://avatars.githubusercontent.com/u/48507475?v=4" width="100px;" alt=""/><br /><sub><b>정우철<br>Front-end</b></sub></a><br /></td>
    </tr>
</table>





### 🧏‍♂️ Front-end

- 김형준: 네이버 소셜 로그인, 회원가입, Stack/Tab Navigation 중첩 구현, 홈화면, 사용자 정보 상태관리, 실시간 GPS를 통한 날씨 API 사용, 프로필 구현, 개인정보 변경 페이지 구현
- 정동균: 커뮤니티 보드 조회, 카테고리별 보드제공, Article CRUD, Comment CRUD, 게시글 검색, 좋아요 로직 구현
- 정우철: 주행정보 기록, 편의시설 위치 표시, 주행 정보 기반 칼로리 산출, 하버사인 공식을 사용한 주행 거리 산출, 주변 자전거길 표시, 자전거길 리뷰

### 🧏‍♀️ Back-end

- 김홍중: DB설계, 코스 리뷰 및 커뮤니티 댓글 CRUD API 개발
- 장영하: 하버사인 공식을 이용한 실시간 편의시설 검색 기능, 게시판 CRUD API 개발, Nginx를 이용한 이미지 저장 기능 구현
- 최강현: 사용자 인증 및 프로필 관련 API 개발, Hadoop을 이용한 자전거 편의시설 데이터 분산처리, Nginx를 이용한 EC2 서버 배포


<div id="2"></div>

## 2. 프로젝트 소개 🎁

>라이키와 함께 자전거 여행을 떠나보세요!
>
>내 주변 가까운 인기 자전거 코스를 추천받고, 코스를 추천할 수 있습니다! :)
>
>실시간 주행정보를 확인하고, 가까운곳의 화장실, 편의점, 자전거 보관소 등의 편의시설 검색도 가능합니다!
>
>라이더 모집 게시판을 통해 같이 자전거를 탈 라이더들을 모아 단체 라이딩도 즐겨보세요 😊



### 2.1 홈

![KakaoTalk_20220406_214343893](README.assets/KakaoTalk_20220406_214343893.gif)

- 오늘의 날씨 정보(기온, 습도, 풍속, 날씨)를 제공합니다.

- 매일 새로운 자전거 안전 수칙을 제공해 더 안전하고 올바른 라이딩 생활을 도와줍니다.

  

### 2.2 프로필

![KakaoTalk_20220406_214343893_01](README.assets/KakaoTalk_20220406_214343893_01.gif)

- 내 프로필사진과 소개말, 이름과 지역을 보여주고 `편집버튼`을 누르면 개인정보 수정이 가능합니다. 이 페이지에서 로그아웃과 탈퇴가 가능합니다.
- 지금까지의 라이딩 기록을 기반으로 누적 칼로리, 누적 거리, 누적 시간을 계산해서 보여줍니다.
- `내가 쓴 글`, `내가 쓴 댓글`, `내가 쓴 코스 후기`, `나의 주행 기록`을 볼 수 있습니다.



### 2.3 주행

![KakaoTalk_20220406_214343893_02](README.assets/KakaoTalk_20220406_214343893_02.gif)

![KakaoTalk_20220407_173143478](README.assets/KakaoTalk_20220407_173143478.gif)

- 네비게이션바의 지도 모양의 버튼을 누르면 현재 내 주변의 자전거 코스를 추천해줍니다.
- 코스를 누르면 해당 코스의 점수, 정보, 설명, 코스 후기들을 볼 수 있고 코스 후기 작성도 가능합니다.
- `주행 시작` 버튼을 누르면 주행 기록이 시작되고 내가 지나온 길을 트래킹해줍니다.



### 2.4 주변 편의시설

![KakaoTalk_20220406_214343893_03](README.assets/KakaoTalk_20220406_214343893_03.gif)

- 자전거보관소, 편의점, 공공화장실 중 원하는 편의시설을 선택하면 내 주변 반경 10km 이내에 있는 편의시설이 검색됩니다.

- 검색된 편의시설을 누르면 오픈시간, 자전거 공기주입기 여부 등의 상세 정보를 볼 수 있습니다.

  

### 2.5 커뮤니티

![KakaoTalk_20220406_214343893_04](README.assets/KakaoTalk_20220406_214343893_04.gif)

- 칼로리별, 누적거리별, 누적시간 별 나의 랭킹을 보여줍니다.
- 라이키 회원들이 쓴 게시글을 볼 수 있습니다. 가장 위의 3개의 게시글은 가장 조회수가 높은 게시글이 보여지게 됩니다.
- 필터를 걸면 라이더(같이 자전거 탈 사람) 모집, 자유 게시판으로 나누어서 볼 수 있습니다.
- 상단의 `돋보기` 버튼을 통해 해당 단어가 들어간 게시글을 검색할 수 있습니다.
- 게시글을 누르면 해당 게시글의 디테일 페이지로 이동합니다.
- 디테일 페이지에서는 `하트` 버튼을 통해 좋아요를 등록할 수 있고 댓글도 작성할 수 있습니다.
- 하단의 `연필` 버튼을 누르면 글작성 페이지로 이동합니다.
- 제목과 내용, 사진을 첨부해서 게시글을 작성할 수 있습니다.

<div id="3"></div>

## 3. 프로젝트 명세 🛠

### 3.1 아키텍처

![서비스_아키텍처](README.assets/서비스_아키텍처.png)



### 3.2 ERD

![erd](README.assets/erd.png)



### 3.3 UI 프로토타입

> [ UI Prototype](https://www.figma.com/file/YZbTWMzc69LeCoL98ZLeix/rikey?node-id=0%3A1)

![프로토타입](README.assets/프로토타입.png)



### 3.4 API 명세서

![API_명세서](https://user-images.githubusercontent.com/86656921/163210481-4bb82398-e5b8-4946-a23f-dc3c787e7e22.png)


### 3.5 요구사항 명세서

| 순번 | 분류           | 요구사항 코드 | 요구사항명              | 요구사항 설명                                                | 우선순위 |
| ---- | -------------- | ------------- | ----------------------- | ------------------------------------------------------------ | -------- |
| 1    | 메인 (F01)     | F01-1         | 메인 화면               | 선택한 지역의 날씨 정보(날씨, 기온, 습도, 풍속, 구름)과 자전거 안전 수칙을 보여 준다. | ⭐⭐⭐      |
| 2    | 회원 (F02)     | F02-1         | 회원가입                | 닉네임과 지역(전체 시)을 선택한다.                           | ⭐⭐⭐      |
| 3    |                | F02-2         | 로그인                  | 카카오 소셜 로그인을 통해 간편 로그인을 한다.                | ⭐⭐⭐      |
| 4    |                | F02-3         | 로그아웃                | 로그아웃을 한다.                                             | ⭐⭐⭐      |
| 5    |                | F02-4         | 프로필 조회(My)         | 이름, 닉네임, 소개, 지역, 주간 소비 칼로리/주행거리/주행시간, 내가 쓴 글/댓글/코스 후기를 보여 준다. | ⭐⭐⭐      |
| 6    |                | F02-5         | 프로필 조회(Other)      | 이름, 닉네임, 소개, 지역, 주간 소비 칼로리/주행거리/주행시간, 채팅 초대 버튼을 보여준다. | ⭐⭐⭐      |
| 7    |                | F02-6         | 주행기록 상세 조회      | 회당 소비 칼로리/주행거리/주행시간 목록을 보여준다.          | ⭐⭐       |
| 8    |                | F02-6         | 회원 정보 수정/탈퇴     | 프로필 이미지, 닉네임, 소개, 지역을 수정하거나 회원을 탈퇴한다. | ⭐⭐       |
| 9    | 커뮤니티 (F03) | F03-1         | 프로필 정보             | 주간 랭킹, 주간 소비 칼로리, 주행거리, 주행시간을 보여 준다. | ⭐⭐⭐      |
| 10   |                | F03-2         | 최근 게시글 조회        | 최근 올라온 게시글 리스트를 보여 준다.                       | ⭐⭐⭐      |
| 11   |                | F03-3         | 게시글 조회             | 전체/자유/모집 게시판을 선택하면 해당 전체 게시글을 보여 준다. | ⭐⭐⭐      |
| 12   |                | F03-4         | 게시글 상세 조회        | 게시글을 누르면 게시글 상세 페이지로 이동하고 상세 정보를 보여 준다. | ⭐⭐⭐      |
| 13   |                | F03-5         | 게시글 작성             | 제목, 내용, 사진을 포함해서 게시글을 작성한다.               | ⭐⭐⭐      |
| 14   |                | F03-6         | 게시글 수정/삭제        | 게시글을 작성한 작성자 만이 게시글을 수정/삭제할 수 있다.    | ⭐⭐⭐      |
| 15   |                | F03-7         | 댓글 작성               | 한 게시글에 댓글을 작성한다.                                 | ⭐⭐⭐      |
| 16   |                | F03-8         | 댓글 수정/삭제          | 댓글을 작성한 작성자 만이 댓글을 수정/삭제할 수 있다.        | ⭐⭐       |
| 17   |                | F03-9         | 좋아요                  | 한 게시글에 좋아요를 등록하거나 취소한다.                    | ⭐⭐       |
| 18   | 메신저 (F04)   | F04-1         | 메시지 리스트           | 전체 채팅 리스트를 보여준다.                                 | ⭐        |
| 19   |                | F04-2         | 1:1 채팅                | 1:1로 메시지를 주고 받을 수 있다.                            | ⭐        |
| 20   |                | F04-3         | 그룹 채팅               | 그룹으로 메시지를 주고 받을 수 있다.                         | ⭐        |
| 21   |                | F04-4         | 그룹 채팅 초대          | 그룹에 사용자를 초대 한다.                                   | ⭐        |
| 22   |                | F04-5         | 채팅 삭제               | 채팅을 나간다.                                               | ⭐        |
| 23   | 주행 (F05)     | F05-1         | 주행 정보 기록 시작     | 현재 위치에서 주행정보 기록을 시작한다.                      | ⭐⭐⭐      |
| 24   |                | F05-2         | 주행 정보 기록 일시정지 | 현재 위치에서 주행정보를 일시 정지한다.                      | ⭐⭐⭐      |
| 25   |                | F05-3         | 주행 정보 기록 재개     | 현재 위치에서 주행정보를 재개한다.                           | ⭐⭐⭐      |
| 26   |                | F05-4         | 주행 정보 저장          | 현재 위치에서 주행정보를 중단하고 저장한다. (누적 및 DB 저장) | ⭐⭐⭐      |
| 27   | 코스정보 (F06) | F06-1         | 코스 리스트             | 내 주변에 있는 추천 코스들을 리스트로 보여 준다.             | ⭐⭐⭐      |
| 28   |                | F06-2         | 코스 상세 정보          | 코스를 누르면 코스 상세 페이지로 이동하고 상세 정보와 후기를 보여 준다. | ⭐⭐⭐      |
| 29   | 코스후기 (F07) | F07-1         | 코스 후기 작성          | 별점과 함께 후기를 남긴다.                                   | ⭐⭐⭐      |
| 30   |                | F07-2         | 코스 후기 수정/삭제     | 후기를 작성한 작성자 만이 후기를 수정/삭제 할 수 있다.       | ⭐⭐       |
| 31   | 편의시설 (F08) | F08-1         | 공공화장실              | 공공 화장실의 정보를 제공한다.                               | ⭐⭐⭐      |
| 32   |                | F08-2         | 편의점                  | 편의점의 정보를 제공한다.                                    | ⭐⭐⭐      |
| 33   |                | F08-3         | 자전거보관소            | 자전거 보관소의 정보를 제공한다.                             | ⭐⭐⭐      |
| 34   |                | F08-4         | 설정                    | 설정에서 제공받을 정보를 선택해서 보여 준다.                 | ⭐⭐⭐      |
| 35   |                | F08-5         | 상세정보                | 클릭(선택)한 편의시설의 상세정보를 제공한다.                 | ⭐⭐⭐      |

