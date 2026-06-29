const { spawn } = require('child_process');
const puppeteer = require('puppeteer');

(async () => {
  // Start the server
  const server = spawn(/^win/.test(process.platform) ? 'npx.cmd' : 'npx', ['vite', 'preview', '--port', '4173']);
  
  server.stdout.on('data', (data) => console.log(`Server: ${data}`));
  server.stderr.on('data', (data) => console.error(`Server Err: ${data}`));

  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:4173');
  await page.waitForTimeout(1000);
  
  try {
    // Check if we are in main menu
    const newGameBtn = await page.$x("//button[contains(., 'Nouvelle Partie')]");
    if (newGameBtn.length > 0) {
      console.log("Clicking Nouvelle Partie...");
      await newGameBtn[0].click();
      await page.waitForTimeout(1000);
      
      const startBtn = await page.$x("//button[contains(., 'Commencer')]");
      if (startBtn.length > 0) {
        console.log("Clicking Commencer...");
        await startBtn[0].click();
        await page.waitForTimeout(1000);
      }
    } else {
      const continueBtn = await page.$x("//button[contains(., 'Continuer')]");
      if (continueBtn.length > 0) {
        console.log("Clicking Continuer...");
        await continueBtn[0].click();
        await page.waitForTimeout(1000);
      }
    }
    
    // Open dropdown
    const menuIcon = await page.$('.lucide-menu');
    if (menuIcon) {
      console.log("Clicking Menu Icon...");
      await menuIcon.click();
      await page.waitForTimeout(500);
      
      // Click Paramètres
      const settingsBtn = await page.$x("//button[contains(., 'Paramètres')]");
      if (settingsBtn.length > 0) {
        console.log("Found Paramètres button, clicking...");
        await settingsBtn[0].click();
        await page.waitForTimeout(1000);
        
        // Take screenshot
        await page.screenshot({ path: 'screenshot.png' });
        console.log("Screenshot taken.");
        
        // Check if SettingsModal is in DOM
        const modal = await page.$x("//h2[contains(., 'Paramètres')]");
        if (modal.length > 1) { // 1 in menu, 1 in modal
          console.log("SettingsModal is visible.");
        } else {
          console.log("SettingsModal NOT found in DOM after click.");
        }
      } else {
        console.log("Paramètres button not found.");
      }
    } else {
      console.log("Menu icon not found.");
    }
  } catch (e) {
    console.error("Test error:", e);
  }
  
  await browser.close();
  server.kill();
  process.exit(0);
})();
