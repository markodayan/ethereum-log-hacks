# Events

## `CanonicalTransactionChain.sol`

- <b>SequencerBatchAppended (emitted by `appendSequencerBatch()`)</b>

```prolog
    event SequencerBatchAppended(
        uint256 _startingQueueIndex,
        uint256 _numQueueElements,
        uint256 _totalElements
    );
```

- <b>L2GasParamsUpdated</b> (emitted by `function setGasParams()` )

```prolog
    event L2GasParamsUpdated(
        uint256 l2GasDiscountDivisor,
        uint256 enqueueGasCost,
        uint256 enqueueL2GasPrepaid
    );
```

- <b>TransactionEnqueued (emitted by `function enqueue()`)</b>

```prolog
    event TransactionEnqueued(
        address indexed _l1TxOrigin,
        address indexed _target,
        uint256 _gasLimit,
        bytes _data,
        uint256 indexed _queueIndex,
        uint256 _timestamp
    );
```

- <b>TransactionBatchAppended (emitted by `function _appendBatch()`)</b>

```prolog
    event TransactionBatchAppended(
        uint256 indexed _batchIndex,
        bytes32 _batchRoot,
        uint256 _batchSize,
        uint256 _prevTotalElements,
        bytes _extraData
    );
```
