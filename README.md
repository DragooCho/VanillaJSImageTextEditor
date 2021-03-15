# Image Text Editor 웹툴 [![HitCount](http://hits.dwyl.com/dragoocho/DragooCho/ImageTextEditor.svg)](http://hits.dwyl.com/dragoocho/DragooCho/ImageTextEditor)
>온라인 웹사이트에서 쉽게 볼 수있는 재미있는 짤방을     
누구나 쉽게 만들 수 있는 웹페이지 형식의 어플리케이션으로 제작했습니다.         

<br />

## 1. 제작 기간 & 참여 인원
- 2021년 3월 2일 ~ 3월 8일
- 개인 프로젝트

<br />

## 2. 사용 기술
#### `Front-end`
  - p5.js 1.2.0

<br />

## 3. 핵심 기능
이 서비스의 핵심 기능은 **자유로운 텍스트 조작 기능**입니다.  
사용자가 로컬 내에 가지고 있는 이미지 파일을 선택하고        
입력창에 원하는 글자를 원하는 위치에 입력하고 따라 붙인후        
저장하는 버튼을 누르면 끝입니다.         
<br />
조작을 최대한 단순하게 구현했으며    
자연스러운 사용자 경험을 유도했습니다.

<br />

## 4. 부가 기능

텍스트의 `색상`, `사이즈`, `폰트타입`을 정해진 `옵션창` 및 `슬라이더`로 조절 가능합니다.
<br />
<br />


## 5. 구현하면서 힘들었던 점

- 리액트JS 내에서 `P5.js` 라이브러리의 메서드 활용이 제한적이고 불편 했었습니다.
- 스스로 이해가 가능한 기능구현을 목표로 했기에   
  순수 javascript의 기준을 두고 `p5.js`의 라이브러리만 쓰기로 결정했습니다.    
 
</div>
<details>
<summary> `p5.js` 온라인 에디터에 있던 script 테그가 로컬에서 읽히지 않았던 점입니다.</summary>

    [p5.js - Libraries - cdnjs](https://cdnjs.com/libraries/p5.js)에서 최신버전으로 교체했더니 잘 동작했습니다.
</div>
</details>

- 단순한 다운로드 버튼으로 만들면 편집한 이미지가 아닌       
  초기 상태의 이미지로 저장이 됬었습니다.      
- 폰트타입명을 변수로 지정하는 작업이 통하지 않았던 점 때문에    
  `preload()`에서  `loadFont()`로 폰트속성를 불러온 후    
  폰트타입이름 그대로 써야 했습니다.

- `p5.js` 에서는 HTML에 직접 만드는게 아닌 p5 자체 메서드로 id와 class를            
  직접 생성해야하기 때문에 노드들끼리    
  서로 묶을수가 없어서 css 를 적용하기가 너무나 어려웠습니다.     
  결론적으로 `p5.js`의 기능은 다루기 쉬우나 그렇게 생성된 노드들을     
  스타일링하기에는 생각보다 많이 까다로웠습니다.    
  
- 다음에 비슷한 과제를 만들 때는 `p5.js`을 배제하던지 아님 순수JS와    
  조화롭게 쓸 수 있게 좀 더 공부 해야겠다고 느꼈습니다.

<br />
<br />

## DEMO
https://dragoocho.github.io/ImageTextEditor/

<br />

![Image Text Editor](https://github.com/DragooCho/TIL/blob/main/image/cap1r.gif?raw=true)![Image Text Editor](https://github.com/DragooCho/TIL/blob/main/image/cap3r.gif?raw=true)        
![Image Text Editor](https://github.com/DragooCho/TIL/blob/main/image/cap4r.gif?raw=true)![Image Text Editor](https://github.com/DragooCho/TIL/blob/main/image/cap5r.gif?raw=true)        


<br />

## ver.2 변경점

1. 이미지를 불러올 때 **바로 캔버스에 붙이지 못하고**     
   **브라우저에 클릭했을 때** 비로서 작동했던 오류를 수정했습니다.
2. 캔버스 밖에 마우스를 클릭하면 캔버스 위에 있었던    
   **택스트가 사라지는 오류**를 수정했습니다.   
3. `폰트사이즈 30` 이란 문단에 마우스포인터를    
   올려두면 **폰트가 살짝 작아지는 현상**을 수정했습니다.   
4. 작업한 결과물을 다운로드 할 때 모바일 브라우저에서는    
   **텍스트가 붙어서 저장이 안되는 현상**을 수정했습니다.    



# -VanillaJS_ImageTextEditor
