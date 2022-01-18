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
        await utils.selectDrp(MemberSiteLocator.drpLanguage,MemberSiteLocator.optLanguage)
        await utils.waitForLoadState()
        // await utils.navigate(config[_env].url)
        // await utils.waitForLoadState()
        

        // Input Username and Password
        await utils.sendKeys(MemberSiteLocator.txtUsername,config[_env].username[_game])
        //await utils.sendKeys(MemberSiteLocator.txtPassword,config[_env].password)
        

        await utils.sleep(1000)

        // Enter Login button
        if(_env == 'cf_prod'){
            await utils.clickEl(MemberSiteLocator.btnLoginPro)
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
            const cflang = process.env.npm_config_cf_lang=='vn'?'vi-VN':'en-US'
            let gameid = config.setting.gameIdlocal[_game]
            let _requestjs = {"memberId": Number(config[_env].memberId[_game]),"memberName":"UdCApuxt","language":cflang,"currency":"INH","seq":"d,y,lumi","siteId":"4100300","siteName":"lumi","ip":"10.0.0.142","browserUserAgent":userAgent,"auth":{"clientId":"vgsimulator","clientSecret":"vgsimulator@20luminet&"},"token":null,"redirectUrl":"#","verifyResult":null,"gameId":gameid,"setting":{"apiUrl":"http://l2_game_api_local_1:5000","authUrl":"http://l2_auth_api_local_1:5000","client":{"id":"game-server","secret":"gameserver@20luminet&"},"expireIn":1629190238,"useAuthenticate":true,"requestTimeout":10000,"owUrl":"https://l2-ows2.lumigame.com/SabaClub/CreateCustomer","localhost":"http://localhost:7456","mobileLocalhost":"http://localhost:3000","port":5000},"domain":"example.com","localhost":null,"appType":1,"resource":null}
            let res = await chai.request(config[_env].url).post("/sso").send(_requestjs)
            await chai.request(config[_env].setBalance).post("/").set('content-type', 'application/x-www-form-urlencoded')
            .send(`ObCustId=${config[_env].memberId[_game]}&Balance=200000.00&MinBet=10.00&MaxBet=20000.00&Delay.GetBalance=0&Delay.PlaceBet=0&Delay.EndGame=0&Delay.GetBetLimit=0&ErrorCode.GetBalance=0&ErrorCode.PlaceBet=0&ErrorCode.EndGame=0&ErrorCode.GetBetLimit=0&__RequestVerificationToken=CfDJ8NJR82vR_UtHmvIkoBmdwR7_lNNt0xzsRguQk7UuNpfB2fTbZujU3blCQUcHI3xTLUUFo6343fSnLJvxjm102JfVu6zg_SuILb9CzWy_1Ap3cJFi0_-DY2rid5RftdDxnC_ssGpgRDFS5z5fmy-BryU`)
            // Auto Create User if Not Existed
            let resSs = await chai.request(config[_env].proxy).get(`/user/auth/sso?token=${res.body.token}&system=1`).set("user-agent",userAgent)
            // console.log(resSs)
            let _requestChk = {"session": resSs.body.ss, "username": `vgsimulator_${config[_env].memberId[_game]}`, "browserUserAgent":userAgent}
            let _resCheckAuth = await chai.request(config[_env].proxy).post(`/user/auth/authorize`).set("Content-Type","application/json;charset=UTF-8")
            .set("Origin",config[_env].urlOrigin).set("User-Agent",userAgent).send(_requestChk)
            if(_resCheckAuth.body.user === null){
                // register if don't have account on user
                let _requestSignIn = {"avatar": 0,"browserUserAgent": userAgent,"nickname": `RT2${config[_env].memberId[_game]}`,"session": resSs.body.ss,"username": `vgsimulator_${config[_env].memberId[_game]}`}
                await chai.request(config[_env].proxy).post('/user/auth/signName').set("user-agent",userAgent).send(_requestSignIn)
            }
            
            // await utils.sleep(2000)
            let obj = new Object()
            console.log(res.text,res.status);
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
