chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = details.url;
      if (isPhishingURL(url)) {
        // Bloquea la solicitud si se detecta una URL de phishing
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  // Función para determinar si una URL es de phishing (simple ejemplo)
  function isPhishingURL(url) {
    const phishingIndicators = ["phishing.com", "fakebank.com"];
    return phishingIndicators.some(indicator => url.includes(indicator));
  }
  