# 🔹웹툴🔹 이미지 텍스트 편집기 ver 2.5

![Image Text Editor](https://github.com/DragooCho/TIL/blob/main/image/jjalbang18.gif?raw=true)

>https://github.com/DragooCho/ImageTextEditor        
 p5js로 구현했던 **이미지 텍스트 편집기**를 순수 자바스크립트로 재구현 했습니다.

<br />

## 1. 제작 기간 & 참여 인원 👨‍🔧🕑
- 2021년 3월 15일 ~ 3월 18일
- 개인 프로젝트

<br />

## 2. 사용 기술 📱
#### `Front-end`
  - **javascript** 
  - **HML5canvas**

<br />

## 3. 핵심 기능 📐
- 이 서비스의 핵심 기능은 **자유로운 텍스트 조작 기능**입니다.  
사용자가 로컬 내에 가지고 있는 이미지 파일을 선택하고        
입력창에 원하는 글자를 입력하고 원하는 위치에 **마우스클릭**으로 따라 붙인 후        
**이미지저장**하는 버튼을 누르면 끝입니다.  

- 텍스트를 입히는 조작과정을 최대한 **단순하게** 구현했으며    
**가볍고 간편한 사용자 경험**을 유도했습니다.

<br />
<br />

## 4. 부가 기능 🕹

- unsplash의 API를 이용해 페이지를 세로 열 때마다 배경화면이 변화합니다. 
  <br />
         
- 텍스트의 `색상`, `사이즈`, `폰트타입`을 정해진 `옵션창` 및 `슬라이더`로 조절 가능합니다.

<br />
<br />


## 5. 구현하면서 힘들었던 점 🤒 
       
- 완료한 캔버스 이미지를 파일로 저장하는 작업이 가장 까다로웠습니다.         
  홈페이지 내에서 작업한 편집이미지의 주소를 겍체화 시키고       
  임의로 만들어진 노드에 대입시켜야 하는 까다로운 로직밖에 없었습니다. 
  <br />

- 다운로드 버튼에 `addEventListener` 의 속성을 쓰면 에러가 일어났기에   
  대신 `html`의 `onclick` 속성을 이용했습니다. 원인은 여전히 알 수 없었습니다.
  <br />
         
- `HTMLCanvasElement.toBlob()`의 메서드는 로직이 간결했지만       
  이미지의 사이즈가 조금이라도 많으면 오류가 일어나기에 `data URL`를 조작하는 방법으로 바꾸었습니다.
  <br />
        
- 마우스포인터에 인쇄할 이미지를 미리 렌더링해 보여주는걸 구현 할려 했으나    
  그렇게 생성된 노드가 더 앞에 생성되며 인쇄를 막는 현상으로 인해 기능을 넣지 못한게 아쉬었습니다. 

<br />
<br />

## 6. DEMO 🚀 
https://dragoocho.github.io/VanillaJSImageTextEditor/

<br />
<br />

## 7. ver 2.5 개선된 점 🛠

1. 세로보기에 최적화한 홈페이지 디자인을 **가로 중심의 디자인**으로 변경했습니다.
   <br />
        
2. 라이브러리 없는 순수 자바스크립트로 구현해 웹페이지 성능을 좀 더 향상화 했습니다.
   <br />
        
3. 유지보수를 간편화를 위해 **JS파일과 css파일들을 조작 기능별로    
   나누어 컴포넌트화** 했습니다.    
   ```
   File Tree
  
   📂css
   ┣ 📜aside.css
   ┣ 📜fontFace.css
   ┣ 📜reset.css
   ┗ 📜styles.css
   📂js_Feature_set
   ┣ 📜canvasMain.js
   ┣ 📜canvasManualText.js
   ┣ 📜FontTypeSelecter.js
   ┣ 📜ImageUploadZone.js
   ┣ 📜ImgDownloader.js
   ┣ 📜text input window.js
   ┣ 📜TextColorSelecter.js
   ┗ 📜textSizeHandler.js 
    ```
<br />

4. 캠퍼스내의 메뉴얼 텍스트를 향후 변경하기 용의하게 하기 위해    
   X축, Y축, 문단, Text Size, Text Color 등등 대부분 전역변수화 시켰습니다.

   ```js
   const manualTextAllX = 30;
   const manualTextAllY = 0;
   const smallParagraphSpacing = -5;
   const manualTextSize = 20;
   const manualTextColor = "rgba(0, 0, 0)";
   
   const manualTextLine1 = "1. 문구에 텍스트를 작성하세요.";
   
   const manualTextLine2N1 = "2. 폰트타입, 글씨색, 글씨 크기 등의 옵션으로";
   const manualTextLine2N2 = "원하는 수치를 조절하세요.";
   
   const manualTextLine3N1 = "3. 텍스트를 붙일 곳에 마우스를 클릭하시고";
   const manualTextLine3N2 = "원하는 수치가 나오는지 테스트 해보세요.";
   
   const manualTextLine4 = "4. '파일선택' 버튼을 눌러 이미지를 업로드 하세요.";
   
   const manualTextLine5N1 = "5. 텍스트를 원하는 위치에 마우스 클릭하시고";
   const manualTextLine5N2 = "'이미지로 가져오기' 버튼을 눌러 저장하세요.";
   
   ctx.fillStyle = manualTextColor;
   ctx.font = `800 ${manualTextSize}px NOMAL`;
   
   ctx.fillText(manualTextLine1, 20 + manualTextAllX, 100 + manualTextAllY);
   
   ctx.fillText(manualTextLine2N1, 20 + manualTextAllX, 160 + manualTextAllY);
   ctx.fillText(
     manualTextLine2N2,
     46 + manualTextAllX,
     200 + manualTextAllY + smallParagraphSpacing
   );
   ctx.fillText(manualTextLine3N1, 20 + manualTextAllX, 260 + manualTextAllY);
   ctx.fillText(
     manualTextLine3N2,
     46 + manualTextAllX,
     300 + manualTextAllY + smallParagraphSpacing
   );
   ctx.fillText(manualTextLine4, 20 + manualTextAllX, 360 + manualTextAllY);
   ctx.fillText(manualTextLine5N1, 20 + manualTextAllX, 420 + manualTextAllY);
   ctx.fillText(
     manualTextLine5N2,
     40 + manualTextAllX,
     460 + manualTextAllY + smallParagraphSpacing
   );

   ``` 
<br />


5. 이미지 폭의 **백분율 계산**을 이용해 대입한 결과 이미지 파일을 업로드시에  
   **원본의 비율을 유지**하면서 가져올 수 있게 했습니다. 이로서 지나치게     
   큰 이미지파일을 불려올 때 매뉴조작박스가 **구석으로 가거나 사라지는 현상을 방지**했습니다.

   ``` js
   // ImageUploadZone.js
   
    img.onload = function () { 
      // 이미지 로딩이 완료되면 실행되는 함수
      imgX = img.width;
      imgY = img.height;

      img.height = 600 * ((imgY * 100) / imgX / 100); // 이미지 폭에 백분율 계산으로 리사이즈를 구현
      img.width = 600; 

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

   ```

<br />

6. font-display: `swap` 속성을 추가해 웹페이지 내에서   
   웹 폰트 로딩 여부와 관계없이 항상 텍스트가 보이게 했습니다. 
   ``` css
   // fontFace.css
   
    @font-face {
      font-family: "Eulyoo1945-Regular";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Eulyoo1945-Regular.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;  // FOUT와 동일하게 작동시켜준다.
    }

<br />

7. 폰트타입 옵션값을 매개변수를 전달했어도 캔버스에 한 번 그리면     
적용이 안되고 2번째로 다시 그려야 바뀐 폰트체가 적용되었던 오류를 고쳤습니다.
   ``` css
   // aside.css
   
    aside #optionSelectFont :nth-child(1) {
      font-family: "Eulyoo1945-Regular"; // 노드에 직접 폰트스타일링으로 해결.
      font-weight: normal; 
    }
    aside #optionSelectFont :nth-child(2) {
      font-family: "BMEuljiro10yearslater";
      font-weight: normal; 
    }
    aside #optionSelectFont :nth-child(3) {
      font-family: "SDSamliphopangche_Outline";
      font-weight: normal;
    } 
    .
    .
    .

<br />

8. 대부분의 모바일 기기에서도 사용자 경험을 비슷하게 하기 위해   
 웹반응형을 적용시켰습니다. width 수치가 980px보다 적게   
미디어쿼리를 적용시킬 경우 컨텐츠의 폭보다 적게 세팅되서    
모바일 최적화가 일어나지 않는 것을 알게 됬습니다.




 

 

