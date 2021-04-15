import React, {useEffect} from 'react'
import Axios from 'axios'


export default function DeleteUserByIdComponent(props) {

    useEffect(() => {
            delUser();
    })

    const delUser = () => {
        let id = props.match.params.id;
        Axios
          .delete("http://localhost:8090/admin/users/delete/" + id)
          .then((response) => {
            console.log(response.data);
          });
          window.location.href = "/usersList";
    }
    return (
        <></>
    )
}
