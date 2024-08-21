(function() {
    const suspiciousWords = ["login", "password", "bank"];
    
    function scanPageForPhishing() {
      const bodyText = document.body.innerText.toLowerCase();
      const foundSuspiciousWords = suspiciousWords.some(word => bodyText.includes(word));
      
      if (foundSuspiciousWords) {
        alert("Advertencia: esta página contiene contenido sospechoso. Ten cuidado!");
      }
    }
    
    // Ejecuta el escaneo después de que la página se cargue
    window.onload = scanPageForPhishing;
  })();
  