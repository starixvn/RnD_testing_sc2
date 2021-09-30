export const setting ={
     browser: 'chromium',
     viewport: {
        // UI
        width : 1280,
        height : 720
    },
    timeout : 90000,
    loop : 90,
    headless: true,
}

export const cf_local ={
    url: "https://l2-glbs1.lumigame.com/signin",
    usernameSSO: "",
    memberId: {
        BlackJack : "1001051",
        Sedie : "1001052",
        VipSedie : "1001053",
        Sicbo:  "1001054",
        Keno:  "1001055",
        Baccarat:  "1001056",
        Roulette:  "1001057",
        BigSmall : "1001058",
        MiniSedie: "1001059",
        TurboBigSmall: "1001060",
        TurboOddEven: "1001061",
        SedieWar: "1001062",
        BigSmallSicbo: "1001063",
        FourGuardians: "1001064"
    },
    password: "",
    gamelobbyurl: "",
    urlWebsocket: "wss://l2-proxy1.lumigame.com/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://l2-games1.lumigame.com",
    protocol: "wss",
    retrieveEndGame : "https://l2-ows1.lumigame.com/SabaClub/RetrieveEndGameInfo",
    setBalance : "https://l2-ows1.lumigame.com/SabaClub/CreateCustomer"
}

export const cf_local1 ={
    url: "https://l1-glbs1.lumigame.com/signin",
    usernameSSO: "",
    memberId: {
        BlackJack : "1001051",
        Sedie : "1001052",
        VipSedie : "1001053",
        Sicbo:  "1001054",
        Keno:  "1001055",
        Baccarat:  "1001056",
        Roulette:  "1001057",
        BigSmall : "1001058",
        MiniSedie: "1001059",
        TurboBigSmall: "1001060",
        TurboOddEven: "1001061",
        SedieWar: "1001062",
        BigSmallSicbo: "1001063",
        FourGuardians: "1001064"
    },
    password: "",
    gamelobbyurl: "",
    urlWebsocket: "wss://l1-proxy1.lumigame.com/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://l1-games1.lumigame.com",
    protocol: "wss",
    retrieveEndGame : "https://l1-ows1.lumigame.com/SabaClub/RetrieveEndGameInfo",
    setBalance : "https://l1-ows1.lumigame.com/SabaClub/CreateCustomer"
}

// export const cf_local1 ={
//     url: "https://gamelobby-simulator.lumigame.com/signin",
//     usernameSSO: "",
//     memberId: {
//         BlackJack : "1001051",
//         Sedie : "1001052",
//         VipSedie : "1001053",
//         Sicbo:  "1001054",
//         Keno:  "1001055",
//         Baccarat:  "1001056",
//         Roulette:  "1001057",
//         BigSmall : "1001058",
//         MiniSedie: "1001059",
//         TurboBigSmall: "1001060",
//         TurboOddEven: "1001061",
//         SedieWar: "1001062",
//         BigSmallSicbo: "1001063",
//         FourGuardians: "1001064"
//     },
//     password: "",
//     gamelobbyurl: "",
//     urlWebsocket: "wss://l1-proxy.lumigame.com/roulette/socket.io/?EIO=3&transport=websocket",
//     urlOrigin: "https://gamelobby-simulator.lumigame.com",
//     protocol: "wss",
//     retrieveEndGame : "https://owapi-simulator.lumigame.com/SabaClub/RetrieveEndGameInfo",
//     setBalance : "https://owapi-simulator.lumigame.com/SabaClub/CreateCustomer"
// }

export const cf_sit ={
    url: "http://athena000web.playthefun.com:3011/onelogin.aspx?id=supper",
    username: {
        BlackJack : "vntestvg0001",
        Sedie : "vntestvg0002",
        VipSedie : "vntestvg0003",
        Sicbo:  "vntestvg0004",
        Keno:  "vntestvg0005",
        Baccarat:  "vntestvg0006",
        Roulette:  "vntestvg0007",
        BigSmall : "vntestvg0008",
        MiniSedie: "vntestvg0009",
        TurboBigSmall: "vntestvg0010",
        TurboOddEven: "vntestvg0011"
    },
    password: "1234aaAA",
    gamelobbyurl: "http://athena000web.playthefun.com:3011/GamePage.aspx?Game=VGaming&refer=",
    urlWebsocket: "wss://l2uatproxy.sgamesuat.com/sit/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://l2sit.sgamesuat.com",
    protocol: "wss"
}

export const cf_uat ={
    url: "http://demo:one23@qawer.viva88.com:6100/Login/",
    username: {
        BlackJack : "IT55Test789",
        Sedie : "IT56Test789",
        VipSedie : "IT57Test789",
        Sicbo:  "IT58Test789",
        Keno:  "IT59Test789",
        Baccarat:  "IT60Test789",
        Roulette:  "IT61Test789",
        BigSmall : "IT62Test789",
        MiniSedie: "IT63Test789",
        TurboBigSmall: "IT64Test789",
        TurboOddEven: "IT65Test789"
    },
    password: "1234aaAA",
    gamelobbyurl: "/VendorGame/OpenSabaClub?GameID=0",
    urlWebsocket: "wss://uatproxy.sgamesuat.com/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://l1uat.sgamesuat.com"
}

export const cf_prod ={
    url: "https://www.viva88.net/login888.aspx",
    username: {
        BlackJack : "IT55Test789",
        Sedie : "IT56Test789",
        VipSedie : "IT57Test789",
        Sicbo:  "IT58Test789",
        Keno:  "IT59Test789",
        Baccarat:  "IT60Test789",
        Roulette:  "IT61Test789",
        BigSmall : "IT62Test789",
        MiniSedie: "IT63Test789",
        TurboBigSmall: "IT64Test789",
        TurboOddEven: "IT65Test789"
    },
    password: "1234aaAA",
    gamelobbyurl: "/VendorGame/OpenSabaClubLobby",
    urlWebsocket: "wss://proxy.sabagame.com/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://www.sabagame.com",
    protocol: "wss"
}