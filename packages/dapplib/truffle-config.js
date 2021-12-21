require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note place million hope open furnace gather'; 
let testAccounts = [
"0xa3c0c567bad0f3a0824430885df2459f450f28bfad50f81e8f6f60bd188f7f40",
"0x8ca52d39791b0dde6c55e6c544ce57decc87da93fac0d996e6afcb3f7ab4f2a2",
"0x3d6115981d271ccc6aa65183236e334088960a345b6db092eeb2517be7384e99",
"0x44595d6b352752a31057b698a8ed01b2084ed9ed178bf1e63e48c400b255dea0",
"0xf39fff2e9ee9f97722899e94a0534ebb74874f86f8471751c1b8c5058ded85bc",
"0x43fdb479ca7a6661f013dcfab0b5301d25fd96122eb7987dd4359222efbe2b1c",
"0x86fb02280efab9162547d3992404bebe1321f87c63ff01bda6abd812cc80db43",
"0xf309edc258d6b07d3f055be6c9d37b1d7aa2aadd296881e5f437775a38b3fe75",
"0xe7ae9a1c163083dcab13edc02a49303f57768bfa1bf36e2cf6e918cbb0d9e792",
"0x77f3ff4ae1305d31ad2076433d39cccb901e2da0576e39810fcf2ad4a2374bd2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

