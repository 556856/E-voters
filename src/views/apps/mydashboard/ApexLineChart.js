import Chart from 'react-apexcharts'
import { ArrowDown, Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge, CardFooter } from 'reactstrap'

const ApexLineChart = ({ direction, success }) => {
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#7CFC00'],
      colors: [success]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: [success],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
      }
    },
    xaxis: {
      categories: [
        '04/7/12',
        '05/7/12',
        '06/7/12',
        '07/7/12',
        '08/7/12',
        '09/7/12',
        '10/7/12',
        '11/7/12',
        '12/7/12',
        '13/7/12',
        '14/7/12',
        '15/7/12',
        '16/7/12',
        '17/7/12',
        '18/7/12'
      ]
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
    }
  ]

  return (
    <Card>
       <CardHeader style={{display:'flex', justifyContent:'left', gap:'10px'}}>
       <Calendar />
       <h4 class="card-title">Voters</h4>
          </CardHeader>
      <CardFooter>
      <Chart options={options} series={series} type='line' height={400} />
      </CardFooter>
    </Card>
  )
}

export default ApexLineChart
