export interface Trade {
    id: number;
    code: string;
    quantity: number;
    price: number;
    type: 'BUY' | 'SELL';
    userId: number;
  };