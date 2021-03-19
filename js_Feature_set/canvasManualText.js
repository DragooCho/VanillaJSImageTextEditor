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
ctx.font = `800 ${manualTextSize}px GulimChe`;

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
