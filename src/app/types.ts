export type Tx = {
  txid: string;
  version: number;
  vin: Vin[];
  vout: Vout[];
  blockHash: string;
  blockHeight: number;
  confirmations: number;
  blockTime: number;
  value: string;
  valueIn: string;
  fees: string;
  hex: string;
};

export type Vin = {
  n: number;
  isAddress: boolean;
  coinbase: string;
};

export type Vout = {
  value: string;
  n: number;
  spent?: boolean;
  hex: string;
  addresses: string[];
  isAddress: boolean;
};

export type Block = {
  page: number;
  totalPages: number;
  itemsOnPage: number;
  hash: string;
  previousBlockHash: string;
  nextBlockHash: string;
  height: number;
  confirmations: number;
  size: number;
  time: number;
  version: number;
  merkleRoot: string;
  nonce: string;
  bits: string;
  difficulty: string;
  txCount: number;
  txs: Tx[];
};

export type Address = {
  page: number;
  totalPages: number;
  itemsOnPage: number;
  address: string;
  balance: string;
  totalReceived: string;
  totalSent: string;
  unconfirmedBalance: string;
  unconfirmedTxs: number;
  txs: number;
  txids: string[];
}
