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
        Sicbo:  "",
        Keno:  "",
        Baccarat:  "",
        Roulette:  "vntestvg0007",
        BigSmall : "vntestvg0008",
        MiniSedie: "vntestvg0009",
        TurboBigSmall: "vntestvg0010",
        TurboOddEven: "vntestvg0011",
        SedieWar: "vntestvg0005",
        BigSmallSicbo: "vntestvg0006",
        FourGuardians: "vntestvg0004"
    },
    password: "1234aaAA",
    gamelobbyurl: "http://athena000web.playthefun.com:3011/GamePage.aspx?Game=VGaming&refer=",
    urlWebsocket: "wss://l2uatproxy.sgamesuat.com/sit/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://l2sit.sgamesuat.com",
    protocol: "wss"
}

export const cf_uat ={
    url: "http://qa2.athena000.com/onelogin.aspx?id=supper",
    username: {
        BlackJack : "TestSep2740",
        Sedie : "TestSep2741",
        VipSedie : "TestSep2742",
        Sicbo:  "TestSep2743",
        Keno:  "TestSep2744",
        Baccarat:  "TestSep2745",
        Roulette:  "TestSep2746",
        BigSmall : "TestSep2747",
        MiniSedie: "TestSep2748",
        TurboBigSmall: "TestSep2749",
        TurboOddEven: "TestSep2750",
        SedieWar: "TestSep2738",
        BigSmallSicbo: "TestSep2739",
        FourGuardians: ""
    },
    password: "1234aa",
    gamelobbyurl: "/GamePage.aspx?Game=VGaming&refer=",
    urlWebsocket: "wss://l2uatproxy.sgamesuat.com/uat/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://l2uat.sgamesuat.com"
}

export const cf_prod ={
    url: "http://www.athena-demo-online.com/onelogin.aspx?id=supper",
    username: {
        BlackJack : "",
        Sedie : "",
        VipSedie : "",
        Sicbo:  "",
        Keno:  "",
        Baccarat:  "",
        Roulette:  "",
        BigSmall : "",
        MiniSedie: "",
        TurboBigSmall: "",
        TurboOddEven: "",
        SedieWar: "",
        BigSmallSicbo: "",
        FourGuardians: ""
    },
    password: "1234aa",
    gamelobbyurl: "http://member.athena-demo-online.com/GamePage.aspx?Game=VGaming&refer=",
    urlWebsocket: "wss://proxy.v-gaming.net/roulette/socket.io/?EIO=3&transport=websocket",
    urlOrigin: "https://www.v-gaming.net",
    protocol: "wss"
}