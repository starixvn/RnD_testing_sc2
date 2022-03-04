const game = "KenoProMax"
const addContext = require('mochawesome/addContext')
import * as utils from '../../util/utils'
import * as KenoProMaxFunc from './KenoProMax_Function'
let RouletteLocator = (process.env.npm_config_lang  == 'en' ? require('./KenoProMax_Locator').RouletteLocator_en : require('./KenoProMax_Locator').RouletteLocator_vn)
import * as GameLobbyFunc from '../References/GameLobby_Function'
import * as ResultFunc from '../References/Result_Function'

describe('KenoProMax Game', ()=>{

  before(async function(){
    await utils.wsHearMessageOn()
    await utils.Login(env,game);
  })

  afterEach(async function(){
    if(this.currentTest.state == 'failed'){
      var __filename = this.currentTest.title.trim()
      await page.screenshot({ path: `./Report/${lang}/Pictures/${game}_${__filename}.png`});
      await addContext (this,`./Pictures/${game}_${__filename}.png` )
    }
  })

 it('TC_01_Full_Smoke_Verify can open game from lobby and nagvigation of statistic bar', async () => {
   await KenoProMaxFunc.VerifySignInSuccessfully()
    }) 

   it('TC_02_Smoke_Verify Full Bet Choices', async () => {
  await KenoProMaxFunc.waitUtilNewRound()
  let stake = 20
  let Apos = ['Big','Odd']
  for (let i of Apos){
    await KenoProMaxFunc.PlaceBet(i,stake)
    await KenoProMaxFunc.VerifyBetStake(i,stake)
  }
  await KenoProMaxFunc.CheckSettleBalance()
  }) 

  it('TC_03_Smoke_Verify Full Bet Choices', async () => {
    await KenoProMaxFunc.waitUtilNewRound()
    let stake = 50
    let Apos = ['Gold','Wood','Water','Fire','Earth']
    for (let i of Apos){
      await KenoProMaxFunc.PlaceBet(i,stake)
      await KenoProMaxFunc.VerifyBetStake(i,stake)
    }
    await KenoProMaxFunc.CheckSettleBalance()
    await KenoProMaxFunc.CheckRoundHistory()
    }) 
 
  it('TC_04_Full_Smoke_Verify Close Game Success', async () => {
    await KenoProMaxFunc.CloseGame()
  }) 

})

