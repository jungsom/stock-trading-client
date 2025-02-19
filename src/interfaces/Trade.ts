export interface Trade {
  id: number;
  code: string;
  quantity: number;
  price: number;
  type: 'BUY' | 'SELL';
  userId: number;
}

export interface TradeHistory {
  id: number;
  code: string;
  quantity: number;
  price: number;
  type: 'ALL_TRADE' | 'SPLIT_TRADE';
  seller: number;
  buyer: number;
}
