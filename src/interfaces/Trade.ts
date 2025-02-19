export interface Trade {
  price: number;
  totalQuantity: number;
  type: 'BUY' | 'SELL';
}

export interface TradeInput {
  code: string;
  quantity: number;
  price: number;
  type: 'BUY' | 'SELL';
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
