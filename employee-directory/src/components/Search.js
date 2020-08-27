import React, { Component} from "react";
import API from "../utils/API";


class Search extends Component  {
   state= {
       employees: [{}],
       order: "descend",
       filterResults: [{}]
   }

 headings = [
    {name: "name", width: "10%"},
    {name: "image", width: "10%"},
    {name: "email", width: "20%"},
    {name: "phone", width: "20%"} 
 ]




componentDidMount () {
    API.getEmployees().then(results => {
        this.setState({
           result: results.data.results.map((e, i) => ({
               picture: e.picture.medium,
               firstName: e.name.last,
               lastName: e.name.last,
               phone: e.phone,
               email: e.email,
               dob: e.dob.date,
               key: i
           })) 
        });
    })
    .catch(err => console.log(err));
 }

}

export default Search;