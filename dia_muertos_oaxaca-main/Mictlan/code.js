var Score=0;
playSound("assets/Yolteotl--Miktlantekuhtli-Melodia-El-sen-or-de-los-muertos-Nahuatl.mp3", false);
playSound("assets/Mictlan-Audio-1_.mp3", false);
onEvent("btn_Inicio", "click", function( ) {
  setScreen("Pantalla_Instrucciones");
  playSound("assets/Primer_Nivel.mp3", false);
 
});
onEvent("btn_Nivel1", "click", function( ) {
  setScreen("Pantalla_Nivel1");
  playSpeech(getText("txt2"), "female", "Español (LATAM)");
});
onEvent("btn_Nivel2", "click", function( ) {
  setScreen("Pantalla_Nivel2");
  playSpeech(getText("txt3"),"male","Español (LATAM)");
});
onEvent("btn_Nivel3", "click", function( ) {
  setScreen("Pantalla_Nivel3");
  playSpeech(getText("txt4"),"female","Español (LATAM)");
});
onEvent("btn_Nivel4", "click", function( ) {
  setScreen("Pantalla_Nivel4");
  playSpeech(getText("txt5"),"male","Español (LATAM)");
});
onEvent("btn_Nivel5", "click", function( ) {
  setScreen("Pantalla_Nivel5");
  playSpeech(getText("txt6"),"female","Español (LATAM)");
});
onEvent("btn_Nivel6", "click", function( ) {
  setScreen("Pantalla_Nivel6");
  playSpeech(getText("txt7"), "male", "Español (LATAM)");
});
onEvent("btn_Nivel7", "click", function( ) {
  setScreen("Pantalla_Nivel7");
  playSpeech(getText("txt8"),"female","Español (LATAM)");
});
onEvent("btn_Nivel8","click",function(){
  setScreen("PantallaNivel8");
  playSpeech(getText("txt9"),"male","Español (LATAM)");
});
onEvent("btn_Nivel9","click",function(){
  setScreen("PantallaNivel9");
  playSpeech(getText("txt10"),"female","Español (LATAM)");
});
onEvent("btn_Quizz","click",function(){
  setScreen("Pantalla_Quizz");
  playSpeech(getText("txtInstruccionesQuizz"),"male","Español (LATAM)");
});
onEvent("btnIniciarQuizz","click",function(){
  setScreen("Pantalla_Pr1");
  playSpeech(getText("txtPr1"),"female","Español (LATAM)");
});
//Respuetas Pregunta 1
onEvent("RespuestaPr1A","click",function(){
  Score=Score-1;
  setText("lblScore1",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr2");
    playSpeech(getText("txtPr2"),"male","Español (LATAM)");
  },2000);
});
onEvent("RespuestaPr1B","click",function(){
  Score=Score+1;
  setText("lblScore1",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr2");
    playSpeech(getText("txtPr2"),"male","Español (LATAM)");
  },2000);
});
onEvent("RespuestaPr1C","click",function(){
  Score=Score-1;
  setText("lblScore1",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr2");
    playSpeech(getText("txtPr2"),"male","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaAPr2","click",function(){
  Score=Score+1;
  setText("lblScore2",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr3");
    playSpeech(getText("txtPr3"),"female","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaBPr2","click",function(){
  Score=Score-1;
  setText("lblScore2",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr3");
     playSpeech(getText("txtPr3"),"female","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaAPr3","click",function(){
  Score=Score-1;
  setText("lblScore3",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr4");
     playSpeech(getText("txtPr4"),"male","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaBPr3","click",function(){
  Score=Score+1;
  setText("lblScore3",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr4");
         playSpeech(getText("txtPr4"),"male","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaCPr3","click",function(){
  Score=Score-1;
  setText("lblScore3",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr4");
    playSpeech(getText("txtPr4"),"male","Español (LATAM)");

  },2000);
});
onEvent("btnRespuestaAPr4","click",function(){
  Score=Score+1;
  setText("lblScore4",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr5");
     playSpeech(getText("txtPr5"),"female","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaBPr4","click",function(){
  Score=Score-1;
  setText("lblScore4",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr5");
         playSpeech(getText("txtPr5"),"female","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaCPr4","click",function(){
  Score=Score-1;
  setText("lblScore4",Score);
  setTimeout(function(){
    setScreen("Pantalla_Pr5");
    playSpeech(getText("txtPr5"),"female","Español (LATAM)");

  },2000);
});
onEvent("btnRespuestaAPr5","click",function(){
  Score=Score-1;
  setText("lblScore5",Score);
  setTimeout(function(){
    setScreen("Pantalla_Final");
    setText("lblFinal",Score);
     playSpeech("Felicidades llegaste hasta aqui","male","Español (LATAM)");
     playSpeech(getText("lblFinal"),"male","Español (LATAM)");
     playSpeech("puntos","male","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaBPr5","click",function(){
  Score=Score+1;
  setText("lblScore5",Score);
  setTimeout(function(){
    setScreen("Pantalla_Final");
    setText("lblFinal",Score);
     playSpeech("Felicidades llegaste hasta aqui","male","Español (LATAM)");
     playSpeech(getText("lblFinal"),"male","Español (LATAM)");
     playSpeech("puntos","male","Español (LATAM)");
  },2000);
});
onEvent("btnRespuestaCPr5","click",function(){
  Score=Score-1;
  setText("lblScore5",Score);
  setTimeout(function(){
    setScreen("Pantalla_Final");
    setText("lblFinal",Score);
     playSpeech("Felicidades llegaste hasta aqui","male","Español (LATAM)");
     playSpeech(getText("lblFinal"),"male","Español (LATAM)");
     playSpeech("puntos","male","Español (LATAM)");

  },2000);
});
onEvent("btnFinal","click",function(){
  setScreen("Pantalla_Inicio");
});
