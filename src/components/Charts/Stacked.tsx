import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts'
import {
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from '../../data/dummy'

type Props = {
	width?: string
	height?: string
	currentMode?: string
}

const Stacked = ({ currentMode, width, height }: Props) => {
	return (
		<ChartComponent
			id='charts'
			primaryXAxis={stackedPrimaryXAxis as any}
			primaryYAxis={stackedPrimaryYAxis as any}
			width={width}
			height={height}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			background={currentMode === 'Dark' ? '#33373E' : '#fff'}
			legendSettings={{ background: 'white' }}>
			<Inject
				services={[StackingColumnSeries, Category, Legend, Tooltip]}
			/>
			<SeriesCollectionDirective>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}

export default Stacked
