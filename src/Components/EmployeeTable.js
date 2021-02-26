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
			{
					props.employees.map((e, i) => <tr key={i + "-row"}>
						<th scope="row"><img src={e.picture.thumbnail} alt={e.name.first}/></th>
						<td>{e.name.first} {e.name.last}</td>
						<td>{e.phone}</td>
						<td>{e.email}</td>
						<td>{new Date(e.dob.date).toLocaleDateString()}</td>
					</tr>)
				}
			</tbody>
		</table>
	);
}

export default EmployeeTable;