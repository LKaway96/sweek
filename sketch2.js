function setup() {//設定函數，初始值的地方
    // 建立一個充滿整個畫面的畫布
    createCanvas(windowWidth, windowHeight);
    // 畫布的背景顏色為dee2e6()
    background(222, 226, 230);
    // createCanvas(400, 400);
  }
  
  function draw() {
    // 畫布的背景顏色為dee2e6()
    background(222, 226, 230);
  
    // 計算方框和圓的大小，根據滑鼠的X位置
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    // 設定方框的中心點為視窗的中心
    rectMode(CENTER);
  
    // 使用迴圈來產生多個方形和圓形
    for (let x = 0; x < windowWidth; x += size) {
      for (let y = 0; y < windowHeight; y += size) {
        // 畫方框
        fill(162, 210, 255);
        rect(x + size / 2, y + size / 2, size, size);
  
        // 畫圓
        fill(189, 224, 254);
        ellipse(x + size / 2, y + size / 2, size, size);
      }
    }
  
    // 框線粗細改為5
    strokeWeight(5);
    // 框線顏色改為0d1b2a()
    stroke(13, 27, 42);
  }