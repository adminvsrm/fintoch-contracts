// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.10;

interface IInvestmentEarnings {

    event NotedWithdraw(uint64[] recordIds);
    event Liquidated(string orderId);
    event Processed(string orderId);

    function noteWithdrawal(uint64[] calldata recordIds) external;

    function liquidatedAssets(string calldata orderId) external;

    function processBorrowing(string calldata orderId) external;
}