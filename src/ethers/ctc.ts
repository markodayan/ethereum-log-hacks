import { ethers } from 'ethers';
import ctc from './registry';

// eth_getLogs result for topic 'SequencerBatchAppended'  (there was only 1 log)
let log_one = {
  address: '0x5e4e65926ba27467555eb562121fac00d24e9dd2',
  blockHash: '0x1f671bbc14d3b241338aadd070c5c73444e84f1a64da34a5d33412aacf63a46a',
  blockNumber: '0xfc5ef5',
  data: '0x00000000000000000000000000000000000000000000000000000000000456db0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000447cfe3',
  logIndex: '0x145',
  removed: false,
  topics: ['0x602f1aeac0ca2e7a13e281a9ef0ad7838542712ce16780fa2ecffd351f05f899'],
  transactionHash: '0xfeeb8ca067686d2797d95c89a86c18e0945c6cdcfa1e82978b015f8e3ce3a62f',
  transactionIndex: '0x83',
};

const args = ctc.events.find((ev: any) => ev.name === 'SequencerBatchAppended').args;
// console.log(topic);

const log_values = ethers.utils.defaultAbiCoder.decode(args, log_one.data);

console.log(log_values);
console.log(log_values.map((val) => parseInt(val._hex, 16)));
