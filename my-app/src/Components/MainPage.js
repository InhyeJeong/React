import React, { Component } from 'react';
import { Table, Tag } from 'element-react';
import 'element-theme-default';

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: [
				{
					label: "Date",
					prop: "date",
					width: 180
				},
				{
					label: "Name",
					prop: "name",
					width: 180
				},
				{
					label: "Address",
					prop: "address"
				},
				{
					label: 'Tag',
					prop: 'tag',
					width: 100,
					filters: [{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }],
					filterMethod(value, row) {
														return row.tag === value;
													},
					render: (data, column)=>{
						if (data['tag'] === 'Home') {
							return <Tag type="primary">{data['tag']}</Tag>
						} else if (data['tag'] === 'Office') {
							return <Tag type="success">{data['tag']}</Tag>
						}
					}
				}
			],
			data: [{
				date: '2016-05-03',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Home'
			}, {
				date: '2016-05-02',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Office'
			}, {
				date: '2016-05-04',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Home'
			}, {
				date: '2016-05-01',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Office'
			}]
		}
	}

	render() {
		return (
			<Table
				style={{width: '100%'}}
				columns={this.state.columns}
				data={this.state.data}
				border={true}
			/>
		)
	}
}

export default MainPage;