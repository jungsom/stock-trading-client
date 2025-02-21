import Chart from 'react-apexcharts';
import useStockPrice from '../../hooks/useStockPrice';
import { useEffect, useState } from 'react';

const StockGraph = ({ code }: { code: string }) => {
  const stockPrice = useStockPrice(code);
  const [stockPrices, setStockPrices] = useState<number[]>([]);
  const [stockDates, setStockDates] = useState<string[]>([]);

  useEffect(() => {
    if (stockPrice) {
      setStockPrices((prev) => [...prev, stockPrice.currentPrice]);
      setStockDates((prev) => [
        ...prev,
        new Date(stockPrice.date).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      ]);
    }
  }, [stockPrice]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'line'
    },
    stroke: {
      width: 2
    },
    colors: ['#FF4560'],
    xaxis: {
      categories: stockDates,
      tickAmount: 25,
      labels: {
        style: {
          fontSize: '10px',
          fontFamily: 'NeoDunggeunmo',
          fontWeight: 200,
          cssClass: 'apexcharts-xaxis-label'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '10px',
          fontFamily: 'NeoDunggeunmo',
          fontWeight: 200
        }
      }
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '10px',
        fontFamily: 'NeoDunggeunmo'
      },
      marker: {
        show: false
      }
    }
  };
  var series = [
    {
      name: `${code}`,
      data: stockPrices
    }
  ];

  return (
    <>
      <Chart
        options={options}
        series={series}
        type='line'
        width='840'
        height='200'
      />
    </>
  );
};

export default StockGraph;
