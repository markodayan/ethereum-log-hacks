import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.THIRD_PARTY_HTTP);

const abi = 'SequencerBatchAppended(uint256,uint256,uint256)';

const address = '0x5e4e65926ba27467555eb562121fac00d24e9dd2'; // CanonicalTransactionChain contract address

const transactionHash = '0xfeeb8ca067686d2797d95c89a86c18e0945c6cdcfa1e82978b015f8e3ce3a62f';

// const contract = new ethers.Contract(address, abi, provider);

const topic = ethers.utils.id(abi);
