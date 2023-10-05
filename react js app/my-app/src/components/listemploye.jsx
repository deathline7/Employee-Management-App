// import React, { Component } from 'react';

// class listemploye extends Component {

//     state = {
//         post: null
//       };
    
//       componentDidMount() {
//         fetch('https://localhost8080/add.htm')
//           .then(response => response.json())
//           .then(data =>
//             this.setState({
//               post: data
//             })
//           )
//           .catch(error => console.error(error));
//       }

//     constructor(props){
//         super(props)

//         this.state ={
//             employes: []
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">Employe List</h2>
//                 <div className='row'>
//                     <table className='table table-striped table-bordered'>

//                     <thead>
//                     <tr>
//                         <th>Employee Frist name</th>
//                         <th>Employee last name</th>
//                         <th>Employe email id</th>
//                         <th>Actions</th>

//                     </tr>

//                     </thead>
//                     <tbody>
//                     {
//                         this.state.employes.map(
//                             employe =>
//                                 <tr key={employe.id}>
//                                     <td>{employe.fristName}</td>
//                                     <td>{employe.lastName}</td>
//                                     <td>{employe.emailid}</td>
//                                 </tr>
//                         )  
                        
//                     }

//                     </tbody>

//                     </table>
//                 </div>

                
//             </div>
//         );
//     }
// }

// export default listemploye;