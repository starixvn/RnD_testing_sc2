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
        await utils.sleep(1000)
        await page.selectOption('id=Langid', { value : 'vi-VN' })
        await utils.sendKeys('id=Username',config[_env].username[_game])
        await utils.sendKeys('id=Password',config[_env].password)
        await utils.sleep(1000)
        await utils.clickEl('id=LoginBtn')
        await utils.waitForLoadState()
        await utils.sleep(5000)
        await utils.navigate(config[_env].gamelobbyurl+config.setting.gameId[_game])
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
            // let _requestdata = 
            // `ObCustId=${config[_env].memberId[_game]}&Balance=200000.00&MinBet=1.00&MaxBet=3000.00&Partner=ow`
            let _requestdata = 
            `Partner=ow&ObCustId=${config[_env].memberId[_game]}&Balance=200000.00&MinBet=1.00&MaxBet=3000.00&Operator=ow`
            let ress= chai.request(config[_env].setBalance).post("/").send(_requestdata)
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
