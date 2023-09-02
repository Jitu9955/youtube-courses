import React, { Fragment,useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course || Jitendra"
      },[]);

      const [course,setCourse]=useState({});
      //form handler function
      const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();

    };
        //creating function to post data server
        const postDatatoServer=(data)=>{
          axios.post(`${base_url}/courses`,data).then(
           (response)=>{
              console.log(response);
              console.log("success");
              toast.success("course added successfully");
              setCourse({id:"", title:"",description:""});
           },
           (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error ! something went wrong");
           } 
          )
        }
    return(
        <Fragment>
        <h1 className="text-center my-3">fill course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here"  name="userId" id="userId" onChange={(e)=>{
                        setCourse({...course,id:e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course title</label>
                    <Input type="text" placeholder="Enter title here" id="title"
                        onChange={(e)=>{
                            setCourse({...course,title:e.target.value})
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}}
                        onChange={(e)=>{
                            setCourse({...course,description:e.target.value});
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button  type ="reset"  onClick={()=>{
                        setCourse({id:"", title:"",description:""});
                    }} color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCourse;