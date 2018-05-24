var contractABI = /* Paste ABI here */;

var contractAddr = '';

var estGas = /* Gas estimate here */;
var gasPrice = web3.toWei(10, 'gwei'); // Gas price
var accountNonce = 4; // Nonce to use

var contractObj = web3.eth.contract(contractABI).at(contractAddr);

var contractData = contractObj.enableTransfers.getData(false);

var sTx = eth.signTransaction({
     from: web3.eth.accounts[0],
     to: contractAddr,
     data: contractData, 
     gas: estGas,
     gasPrice: gasPrice,
     value: '0',
     nonce: accountNonce
   });

console.log(JSON.stringify(sTx, null, 4));
