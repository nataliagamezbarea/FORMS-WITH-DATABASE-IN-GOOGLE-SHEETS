$(document).ready(function(){
    $('#formulario-pago').submit(function(event){
      event.preventDefault();
      SendFormGoogleSheets();
    });
  });

  function SendFormGoogleSheets() {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbxAlknHO-trrF_zEwHb7k74sbzjOuuWLUn0HQeUH91tHRQv0UByybklShIkEzchhXCn0Q/exec',
      type: 'post',
      data: $('#formulario-pago').serializeArray(),
      success: function(){
        alert("Registro exitoso")
      },
      error: function(){
        alert("Error en el Registro :(")
      }
    });
  }