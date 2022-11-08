function ocultar() {
    document.getElementById("pregunta1").style.display = "none"
    document.getElementById("pregunta2").style.display = "none"
    document.getElementById("pregunta3").style.display = "none"
    document.getElementById("pregunta4").style.display = "none"
  }
  
  function selecionar(){
    let sel = document.getElementById("preguntas").value;
    switch (sel) {
      case "pregunta1":
        ocultar()
        document.getElementById("pregunta1").style.display = ""
        break;
      case "pregunta2":
        ocultar()
        document.getElementById("pregunta2").style.display = ""
        break;
      case "pregunta3":
        ocultar()
        document.getElementById("pregunta3").style.display = ""
        break;
      case "pregunta4":
        ocultar()
        document.getElementById("pregunta4").style.display = ""
        break;
    }
  }