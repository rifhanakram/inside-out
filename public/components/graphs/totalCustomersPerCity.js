import React from 'react';
import rd3 from 'rd3';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MetaDataTable from './meta/metaDataTable';
import 'whatwg-fetch';

const PieChart = rd3.PieChart;

const style = {
	width: '50%'
}

const NumberOfPurchasesByDay = React.createClass({
	getInitialState: function() {
		return {
			drawer: false,
			data: [],
			metaData: []
		}
	},

	componentDidMount: function() {
		let context = this;
		fetch('/api/total-customers-per-city')
		  .then(function(response) {
		    return response.json()
		  }).then(function(json) {
		    let data = json.message;
		    context.setState({
				data: data
			});
		    // return data;
		  }).catch(function(ex) {
		    console.log('parsing failed', ex)
		  });
	},

	render: function() {
		return (			
			<div>
				{ 
					this.state.data ? 
						<div>
							<div className="col-md-3 col-lg-3 col-xl-3">
								<MetaDataTable data={this.state.metaData} />
							</div> 
							<div className="col-md-9 col-lg-9 col-xl-9">
								<Card style={style}>	
									<PieChart
								      data={this.state.data}
								      width={450}
								      height={500} 
								      radius={200}
								      innerRadius={75}
								      sectorBorderColor="white"
								      title="" />
								</Card>
							</div>
						</div>
					: '' 
				}
		    </div>
		)
	}
});

export default NumberOfPurchasesByDay;
