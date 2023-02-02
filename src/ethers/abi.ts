import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.THIRD_PARTY_HTTP);

const address = '0x5e4e65926ba27467555eb562121fac00d24e9dd2'; // CanonicalTransactionChain contract address

const transactionHash = '0xfeeb8ca067686d2797d95c89a86c18e0945c6cdcfa1e82978b015f8e3ce3a62f';

// const contract = new ethers.Contract(address, abi, provider);

const abi = 'SequencerBatchAppended(uint256,uint256,uint256)';
const topic = ethers.utils.id(abi); // topic hash -  0x602f1aeac0ca2e7a13e281a9ef0ad7838542712ce16780fa2ecffd351f05f899
const v = ethers.utils.defaultAbiCoder.decode(
  ['uint256', 'uint256', 'uint256'],
  '0x00000000000000000000000000000000000000000000000000000000000456db0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000447cfe3'
); // [ BigNumber { _hex: '0x0456db', _isBigNumber: true }, BigNumber { _hex: '0x00', _isBigNumber: true }, BigNumber { _hex: '0x0447cfe3', _isBigNumber: true }]

console.log(v.map((val) => parseInt(val._hex, 16)));
console.log(['0x0456db', '0x00', '0x0447cfe3'].map((val) => parseInt(val, 16)));

export {};
