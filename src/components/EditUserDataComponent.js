import React, { Component } from 'react'
import Axios from 'axios'
import NavBarComponent from './NavBarComponent';
import { withRouter } from "react-router-dom";

class EditUserDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.location.userName,
      userPassword: this.props.location.userPassword,
      userType: "GUSER",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let id = this.props.match.params.id;
    const user = {
      userId: id,  
      userName: this.state.userName,
      userPassword: this.state.userPassword,
      userType: this.state.userType,
    };
    Axios.put("http://localhost:8090/admin/users/modify/"+ user.userId, user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    this.props.history.push("/usersList");
  }

  render() {
     return (
       <div>
         <NavBarComponent />
         <div className="d-flex justify-content-center align-items-center">
           <form
             className="align-items-center justify-content-center border w-25 p-3"
             onSubmit={this.handleSubmit}
             method="post"
           >
             <fieldset>
               <div className="col-auto">
                 <label htmlFor="userName">
                   Username
                   <input
                     className="input-group from-group "
                     type="text"
                     name="userName"
                     value={this.state.userName}
                     onChange={this.handleChange}
                   />
                 </label>
               </div>
               <div className="col-auto">
                 <label htmlFor="userPassword">
                   Password
                   <input
                     type="text"
                     className="input-group from-group "
                     name="userPassword"
                     value={this.state.userPassword}
                     onChange={this.handleChange}
                   />
                 </label>
               </div>
               <div className="col-auto">
                 <label htmlFor="userType">
                   User Type
                   <select
                     className="form-control"
                     name="userType"
                     onChange={this.handleChange}
                   >
                     <option value="GUSER">General User</option>
                     <option value="WHMGR">Warehouse Manager</option>
                     <option value="ADMIN">Admin</option>
                   </select>
                 </label>
               </div>
               <div className="col-auto">
                 <button
                   type="submit"
                   value="Submit"
                   className="btn btn-primary mb-3"
                 >
                   Modify
                 </button>
               </div>
             </fieldset>
           </form>
         </div>
       </div>
     );
  }
}


export default withRouter(EditUserDataComponent)