
const EmployeeTable = ({ filteredEmployees, headings, handleSort }) => {
	function formatDate(date) {
	  const dateArray = date.split("-");
	  const year = dateArray[0];
	  const month = dateArray[1];
	  const dayArray = dateArray[2].split("T");
	  const day = dayArray[0];
	  const formattedDate = [month, day, year].join("-");
	  return formattedDate
	}
	return (
	  <table id="table" className="table table-striped table-hover">
		<thead className="thead-dark">
		  <tr>
			{headings.map(({ name, width }) => {
			  return (
				<th
				  className="col"
				  key={name}
				  style={{ width }}
				  onClick={() => {
					handleSort(name.toLowerCase());
				  }}
				>
				  {name}
				  <span className="pointer"></span>
				</th>
			  );
			})}
		  </tr>
		</thead>
		<tbody>
		  {filteredEmployees[0] !== undefined && filteredEmployees[0].name !== undefined ? (
			filteredEmployees.map(({ login, name, picture, phone, email, dob }) => {
			  return (
				<tr key={login.uuid}>
				  <td data-th="Image" className="align-middle">
					<img
					  src={picture.medium}
					  alt={"profile image for " + name.first + " " + name.last}
					  className="img-responsive"
					/>
				  </td>
				  <td data-th="Name" className="name-cell align-middle">
					{name.first} {name.last}
				  </td>
				  <td data-th="Phone" className="align-middle">
					{phone}
				  </td>
				  <td data-th="Email" className="align-middle">
					<a href={"mailto:" + email} target="__blank">
					  {email}
					</a>
				  </td>
				  <td data-th="DOB" className="align-middle">
					{formatDate(dob.date)}
				  </td>
				</tr>
			  );
			})
		  ) : (
			  <></>
			)}
		</tbody>
	  </table>
	);
}
export default EmployeeTable;






// const EmployeeTable = ({filteredEmployees, headings, handleSort}) => {
	
// 	return (
// 		<table className="table table-hover text-center">
// 			<thead className="thead-dark">
// 				<tr>
// 					<th scope="col">Image</th>
// 					<th scope="col">Name</th>
// 					<th scope="col">Phone</th>
// 					<th scope="col">Email</th>
// 					<th scope="col">D.O.B</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 			{
// 					props.employees.map((e, i) => <tr key={i + "-row"}>
// 						<th scope="row"><img src={e.picture.thumbnail} alt={e.name.first}/></th>
// 						<td>{e.name.first} {e.name.last}</td>
// 						<td>{e.phone}</td>
// 						<td>{e.email}</td>
// 						<td>{new Date(e.dob.date).toLocaleDateString()}</td>
// 					</tr>)
// 				}
// 			</tbody>
// 		</table>
// 	);
// }