$(document).ready(function () {
  $("#formulario-pago").submit(function (event) {
    event.preventDefault();
    SendFormGoogleAppsScript();
  });
});

function SendFormGoogleAppsScript() {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxAlknHO-trrF_zEwHb7k74sbzjOuuWLUn0HQeUH91tHRQv0UByybklShIkEzchhXCn0Q/exec",
    type: "post",
    data: $("#formulario-pago").serialize(),
    success: function () {
      swal("¡Éxito!", "Registro exitoso", "success");
    },
    error: function () {
      swal("¡Error!", "Error en el Registro :(", "error");
    },
  });
}
