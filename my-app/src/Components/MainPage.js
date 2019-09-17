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
					filters: [
						{ status: 'New', value: 'New' },
						{ status: 'Checked', value: 'Checked' },
						{ status: 'Solved', value: 'Solved' },
						{ status: 'Shared', value: 'Shared' },
					],
					filterMethod(value, row) {
						return row.tag === value;
					},
					render: (data, column) => {
						var type;
						switch (data['tag']) {
							case 'New':
								type = 'primary';
								break;
							case 'Checked':
								type = 'warning';
								break;
							case 'Solved':
								type = 'success';
								break;
							case 'Shared':
								type = 'danger';
								break;
							default:
								type = 'gray'
								break;
						}
						return <Tag type={type}>{ data['tag'] }</Tag>
					}
				}
			],
			data: [{
				date: '2016-05-03',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'New'
			}, {
				date: '2016-05-02',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Checked'
			}, {
				date: '2016-05-04',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Solved'
			}, {
				date: '2016-05-01',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles',
				tag: 'Shared'
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