let img, input, button;

function preload() {
  MaplestoryOTFBold = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff"
  );
  Cafe24Ohsquare = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Cafe24Ohsquare.woff"
  );
  SDSamliphopangche_Outline = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff"
  );
  TmoneyRoundWindExtraBold = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff"
  );
  BMEULJIRO = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff"
  );
}

function setup() {
  // Original Canvas Wallpaper
  let canvas = createCanvas(500, 500);
  canvas.id("leftSide");
  background(220);

  // Canvas Wallpaper Information
  textAlign(CENTER);
  textFont(SDSamliphopangche_Outline, 20);
  text(
    "먼저 이미지 파일을 드롭 또는 파일선택을 눌러",
    width / 2,
    height / 2 - 40
  );
  textAlign(CENTER);
  textFont(SDSamliphopangche_Outline, 20);
  text("이미지 파일을 선택하세요.", width / 2, height / 2 - 0);
  textAlign(CENTER);
  textFont(SDSamliphopangche_Outline, 20);
  text(
    "그런 다음 아래의 옵션으로 텍스트를 조절하세요.",
    width / 2,
    height / 2 + 40
  );

  // Set Big Title
  bigTitleGreeting = createDiv("<h1>🔹웹툴🔹이미지 텍스트 편집기 ver2️⃣</h1>");
  bigTitleGreeting.class("bigTitle");

  // Set drop handle Zone
  canvas.drop(gotFile);

  // Set flieupload button
  middleTitleGreeting = createDiv("<h3 id=titleSide>사용할 이미지 선택</h3>");
  middleTitleGreeting.class("middleTitle");
  input = createFileInput(gotFile);
  input.class("imageUploadButton");

  // Set Text Input Window
  middleTitleGreeting = createDiv("<h3 id=titleSide>문구</h3>");
  middleTitleGreeting.class("middleTitlePhrases");
  textInput = createInput();

  // Set TextSize Value Slider
  sizeGreeting = createDiv("폰트 사이즈 30");
  sizeGreeting.class("fontSizeHandle");
  textSizeSlider = createSlider(10, 100, 30);
  textSizeSlider.class("textSizeSlider");

  // Set textColor Value options
  greeting = createDiv("<h3 id=titleSide>글씨색</h3>");
  greeting.class("midTitleColor");
  colorDropdown = createSelect();
  colorDropdown.option("black");
  colorDropdown.option("white");
  colorDropdown.option("orange");
  colorDropdown.option("green");
  colorDropdown.option("skyblue");
  colorDropdown.option("pink");
  colorDropdown.class("colorDropdown");

  // Set textType options
  greeting = createDiv("<h3 id=titleSide>폰트 타입 선택</h3>");
  greeting.class("midTitleFontType");
  fontTypeDropdown = createSelect();
  fontTypeDropdown.option("SDSamliphopangche_Outline");
  fontTypeDropdown.option("MaplestoryOTFBold");
  fontTypeDropdown.option("Cafe24Ohsquare");
  fontTypeDropdown.option("TmoneyRoundWindExtraBold");
  fontTypeDropdown.option("BMEULJIRO");

  // Set Image Download button
  greeting = createDiv(
    "<h2 id=titleSide>이 버튼을 눌러 다른 이름으로 저장</h2>"
  );
  greeting.class("middleTitleSaveAs");
  savebutton = createButton("만들기");
  savebutton.mousePressed(imgDownload);
  savebutton.class("savebutton");
}

function draw() {
  const fontColorValue = colorDropdown.value();
  const fontSizeValue = textSizeSlider.value();
  const fontTypeValue = fontTypeDropdown.value();
  const inputWindowText = textInput.value();

  // Attach image
  if (img) {
    image(img, 0, 0, width, height);
  }

  // Set TextInput Handler
  textInput.input(myInputEvent);

  // Set TextSize Slide Handler
  textSizeSlider.input(textSizeChange);

  // Set textPaint handler
  fill(fontColorValue);
  textAlign(CENTER, CENTER);
  textFont(fontTypeValue, fontSizeValue);
  text(inputWindowText, mouseX, mouseY);
}

function myInputEvent() {
  loop();
}

function textSizeChange() {
  const sizeChange = textSizeSlider.value();
  sizeGreeting.html("폰트 사이즈 " + sizeChange);
  loop();
}

function gotFile(file) {
  img = createImg(file.data, "").hide();
  loop();
}

function mousePressed() {
  if (mouseX < 500 && mouseX > 0 && mouseY < 500 && mouseY > 0) {
    loop();
  }
}
function mouseReleased() {
  noLoop();
}

function imgDownload(name) {
  saveCanvas(name, "png");
}
