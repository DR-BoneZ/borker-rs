/* tslint:disable */
export function processBlock(block: string, network: Network): BorkTxData[];

export enum BorkType {
  SetName = 'set_name',
  SetBio = 'set_bio',
  SetAvatar = 'set_avatar',
  Bork = 'bork',
  Comment = 'comment',
  Rebork = 'rebork',
  Extension = 'extension',
  Delete = 'delete',
  Like = 'like',
  Unlike = 'unlike',
  Flag = 'flag',
  Unflag = 'unflag',
  Follow = 'follow',
  Unfollow = 'unfollow',
  Block = 'block',
  Unblock = 'unblock',
}

export interface BorkTxData {
  time: string,
  txid: string,
  type: BorkType,
  nonce: number | null,
  position: number | null,
  referenceId: string | null,
  content: string | null,
  senderAddress: string,
  recipientAddress: string | null,
  mentions: string[],
  tags: string[],
}

export interface NewBorkData {
  type: BorkType,
  content?: string | null,
  referenceId?: string | null,
}

export interface Output {
  address: string,
  value: number,
}

export class JsWallet {

  free(): void;

  constructor(words?: string[]);

  words(): string[];

  childAt(derivationPath: number[]): JsChildWallet;

  toBuffer(): string;

  static fromBuffer(buf: string): JsWallet;

}

export enum Network {
  Dogecoin,
  Litecoin,
  Bitcoin,
}

export class JsChildWallet {

  free(): void;

  address(network: Network): string;

  newBork(
    data: NewBorkData,
    inputs: string[],
    recipient: Output | null,
    mentions: Output[],
    fee: number,
    network: Network,
    version?: number
  ): string[];

  constructSigned(
    inputs: string[],
    destination: string,
    amount: number,
    fee: number,
    network: Network,
  ): string;

}
