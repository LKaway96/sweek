function setup() {//設定函數，初始值的地方
    // 建立一個充滿整個畫面的畫布
    createCanvas(windowWidth, windowHeight);
    // 畫布的背景顏色為40916c()
    background(40, 145, 108);
    // createCanvas(400, 400);
  }
  
  function draw() {
    // 畫布的背景顏色為457b9d()
    background(69, 123, 157);
    // 在視窗中間畫一個圓，圓的寬高為200
    // 圓的色為bde0fe()
    
    //fill(189, 224, 254);
    //ellipse(windowWidth/2, windowHeight/2, 200, 200);
    //框線粗細改為5
    //strokeWeight(5);
    // 框線顏色改為0d1b2a()
    //stroke(13, 27, 42);
    // 依照上述的圓顏色與與框線顏色，從最左邊到最右邊畫滿圓
    // 並且每個圓的寬高為50
    // 由上而下填滿整個視窗
    for (let i = 0; i < windowWidth; i+=50) {
      for (let j = 0; j < windowHeight; j+=50) {
        fill(189, 224, 254);
        ellipse(i, j, 50, 50);
      }
    }
  
     
  
  }