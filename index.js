const puppeteer = require('puppeteer');
const data1=require('./listitems')
const clipboardy = require('clipboardy');
const fs_writeFile=require("./status")

run().then(() => console.log('Done')).catch(error => console.log(error));

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

async function run() {
  const browser = await puppeteer.launch({ 
    headless: false,
    userDataDir: './data',
 });
  
 


//   await page.goto('https://web.whatsapp.com/');
  //await page.goto("https://google.com")

  // Type "JavaScript" into the search bar
//   await page.evaluate(() => {
//     document.querySelector('input[name="q"]').value = 'JavaScript';
//   });

//   // Click on the "Google Search" button and wait for the page to load
//   const waitForLoad = new Promise(resolve => page.on('load', () => resolve()));
//   await page.evaluate(() => {
//     document.querySelector('input[value="Google Search"]').click();
//   });
//   await waitForLoad;


// function starts
let message=`
KPR COLLEGE OF ARTS SCIENCE AND RESEARCH
ADMISSION OPEN 2020-2021
COURSES OFFERED:
B.COM
B.COM(COMPUTER APPLICATIONS) 
B.COM (BANKING AND INSURANCE) 
B.COM ( PROFESSIONAL ACCOUNTING)
B.COM (BUSINESS ANALYTICS) 
B.Sc (COMPUTER SCIENCE)
B.Sc COMPUTER SCIENCE WITH DATA ANALYTICS
B.Sc INFORMATION TECHNOLOGY
FOR ADMISSION DETAILS 
CONTACT +917708182824,0422-2635678 
https://drive.google.com/file/d/1jVojH2qIb_CuxKcIZU9ioNVJPg3crqJ5/view?usp=sharing`;

let file='listdata.txt'

let text=''
for (i = 0; i < data1.length; i++) {
  
  const page = await browser.newPage();

    text = `https://web.whatsapp.com/send?phone=91${data1[i]}?text=`  ;
    //text = `https://web.whatsapp.com/send?phone=917904813628?text=`  ;
    await page.goto(text);
    await page.waitForNavigation({timeout: 0, waitUntil: "networkidle0"});      
    await delay(4000);

   let txtobject=await page.$x('/html/body/div[1]/div/div/div[4]/div/footer/div[1]/div[2]/div/div[2]')
   //console.log(txtobject)
   try{
    await clipboardy.write(message)
  await txtobject[0].focus();
  await page.keyboard.down('Control')
  await page.keyboard.press('V')
  await page.keyboard.up('Control');
  await page.keyboard.press('Enter')
  await delay(4000);
  await page.keyboard.press('Enter')
  fs_writeFile(file,`${data1[i]},sucess|||\n`)
  console.log("success")
  await page.close()
  console.log(text)
  
}
catch(e){
  fs_writeFile(file,`${data1[i]},error|||\n`)
  await page.close()
  console.log(text)
  console.log("failure")


}

 
}

  await new Promise(resolve => setTimeout(resolve, 10000));
  await browser.close();
}


/* adding the data to be pasted once the page is open */

