import React, { useEffect } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';

export default function DeleteUserByIdComponent(props) {
  useEffect(() => {
    delUser();
  });

  const delUser = () => {
    // calling redux function to fetch a particular id
    let id = props.match.params.id;
    Axios.delete('http://localhost:8090/admin/users/delete/' + id).then(
      (response) => {
        console.log(response.data);
      }
    );
  };
  return <Redirect to="/admin/usersList" />;
}
