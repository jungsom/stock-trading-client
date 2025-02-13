export interface Stock {
  id: number;
  name: string;
  code: string;
  category: string;
  index: string;
  latestHistory?: StockHistory
};

export interface StockHistory {
  code: string;
  currentPrice: number;
}