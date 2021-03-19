# 🔹웹툴🔹이미지 텍스트 편집기 ver2.1

>https://github.com/DragooCho/ImageTextEditor        
 p5js로 구현했던 **이미지 텍스트 편집기**를 순수 자바스크립트로 재구현 했습니다.

<br />

## 1. 제작 기간 & 참여 인원
- 2021년 3월 15일 ~ 3월 18일
- 개인 프로젝트

<br />

## 2. 사용 기술
#### `Front-end`
  - javascript 
  - HtML5canvas

<br />

## 3. 핵심 기능
이 서비스의 핵심 기능은 **자유로운 텍스트 조작 기능**입니다.  
사용자가 로컬 내에 가지고 있는 이미지 파일을 선택하고        
입력창에 원하는 글자를 원하는 위치에 입력하고 따라 붙인 후        
저장하는 버튼을 누르면 끝입니다.         
<br />
조작을 최대한 단순하게 구현했으며    
자연스러운 사용자 경험을 유도했습니다.

<br />
<br />

## 4. 부가 기능

텍스트의 `색상`, `사이즈`, `폰트타입`을 정해진 `옵션창` 및 `슬라이더`로 조절 가능합니다.

<br />
<br />


## 5. 구현하면서 힘들었던 점
       
- 완료한 캔버스 이미지를 파일로 저장하는 작업이 가장 까다로웠습니다.         
  홈페이지 내에서 작업한 편집이미지의 주소를 겍체화 시키고       
  임의로 만들어진 노드에 대입시켜야 하는 까다로운 로직밖에 없었습니다.         
- 다운로드 버튼에 addEventListener 의 속성을 쓰면 에러가 일어났기에
  대신 html의 onclick 속성을 이용했습니다. 원인은 여전히 알 수 없었습니다. 
- HTMLCanvasElement.toBlob()의 메서드는 로직이 간결했지만       
  이미지의 사이즈가 조금이라도 많으면 오류가 일어나기에 data URL를 조작하는 방법으로 바꾸었습니다.

<br />
<br />

## DEMO
https://dragoocho.github.io/VanillaJSImageTextEditor/

<br />
<br />

## ver 2.1 변경점

1. 세로로 보기에 최적화됐던 홈페이지 디자인을 가로 중심의 디자인으로 변경했습니다.
2. 라이브러리 없는 코드를 사용해 웹페이지를 좀 더 최적화했습니다.
3. 유지보수를 간편화를 위해 JS파일을 조작 기능별로 나누어 컴포넌트화 했습니다. 
4. 이미지 폭의 백분율 계산을 이용해 대입한 결과 이미지 파일을 업로드시에  
   원본의 비율을 유지하면서 가져올 수 있게 했습니다. 이로서 지나치게     
   큰 이미지파일을 불려올 때 매뉴조작박스가 구석으로 가거나 사라지는 현상을 방지했습니다. 
   ``` js
    img.onload = function () { 
      // 이미지 로딩이 완료되면 실행되는 함수
      imgX = img.width;
      imgY = img.height;

      img.height = 600 * ((imgY * 100) / imgX / 100); 
      img.width = 600; // 이미지 폭에 백분율 계산으로 리사이즈를 구현

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
   ```


5. font-display: swap 속성을 추가해 웹페이지 내에서   
   웹 폰트 로딩 여부와 관계없이 항상 텍스트가 보이게 했습니다. 
   ``` css
    @font-face {
      font-family: "Eulyoo1945-Regular";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Eulyoo1945-Regular.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;  // FOUT와 동일하게 작동시켜준다.
    }

 

 

