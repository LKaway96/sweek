function setup() {//設定函數，初始值的地方
  // 建立一個充滿整個畫面的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB，色相範圍為0-360，飽和度和亮度範圍為0-100
  colorMode(HSB, 360, 100, 100);
  // 畫布的背景顏色為白色
  background(255);
}

function draw() {
  // 計算圓的顏色，根據滑鼠的X和Y位置
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓的顏色
  fill(hue, 100, brightness);

  // 畫圓，圓的寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}




