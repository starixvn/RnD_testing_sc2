const MemberSiteLocator = (process.env.npm_config_cf_lang == 'en' ? require('./MemberSite_Locator').MemberSiteLocator_en : require('./MemberSite_Locator').MemberSiteLocator_vn)
import * as config from '../../config/config'
import * as utils from '../../util/utils'
const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const expect = chai.expect

export const login = async(_env,_game) => {
    // Login for SIT/UAT/PRO
    try {
        // Go to Membersite Url
        await utils.navigate(config[_env].url)
        await utils.waitForLoadState()
        
        // Change Language
        // await utils.selectDrp(MemberSiteLocator.drpLanguage,MemberSiteLocator.optLanguage)
        // await utils.clickEl("xpath=//*[@class='dropdown language ']")
        // await utils.clickEl("//*[text()='Tiếng Việt']")
        // await utils.waitForLoadState()
        // await page.screenshot({ path: `./Report/${lang}/Pictures/test.png`});
        await utils.sleep(15000)
        // await utils.navigate(config[_env].url)
        // await utils.waitForLoadState()
        // Input Username and Password
        //await utils.sendKeys(MemberSiteLocator.txtUsername,config[_env].username[_game])
        //await utils.sendKeys(MemberSiteLocator.txtPassword,config[_env].password)
        await utils.CaptureSubImageToFile('secode.png',1113,16,37,15)
        let secode = await utils.getTextFromImage('secode.png')
        if(isNaN(secode)==true){
            console.log('re secode');
            await utils.sleep(500)
            await utils.CaptureSubImageToFile('secode.png',1113,16,37,15)
            await utils.sleep(200)
            secode = await utils.getTextFromImage('secode.png')
        }
        // await utils.CaptureSubImageToFile(`secode2.png`,1113,16,37,15)
        console.log(parseInt(secode));
        await utils.sendKeys('id=username',config[_env].username[_game])
        await utils.sendKeys('id=password',config[_env].password)
        await utils.sendKeys('id=validation',parseInt(secode))      
        await utils.sleep(1000)
        // Enter Login button
        if(_env == 'cf_prod'){
            await utils.clickEl("xpath=//*[text()='Đăng nhập']")
        } else {
            await utils.clickEl(MemberSiteLocator.btnLogin)
        }
        await utils.waitEl(MemberSiteLocator.divMainPage)
        if(_env === 'cf_uat'){
            // Navigate Sabaclub
             await utils.navigate(page.url().toString().replace(/\/NewIndex\?lang.*/g,'')+config[_env].gamelobbyurl+config.setting.gameId[_game])
        } else {
            await utils.navigate(config[_env].gamelobbyurl+config.setting.gameId[_game])
        }
        await utils.waitEl(MemberSiteLocator.frmMainFrame)
        await utils.navigate(await utils.getAttribute(MemberSiteLocator.frmMainFrame,'src'))
    } catch (error) {
        console.error(error.message);
    }
}
    
    //Login for local
export const login_local = async(_env,_game) => {
        try{
            const cflang = process.env.npm_config_cf_lang=='en'?'en-US':'vi-VN'
            let gameid = config.setting.gameIdlocal[_game]
            //Set Balance 
            let _requestdata = 
            `ObCustId=${config[_env].memberId[_game]}&Balance=200000.00&MinBet=1.00&MaxBet=3000.00&Partner=ow`
            chai.request(config[_env].setBalance).post("").send(_requestdata)
            .end( async(err,res)=>{
              expect(res).to.have.status(200)
            })
             //SSO
            let _requestjs = 
            {"obCustId":config[_env].memberId[_game],"memberName":"ZROiqJQ3","language":"vi-VN","currency":"INH","seq":"d,y,lumi","siteId":"4100300","siteName":"lumi","ip":"10.0.0.142","browserUserAgent":userAgent,"auth":{"operatorId":"ONEworksVGCash","operatorSecret":"VG@SC123"},"token":null,"redirectUrl":"http://l2-games.lumigame.com/?token=16a671e9-39a5-4669-a6b1-28499fac78f0&lang=vi-VN&gameId=0","verifyResult":null,"gameId":gameid,"setting":{"apiUrl":"http://l2_game_api_local:5000","authUrl":"http://l2_auth_api_local:5000","client":{"id":"game-server","secret":"gameserver@20luminet&"},"expireIn":1646365989,"useAuthenticate":true,"requestTimeout":10000,"owUrl":"https://l2-ows.lumigame.com/SabaClub/CreateCustomer","localhost":"http://localhost:7456","mobileLocalhost":"http://localhost:3000","port":5000},"domain":"example.com","localhost":null,"appType":1,"isCash":true,"partner":"1W","resource":null}
            let res = await chai.request(config[_env].url).post("/sso").send(_requestjs)  
            // await utils.sleep(2000)
            let obj = new Object()
            if(res.status != 200) {
                await utils.sleep(10000)
                console.log('re-sso');
                res= await chai.request(config[_env].url).post("/sso").send(_requestjs)
            }
            obj = await JSON.parse(res.text)
            await utils.navigate(obj.redirectUrl)
            await utils.sleep(7000)
            //Wait for login process
        } catch (error) {
            console.error(error.message)
        }
}

// export const login_local2 = async(_env,_game) => {
//     try{
//         await utils.navigate("https://gamelobby-simulator.lumigame.com/signin")
//         await utils.sendKeys('id=memberId',config[_env].memberId[_game])
//         await utils.clickEl("//*[@value='Get Token']")
//         let link= await utils.getText("//*[@class='col-sm-12']")
//         await utils.navigate(link)
//         await utils.sleep(7000)//Wait for login process
//     } catch (error) {
//         console.error(error.message)
//     }
// }
