# 와이라노사우르스

![main](/images/readme/main.png)

## 프로젝트 진행 기간 📅

2023.08.21 ~ 2023.10.06

## 프로젝트 소개  🖥️

공룡을 좋아하는 아이들을 위해 공룡 정보를 제공해주고, 고성공룡엑스포 소개 및 공룡엑스포의 접근성을 높이기 위한 고성 관광정보를 제공해주는 웹 서비스

## 팀원 👥

|   **Name**   | 최연재👑 |  곽보선  |  김예슬  | 박슬빈  |  손민영  |  신종혁  |
| :----------: | :------: | :------: | :------: | :-----: | :------: | :------: |
| **Position** | BackEnd  | FrontEnd | FrontEnd | BackEnd | FrontEnd | FrontEnd |

## 기술스택 🛠️

### 사용한 기술 스택 🔨

| React(v18.2.0) | TypeScript(v5.1.6) | Node(v16.20.1) | styled-component(v6.0.8) |          zustand(v4.4.1)           |
| :------------: | :----------------: | :------------: | :----------------------: | :--------------------------------: |
|    ![react]    |       ![ts]        |    ![node]     |          ![sc]           | ![zustand](/images/stack/bear.jpg) |

| Spring Boot(v3.1.1) | MySQL(v8.0) | Elastic search(v) |
| :-----------------: | :---------: | :---------------: |
|      ![spring]      |  ![mysql]   |    ![elastic]     |

<br />

### 개발 환경 💻

| Eslint(v8.0.1) | Prettier(v3.0.3) |
| :------------: | :--------------: |
|   ![eslint]    |   ![prettier]    |

[react]: /images/stack/react.svg
[node]: /images/stack/node.svg
[ts]: /images/stack/typescript.svg
[eslint]: /images/stack/eslint.svg
[prettier]: /images/stack/prettier-color.svg
[sc]: /images/stack/styledcomponents-color.svg
[spring]: /images/stack/springboot-color.svg
[mysql]: /images/stack/mysql-color.svg
[elastic]: /images/stack/elasticsearch-color.svg

## 시연 시나리오 📑

### 🦕 와이라노사우르스

공룡 이론 페이지


<table width="100%">
  <tr>
    <td  width="15%"> 공룡 이론 페이지 </td>
    <td width="50%"><img src="/images/readme/dino.png" /></td>
    <td width="35%">
      <ul>
        <li>공룡 상세 정보 보여주기</li>
        <li>공룡 위치별 분포도 보여주기</li>
        <li>공룡 검색 기능 구현</li>
      </ul>
    </td>
  </tr>
   <tr>
    <td  width="15%">  </td>
    <td width="50%"><img src="/images/readme/tts.png" /></td>
    <td width="35%">
      <ul>
        <li>한국의 공룡 정보 보여주기</li>
        <li>CLOVA api를 이용한 `TTS` 도입 ( 재생 버튼 누르면 사운드 재생)</li>
      </ul>
    </td>
  </tr>
     <tr>
    <td  width="15%">고성 공룡 엑스포 페이지</td>
    <td width="50%"><img src="/images/readme/expo.png" /></td>
    <td width="35%">
      <ul>
        <li>고성공룡엑스포에 대한 기본 정보 제공</li>
        <li>css animation을 통해 `동적인 페이지` 제공</li>
      </ul>
    </td>
  </tr>
   <tr>
    <td  width="15%">관리자 페이지</td>
    <td width="50%"><img src="/images/readme/admin.png" /></td>
    <td width="35%">
      <ul>
        <li> 관람요소를 실시간으로 추가하거나 삭제</li>
        <li>다양한 행사나 관광지에서도 적용 가능하도록 설계</li>
      </ul>
    </td>
  </tr>
   <tr>
    <td  width="15%"> 고성관광 페이지 </td>
    <td width="50%"><img src="/images/readme/gosung.png" /></td>
    <td width="35%">
      <ul>
        <li> 고성 공룡엑스포 방문객을 위한 `고성 맛집`, `숙박`, `여행지` 추천</li>
      </ul>
    </td>
  </tr>
</table>

<table width="50%">
  <tr>
    <td width="10%">고성 모바일 페이지</td>
    <td width="10%">엑스포 모바일 페이지</td>

  </tr>
  <tr>
    <td width="10%"> <img src="/images/readme/gosung_mobile.png" width="50%" /></td>
    <td width="10%"> <img src="/images/readme/expo_mobile.png" width="50%" /></td>
  </tr>
  
</table>

## 백엔드 기술

### 아키텍처🧱

![systemarchitecture](/images/readme/systemarchitecture.png)

### ElasticSearch ,Kibana

동물데이터의 개수가 약 130만개 였습니다. 이를 MySql 에 저장한 후 조회를 했을 경우 1300ms 라는 시간이 걸렸습니다.
<br>
요청이 자주 들어오는 데이터이기 때문에 이러한 시간은 사용자에게 있어서 매우 긴 시간이라고 생각하였습니다.
<br>
해당 데이터눈 추가되거나 변하지 않고 검색을 하기 위해 사용했기 때문에이것을 ElasticSearch에 저장하였고 이를 통해 약 16배의 성능 개선을 이룰수있었습니다.
<br>
Kibana를 사용하여 엘라스틱서치에 저장된 데이터들을 시각화하였습니다.

### Grafana ,Prometheus

![grapro]
<br>
시스템 모니터링을 위해 그라파나와 프로메테우스 를 사용하였습니다.

### 로드밸런싱

서비스 특성상 같은시간대에 서비스를 이용하는 이용자 수가 많을것이라고 생각하였습니다.
<br>
Artillery를 사용하여 부하테스트를 진행해보았고
<br>
10분간 초당 600명 사용자를 기준으로 테스트를 진행해본 결과

- 최소 : 0.019초
- 최대 : 6.918초
- 평균 : 1.380초
- 상위 95프로 : 8.54초
- 상위 99프로 : 3.984초

<br>

위와 같은 결과가 나왔습니다.
<br>
이를 기준으로 사용자에게 매우 느린 응답속도가 나왔었습니다.
<br>
L7 로드밸런서인 nginx upstream 을 사용하였고 스프링부트 서버를 3개로 증설하였고

- 최소 : 0.017초
- 최대 : 2.92초
- 평균 : 0.102초
- 상위 95프로 : 0.854초
- 상위 99프로 : 1.465초

<br>

위와 같은 결과가 나오게 되었고 평균적으로 약 13배의 성능 개선을 이룰수 있었습니다.

### N+1 문제 ,QueryDsl

맛집 장소를 조회할 때 N:M 관계가 2개가 존재하였습니다.
JPA로 조회를 할 시에 ORM의 대표적인 문제 N+1 문제가 생겼고 QueryDsl을 사용하여 해결을 하려고 하였습니다.
<br>
QueryDsl 의 fetchjoin을 사용하였지만 이는 여러개의 N:M을 한번에 불러올 수 없었고 조인하는 데이터가 많은 쪽만 fetchjoin을 사용하고 batch size를 조정하여 다른 한개의 N:M관계의 데이터를 가져오도록 하여 N+1 문제를 해결하였습니다.

[grapro]: /images/readme/grapro.png
[admin12]: /images/readme/admin.png
