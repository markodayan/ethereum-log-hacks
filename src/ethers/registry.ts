import { ethers } from 'ethers';

let registry = [
  {
    name: 'CanonicalTransactionChain',
    address: '0x5e4e65926ba27467555eb562121fac00d24e9dd2',
    events: [
      {
        name: 'SequencerBatchAppended',
        abi: 'SequencerBatchAppended(uint256,uint256,uint256)',
        args: ['uint256', 'uint256', 'uint256'],
      },
      {
        name: 'TransactionBatchAppended',
        abi: 'TransactionBatchAppended(uint256,bytes32,uint256,uint256,bytes)',
        args: ['uint256', 'bytes32', 'uint256', 'uint256', 'bytes'],
      },
      {
        name: 'L2GasParamsUpdated',
        abi: 'L2GasParamsUpdated(uint256,uint256,uint256)',
        args: ['uint256', 'uint256', 'uint256'],
      },
      {
        name: 'TransactionEnqueued',
        abi: 'TransactionEnqueued(address,address,uint256,bytes,uint256,uint256)',
        args: ['address', 'address', 'uint256', 'bytes', 'uint256', 'uint256'],
      },
    ],
  },
];

let contract_names = registry.map((con: any) => con.name);

let x = contract_names.map((name: string, idx: number) => {
  return {
    name,
    address: (registry as any)[idx].address,
    events: (registry as any)[idx].events.map((ev: any) => {
      return {
        name: ev.name,
        abi: ev.abi,
        args: ev.args,
        topic: ethers.utils.id(ev.abi),
      };
    }),
  };
});

// console.dir(x, { depth: null });

export default x[0];
