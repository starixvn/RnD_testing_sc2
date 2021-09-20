const MemberSiteLocator = (process.env.npm_config_lang == 'vn' ? require('./MemberSite_Locator').MemberSiteLocator_vn : require('./MemberSite_Locator').MemberSiteLocator_en)
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
        
        // Input Username and Password
        await utils.sendKeys(MemberSiteLocator.txtUsername,config[_env].username[_game])
        await utils.sendKeys(MemberSiteLocator.txtPassword,config[_env].password)

        // Enter Login button
        if(_env == 'cf_prod'){
            await utils.clickEl(MemberSiteLocator.btnLoginPro)
        } else {
            await utils.clickEl(MemberSiteLocator.btnLogin)
        }
        await utils.waitEl(MemberSiteLocator.imgLogo)
    } catch (error) {
        console.error(error.message);
    }
}
    
    //Login for local
export const login_local = async(_env,_game) => {
        try{
            const cflang = process.env.npm_config_lang=='vn'?'vi-VN':'en-US'
            let _requestjs = {"memberId":Number(config[_env].memberId[_game]),"memberName":"0rZsA4xu","language":"vi-VN","currency":"INH","seq":"d,y,lumi","siteName":"lumi","siteId":"4100300","ip":"10.0.0.142","browserUserAgent":userAgent,"auth":{"clientId":"vgsimulator","clientSecret":"vgsimulator@20luminet&"},"token":null,"redirectUrl":"http://l2-games1.lumigame.com/?token=5d9671a9-5291-463c-bf13-0d407ccf8167&lang=vi-VN&gameId=0","verifyResult":null,"gameId":0,"setting":{"apiUrl":"http://l2_game_api_local_1:5000","authUrl":"http://l2_auth_api_local_1:5000","client":{"id":"game-server","secret":"gameserver@20luminet&"},"expireIn":1631588169,"useAuthenticate":true,"requestTimeout":10000,"owUrl":"https://l2-ows1.lumigame.com/SabaClub/CreateCustomer","localhost":"http://localhost:7456","mobileLocalhost":"http://localhost:3000","port":5000},"domain":"example.com","localhost":null,"appType":1,"isCash":true,"resource":null}
            let res= await chai.request(config[_env].url).post("/sso").send(_requestjs)
            let obj = new Object()
            await console.log(res.text,res.status);
            if(res.status != 200) {
                await utils.sleep(10000)
                await console.log('re-sso');
                res= await chai.request(config[_env].url).post("/sso").send(_requestjs)
            }
            obj = await JSON.parse(res.text)
            await utils.navigate(obj.redirectUrl)
            await utils.sleep(7000)//Wait for login process
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
