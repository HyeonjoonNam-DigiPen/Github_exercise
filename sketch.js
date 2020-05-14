/*Hyeonjoon_nam
  Draw Your Family Assignment
  CS099
  Spring 2020 */

function setup() {
  createCanvas(600, 500);
  angleMode(DEGREES);
}

function draw() {
  background("#C0E4DA");
  
  //Ground
  push();
  noStroke();
  fill("green");
  rect(0, 400, 600, 120, 20, 20, 0);
  fill(182);
  noStroke();
  quad(260, 400, 356, 403, 368, 441, 259, 441);
  rect(50, 400, 200, 50);
  pop();
  
  //Clouds
  push();
  noStroke();
  fill(255);
  circle(118, 23, 50);
  circle(148, 0, 50);
  circle(150, 33, 50);
  circle(180, 23, 50);
  circle(400, 7, 50);
  circle(420, 37, 50);
  circle(446, 7, 50);
  pop();
  
  //Rock
  push();
  noStroke();
  fill(60);
  rect(50, 100, 200, 300, 30, 30, 0);
  fill("#C0E4DA");
  
  //Rock_detail_leftside
  triangle(50, 150, 50, 160, 60, 155);
  triangle(50, 250, 50, 260, 55, 255);
  triangle(50, 350, 50, 360, 65, 355);
  
  //Rock_detail_rightside
  triangle(250, 200, 250, 210, 240, 205);
  pop();
  
  //Rock_detail_Daekey(My highschool name)
  push();
  fill(255);
  strokeWeight(5);
  stroke(255);
  strokeJoin(ROUND);
  triangle(102, 171, 116, 180, 115, 170);
  strokeWeight(10);
  line(113, 173, 189, 164);
  strokeWeight(15);
  line(148, 143, 148, 181);
  push();
  noFill();
  strokeWeight(15);
  arc(108, 185, 80, 70, 0, 90);
  arc(208, 186, 120, 75, 90, 180);
  pop();
  push();
  strokeWeight(12);
  line(114, 280, 142, 275);
  line(98, 310, 158, 300);
  line(126, 256, 126, 348);
  line(126, 332, 144, 329);
  line(103, 329, 88, 366);
  line(100, 350, 198, 370);
  line(178, 273, 210, 269);
  line(209, 272, 204, 308);
  line(167, 308, 204, 308);  
  line(167, 310, 170, 337);
  line(172, 338, 204, 335);
  pop();
  pop();
  
  //Friend_1
  push();
  strokeWeight(20);
  strokeCap(ROUND);
  stroke("#395C80");
  line(306, 301, 293, 336);
  line(293, 338, 291, 379);
  line(332, 301, 343, 383);
  pop();
  push();
  fill("#D0A280");
  noStroke();
  circle(318, 170, 50);
  fill("#0E3E41");
  rect(280, 190, 75, 120, 20, 20, 0);
  quad(282, 201, 254, 253, 267, 267, 281, 225);
  quad(348, 195, 425, 215, 411, 230, 350, 220);
  pop();
  push();
  strokeWeight(5);
  stroke("white");
  fill("white");
  strokeJoin(ROUND);
  quad(280, 387, 260, 396, 294, 399, 298, 387);
  quad(336, 389, 340, 399, 367, 401, 353, 389);
  pop();
  push();
  strokeWeight(10);
  stroke("#3FB9DC");
  line(265, 251, 267, 273);
  pop();
  push();
  noStroke();
  fill("#3FB9DC"); 
  quad(228, 221, 259, 259, 272, 258, 287, 213);
  fill(255);
  triangle(235, 212, 264, 256, 276, 210);
  pop();
  fill(255);
  circle(308, 168, 10);
  circle(328, 168, 10);
  fill(0);
  circle(308, 168, 4);
  circle(328, 168, 4);
  push();
  noFill();
  rect(300, 160, 15, 15);
  rect(320, 160, 15, 15);
  line(299, 166, 293, 166);
  line(336, 166, 342, 166);
  line(315, 168, 320, 168);
  arc(318, 182, 30, 10, 0, 180);
  arc(318, 179, 5, 8, 90, 270);
  pop();
  arc(318, 158, 50, 40, 180, 360);
  push();
  strokeWeight(4);
  stroke("#D0A280");
  fill("#D0A280");
  rect(254, 260, 5, 15);
  line(254, 259, 256, 251);
  line(258, 260, 266, 259);
  line(260, 265, 268, 265);
  line(260, 270, 268, 270);
  line(259, 275, 267, 275);
  pop();
  
  //Me
  push();
  noStroke();
  fill("#D0A280");
  circle(406, 190, 50);
  fill("#646464");
  rect(372, 213, 70, 110, 30, 30, 0);
  fill("#6ED6BC");
  quad(402, 222, 394, 329, 420, 329, 414, 225);
  rect(376, 323, 62, 13);
  fill("#F56D36");
  quad(373, 211, 441, 211, 421, 259, 396, 259);
  quad(400, 250, 395, 290, 425, 290, 416, 255);
  fill("#646464");
  rect(380, 335, 55, 15);
  quad(380, 349, 385, 425, 404, 425, 408, 349);
  quad(408, 349, 415, 425, 434, 423, 435, 349);
  pop();
  push();
  strokeWeight(5);
  strokeJoin(ROUND);
  quad(388, 425, 372, 440, 400, 436, 400, 425);
  quad(419, 424, 420, 435, 443, 437, 430, 424);
  pop();
  push();
  fill(255);
  circle(396, 185, 10);
  circle(416, 185, 10);
  fill(0);
  circle(396, 185, 4);
  circle(416, 185, 4);
  push();
  noFill();
  circle(396, 185, 18);
  circle(416, 185, 18);
  arc(406, 198, 30, 20, 0, 180);
  arc(406, 198, 3, 6, 90, 270);
  pop();
  line(382, 185, 386, 185);
  line(425, 185, 429, 185);
  line(404, 184, 408, 184);
  line(394, 176, 415, 176);
  fill(0);
  arc(406, 175, 45, 30, 180, 360);
  pop();
  push()
  strokeWeight(4);
  stroke("#D0A280");
  line(438, 224, 433, 231);
  line(440, 229, 434, 234);
  line(442, 233, 438, 238);
  line(442, 234, 438, 223);
  fill("#D0A280");
  rect(427, 263, 13, 13, 2);
  line(415, 260, 426, 263);
  line(412, 267, 426, 268);
  line(414, 273, 425, 273);
  line(418, 279, 425, 277);
  rect(390, 263, 10, 10, 3);
  line(392, 263, 403, 260);
  line(397, 266, 404, 265);
  line(397, 269, 404, 269);
  line(398, 273, 404, 273);
  pop();
  push();
  stroke("#646464");
  strokeWeight(15);
  line(378, 235, 360, 277);
  line(359, 276, 383, 267);
  strokeWeight(3);
  fill("#646464");
  strokeJoin(ROUND);
  quad(441, 243, 470, 268, 470, 284, 442, 278);
  pop();
  push();
  fill(0);
  triangle(376, 251, 375, 261, 369, 263);
  triangle(444, 257, 446, 261, 457, 267);
  pop();
  
  //Friend_2
  push();
  noStroke();
  fill("#D0A280");
  circle(490, 185, 55);
  fill(30);
  rect(465, 210, 63, 150, 10, 10, 0);
  fill(255);
  circle(480, 177, 10);
  circle(500, 177, 10);
  fill(0);
  circle(480, 177, 5);
  circle(500, 177, 5);  
  arc(490, 168, 50, 30, 180, 360);
  pop();
  push();
  noFill();
  arc(490, 195, 35, 20, 0, 180);
  arc(490, 190, 5, 8, 90, 270);
  pop();
  push();
  fill("#EE887E");
  noStroke();
  quad(443, 223, 474, 213, 474, 257, 457, 261);
  quad(460, 256, 460, 272, 471, 270, 468, 255);
  pop();
  push();
  fill("#D0A280");
  rect(477, 248, 15, 17, 3);
  push();
  strokeWeight(3);
  stroke("#D0A280");
  line(479, 250, 468, 247);
  line(478, 253, 466, 251);
  line(478, 257, 467, 255);
  line(478, 262, 468, 259);
  line(482, 243, 488, 249);
  pop();
  pop();
  push();
  fill(0);
  rect(491, 251, 30, 15);
  quad(513, 251, 524, 221, 527, 240, 521, 264);
  pop();
  push();
  noStroke();
  fill("#646464");
  quad(470, 360, 472, 420, 488, 420, 493, 360);
  quad(500, 359, 505, 419, 518, 419, 524, 359);
  pop();
  push();
  fill(20);
  strokeWeight(3);
  strokeJoin(ROUND);
  quad(473, 419, 458, 436, 481, 437, 484, 419);
  quad(506, 417, 506, 433, 530 , 433, 517, 419);
  pop();
  //Flowers
  push();
  noStroke();
  fill("yellow");
  ellipse(250, 223, 15, 6);
  ellipse(260, 223, 15, 6);
  ellipse(255, 218, 15, 6);
  ellipse(265, 218, 15, 6);
  fill("red");
  ellipse(390, 222, 15, 10);
  ellipse(410, 222, 15, 10);
  ellipse(400, 232, 15, 10);
  ellipse(420, 232, 15, 10);
  ellipse(430, 222, 15, 10);
  ellipse(452, 237, 15, 10);
  ellipse(458, 228, 15, 10);
  ellipse(468, 237, 15, 10);
  pop();
  push()
  strokeWeight(1);
  stroke(0, 130);
  line(250, 227, 260, 249);
  line(250, 223, 258, 247);
  line(262, 221, 260, 251);
  line(266, 224, 261, 253);
  line(389, 225, 402, 255);
  line(400, 235, 407, 259);
  line(407, 223, 408, 257);
  line(420, 233, 406, 261);
  line(430, 223, 410, 252);
  line(453, 239, 461, 255);
  line(458, 231, 459, 252);
  line(466, 237, 460, 255);
  pop();
  
}
function mouseClicked() {  
  let MX = mouseX;
  let MY = mouseY;
  console.log(MX + " / " + MY);
}