/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockInitializableImpleInterface extends ethers.utils.Interface {
  functions: {
    "REVISION()": FunctionFragment;
    "initialize(uint256,string,uint256[])": FunctionFragment;
    "setValue(uint256)": FunctionFragment;
    "setValueViaProxy(uint256)": FunctionFragment;
    "text()": FunctionFragment;
    "value()": FunctionFragment;
    "values(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setValueViaProxy",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "text", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "values",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setValueViaProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;

  events: {};
}

export class MockInitializableImple extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockInitializableImpleInterface;

  functions: {
    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      val: BigNumberish,
      txt: string,
      vals: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValue(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValueViaProxy(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    text(overrides?: CallOverrides): Promise<[string]>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    val: BigNumberish,
    txt: string,
    vals: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValue(
    newValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValueViaProxy(
    newValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  text(overrides?: CallOverrides): Promise<string>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      val: BigNumberish,
      txt: string,
      vals: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setValue(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setValueViaProxy(
      newValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    text(overrides?: CallOverrides): Promise<string>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      val: BigNumberish,
      txt: string,
      vals: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValue(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValueViaProxy(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    text(overrides?: CallOverrides): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      val: BigNumberish,
      txt: string,
      vals: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValue(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValueViaProxy(
      newValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    text(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    values(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
