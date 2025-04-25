function setup() {//設定函數，初始值的地方
    // 建立一個充滿整個畫面的畫布
    createCanvas(windowWidth, windowHeight);
    // 設定顏色模式為HSB，色相範圍為0-360，飽和度和亮度範圍為0-100
    colorMode(HSB, 360, 100, 100);
    // 畫布的背景顏色為淡灰色
    background(222, 226, 230);
    // createCanvas(400, 400);
  }
  
  function draw() {
    // 畫布的背景顏色為淡灰色
    background(222, 226, 230);
  
    // 計算方框和圓的大小，根據滑鼠的X位置
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    // 設定方框的中心點為視窗的中心
    rectMode(CENTER);
  
    // 使用迴圈來產生多個方形和圓形
    for (let x = 0; x < windowWidth; x += size) {
      for (let y = 0; y < windowHeight; y += size) {
        // 畫方框，使用HSB顏色
        fill(200, 80, 100); // 色相200，飽和度80，亮度100
        rect(x + size / 2, y + size / 2, size, size);
  
        // 畫圓，使用HSB顏色
        fill(220, 90, 100); // 色相220，飽和度90，亮度100
        ellipse(x + size / 2, y + size / 2, size, size);
      }
    }
  
    // 框線粗細改為5
    strokeWeight(5);
    // 框線顏色改為深藍色，使用HSB顏色
    stroke(210, 100, 20); // 色相210，飽和度100，亮度20
  }