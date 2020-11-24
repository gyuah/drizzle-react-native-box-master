const Caver = require('caver-js')
const Contract = require('caver-js/packages/caver-contract')
const fs = require('fs')
const caver = new Caver('https://api.baobab.klaytn.net:8651/')


async function testFunction() {
    const me = caver.klay.accounts.privateKeyToAccount('pk') //private key 넣기
    caver.klay.accounts.wallet.clear();
    caver.klay.accounts.wallet.add(me);
    console.log(caver.klay.accounts.wallet[0])
    const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0];
    const abi = JSON.parse(fs.existsSync('deployedABI') && fs.readFileSync('deployedABI', 'utf8'));
    const ads = '0x35558F9330259c539274a92a9ab786dEa746aAc8'
    const contract = new caver.klay.Contract(abi, ads);
    //킥보드 대여 컨트랙트 호출
    const result = contract.methods.LendKickboard(10, 'hj', 5, 1, 1).send({
        from : walletInstance.address,
        gas: '3000000',
    })
    .on('error', function(hash){ console.log(hash)})
    .on('transactionHash', function(hash){ console.log(hash)})
    .on('receipt', function(receipt){console.log(receipt)});
}

async function getInformation() { //이것도 가스비 들고 있음 - 확실X
    const me = caver.klay.accounts.privateKeyToAccount('pk') //private key 넣기
    caver.klay.accounts.wallet.clear();
    caver.klay.accounts.wallet.add(me);
    console.log(caver.klay.accounts.wallet[0])
    const walletInstance = caver.klay.accounts.wallet && caver.klay.accounts.wallet[0];
    const abi = JSON.parse(fs.existsSync('deployedABI') && fs.readFileSync('deployedABI', 'utf8'));
    const ads = '0x35558F9330259c539274a92a9ab786dEa746aAc8'
    const contract = new caver.klay.Contract(abi, ads);
    const result = contract.methods.GetKickboard_devicenum(10).send({
        from : walletInstance.address,
        gas: '3000000',
    })
    .on('error', function(hash){ console.log(hash)})
    .on('transactionHash', function(hash){ console.log(hash)})
    .on('receipt', function(receipt){console.log(receipt)});
    console.log(result)
}

//함수 실행
//testFunction()
//getInformation()