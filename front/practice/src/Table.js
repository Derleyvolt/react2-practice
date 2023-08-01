let names = [ 'Joao', 'Leonardo', 'Zézinho', 'Derley', 'Nadiana' ]
let ages  = [21, 22, 23, 24, 25]
let height = [1.7, 1.55, 1.75, 1.88, 1.5]
let salaryPerMonth = [1000, 2000, 3000, 4000, 5000]

const genRandomProfile = () => {
    return {
        name: names[Math.floor(Math.random()*5)],
        age: ages[Math.floor(Math.random()*5)],
        height: height[Math.floor(Math.random()*5)],
        salary: salaryPerMonth[Math.floor(Math.random()*5)]
    }
}

function Table(props) {
    const profiles = Array(15).fill({}).map(e => genRandomProfile());

    let id = 0;

    return (
        <div className='d-flex justify-content-center h-100'>
            <div className="card col-10">
                <div className="card-header">
                    <h2> Lista de usuarios </h2>
                </div>

                <div className="card-body">
                    <table className="table table-striped table-bordered table-hover table-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Height</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                profiles.map((element, index) => {
                                    id += 1;
                                    return (
                                        <tr>
                                            <th> {id} </th>
                                            <td>{element.name}</td>
                                            <td>{element.age}</td>
                                            <td>{element.height}</td>
                                            <td>{element.salary}</td>
                                            <td> 
                                                <button className="btn btn-primary"> Edit </button> 
                                            </td>
                                            <td> 
                                                <button className="btn btn-danger"> Delete </button> 
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default Table;