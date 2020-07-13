function start(){
//STARTを押すと稼働中を表示させる
  var result = document.getElementById("result");
  result.innerHTML = "稼働中";
  loop = setInterval(function() {
      //STARTを押されると「getNow2」をインターバル（繰り返し実行）させる
  getNow2();
   }, 500);
}
        

function stop(){
  //STOPを押すと停止中を表示させる
  result.innerHTML = "停止中";
  //STOPを押されると「getNow2」のインターバルを停止させる
  clearInterval(loop);
}

    
function noww() {//このコマンドを実行されるとチャイムを再生させる
  const num = document.form1.option.selectedIndex;//選択したチャイムの音を判別しnumに代入する
      if (num==0) {
        audioElem = new Audio();
      audioElem.src = "audio/1.mp3";
      audioElem.play();
      } else if (num == 1){
        audioElem = new Audio();
      audioElem.src = "audio/2.mp3";
      audioElem.play();
      }else if (num == 2){
      audioElem = new Audio();
      audioElem.src = "audio/3.mp3";
      audioElem.play();
      }else if (num == 3){
      audioElem = new Audio();
      audioElem.src = "audio/4.mp3";
      audioElem.play();}
      else if (num == 4){
      audioElem = new Audio();
      audioElem.src = "audio/5.mp3";
      audioElem.play();}
    }//各選択肢を判別しチャイム音をならさせる
      

function clock() {//実行すると時間を表示させる場所に表示する
    document.getElementById("view_clock").innerHTML = getNow();
  }




function getNow() {//リアルタイムを取得して戻り値に代入する
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth()+1; //１を足すこと
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    //出力用
    var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒"; 
    return s;
}

var forr = 1;//チャイムを一回だけ再生するため
function getNow2() {
      var now = new Date();
      var hour = now.getHours();
      var min = now.getMinutes();
      
  
      if (forr == 1) {
        if (hour == 9 && min == 30) {//9:30
          noww();
          forr = 0;//クールタイムを設定
        } else if (hour == 9 && min == 45){//9:45
          noww();
          forr = 0;
        } else if (hour == 10 && min == 35){//10:35
          noww();
          forr = 0;
        } else if (hour == 10 && min == 45){//10:45
          noww();
          forr = 0;
        } else if (hour == 11 && min == 35){//11:35
          noww();
          forr = 0;
        } else if (hour == 11 && min == 45){//11:45
          noww();
          forr = 0;
        } else if (hour == 12 && min == 35){//12:35
          noww();
          forr = 0;
        } else if (hour == 13 && min == 15){//13:15
          noww();
          forr = 0;
        } else if (hour == 14 && min == 5){//14:05
          noww();
          forr = 0;
        } else if (hour == 14 && min == 15){//14:15
          noww();
          forr = 0;
        } else if (hour == 15 && min == 5){//15:05
          noww();
          forr = 0;
        } else if (hour == 15 && min == 15){//15:15
          noww();
          forr = 0;
        } else if (hour == 16 && min == 5){//16:05
          noww();
          forr = 0;
        }

      } else {
        if (min == 6|| min == 16||min == 31||min == 36||min == 46) { //クールタイムを解除
          forr = 1;
        }
      }
    }
