import { Provider } from 'noob-ethereum';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

import ctc from './registry';

const provider = Provider.init(process.env.THIRD_PARTY_HTTP);

// Here we will fetch a transaction receipt corresponding to a sequencer contract call that emitted the appendSequencerBatch event, we will fetch the transaction and the log, and decode the values.

async function findSpecificLogInTransaction(transactionHash: string, eventLabel: string) {
  const receipt = await provider.getTransactionReceipt(transactionHash);

  // get the relevant args array for the log topic in question ('SequencerBatchAppended')
  // const emitted_event = ctc.events.find((ev: any) => ev.name === 'SequencerBatchAppended');
  const emitted_event = ctc.events.find((ev: any) => ev.name === eventLabel);

  const log = receipt.logs.find((l: any) => l.topics.includes(emitted_event.topic));

  const logValues = ethers.utils.defaultAbiCoder.decode(emitted_event.args, log.data);

  console.log(logValues);
}

findSpecificLogInTransaction(
  '0xfeeb8ca067686d2797d95c89a86c18e0945c6cdcfa1e82978b015f8e3ce3a62f',
  'SequencerBatchAppended'
);
findSpecificLogInTransaction(
  '0xfeeb8ca067686d2797d95c89a86c18e0945c6cdcfa1e82978b015f8e3ce3a62f',
  'TransactionBatchAppended'
);
