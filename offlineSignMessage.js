var msg = "";

console.log(web3.eth.sign(personal.listAccounts[0], web3.sha3(msg)));
