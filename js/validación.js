
  
  document.getElementById('formulario-pago').addEventListener('submit', async function(event) {
      event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
      
      const usernameInput = document.getElementById('inputUsuario').value;
      const passwordInput = document.getElementById('inputContraseña').value;

      try {
        // URL pública del archivo CSV de Google Sheets
        const url = 'https://docs.google.com/spreadsheets/d/1SxB710239SBRKTRFBt39PoAvM6qchFNFjXUoBcVi0dU/export?format=csv';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Error al obtener los datos. Código de estado: ' + response.status);
        }

        const data = await response.text();
        console.log('Datos del archivo CSV:', data);

        if (data) {
          const filas = data.split('\n').map(row => row.split(','));

          let credencialesCorrectas = filas.some(fila => {
            const usuario = fila[0];
            const contraseña = fila[1];
            return usuario.trim() === usernameInput.trim() && contraseña.trim() === passwordInput.trim();
          });

          if (credencialesCorrectas) {
            console.log('¡Acceso concedido! Redirigiendo...');
            window.location.href = '3-pago.html';
          } else {
            console.log('Credenciales incorrectas. Inténtalo de nuevo.');
          }
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    });
