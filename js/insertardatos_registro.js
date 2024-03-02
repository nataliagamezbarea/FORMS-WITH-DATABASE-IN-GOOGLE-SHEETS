
  $(document).ready(function(){
    $('#formulario-pago').submit(function(event){
      event.preventDefault();
      SendFormGoogleAppsScript();
    });
  });

  function SendFormGoogleAppsScript() {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzzNkxO2FENHO_g5WAMlgFLrq6JfUsM8b2fX6ReUruvilyni3IkxWCQCdsz3bU4p1weBg/exec',
      type: 'post',
      data: $('#formulario-pago').serialize(),
      success: function(){
        alert("Registro exitoso");
      },
      error: function(){
        alert("Error en el Registro :(");
      }
    });
  }

zz