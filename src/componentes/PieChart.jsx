import { ResponsivePie } from '@nivo/pie'
import { tokens } from '../theme'
import { useTheme } from '@mui/material'
import { mockPieData as data } from "../data/mockData";

import React from 'react'

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:colors.grey[100]
                    }
                },
                legend:{
                    text:{
                        fill:colors.grey[100]
                    }
                },
                ticks:{
                    line:{
                        stroke:colors.grey[100],
                        strokeWidth:1
                    },
                    text:{
                        fill:colors.grey[100]
                    }
                }
            },
            legends:{
                text:{
                    fill:colors.grey[100]
                }
            }
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-107}
        sortByValue={true}
        innerRadius={0.55}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set1' }}
        borderWidth={4}
        borderColor={{ theme: 'background' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.8'
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default PieChart