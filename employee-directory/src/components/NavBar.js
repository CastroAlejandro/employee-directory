
const NavBar = () => {
	return (
		<table class="table table-hover text-center">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">D.O.B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Marc Young</td>
      <td>555-867-5309</td>
      <td>yeet@gmail.com</td>
      <td>10/12/1978</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
	  <td>Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
	);
}

export default NavBar;