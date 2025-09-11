function delayedLog(text, delayMs) {
  setTimeout(() => {
    console.log(text);
  }, delayMs);
}

delayedLog("Привіт!", 2000); 