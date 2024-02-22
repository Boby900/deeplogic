import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getPosts } from '../services/SocialService';
import "../App.css";

const Posts = () => {
  const [students, setStudents] = useState([]);

  useEffect(() =>{
   let mounted = true;
   getPosts()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Likes</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.title}</td>
                <td>{stu.description}</td>
                <td>{stu.Like}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Posts;