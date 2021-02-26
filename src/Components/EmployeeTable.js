const EmployeeTable = (props) => {
	console.log(props)
	return (
		<table className="table table-hover text-center">
			<thead className="thead-dark">
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">D.O.B</th>
				</tr>
			</thead>
			<tbody>
				
			</tbody>
		</table>
	);
}

export default EmployeeTable;