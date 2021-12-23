require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind hospital good enter blue sugar'; 
let testAccounts = [
"0x2781fe14074b89dd559274e8d35364e7e96ddebd9215aa834142a417c1986af5",
"0x4812068e736998bdb1882fd8b8360f19a894d3699598bd0bff61cb7961103f17",
"0x7054aa16b8655aac6ccc5cfda06f58573becd805db756f8ccf9b980cf35b9988",
"0xe5c49dde30357c764bdc7fd2dc9168eda78d828248d27c98a855d83cd5ca6ffd",
"0x93b10cd2ea66d18d9fd8e812c661e66591e3d81abc663e20066c3f2597e1b4ee",
"0x7f12b83da533ce789e3d6480b773b90fe4522667c31ab8f2012a1dc3ee116fad",
"0xf08b1e0c0542cd941e20100d40370c2f995aeca66b2f16a58f19dfa4fb7f5989",
"0xb4bcb0bafbe43b48edc044a137c7e99ed4dcb837de1e4559a61ffc959a2ce1b1",
"0xcf168e9a2c74ed6aa6f23958af317231843b441496acf4ee30f4d74727f0a7b3",
"0xc91a7859bbd154dd49011a4f2df1726575699ceb66e5789953fcb2c9ff4585f0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


