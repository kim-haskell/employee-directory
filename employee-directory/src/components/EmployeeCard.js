import React, { Component } from "react";
import Navbar from "./Navbar";
import API from "../utils/API";
import "./styles.css";

class EmployeeCard extends Component {
    state = {
        employees: [{}],
        order: "descend",
        results: []
    };

    headings = [
       {name: "name"},
       {name: "image"},
       {name: "email"},
       {name: "phone"} 
    ]

  handleOrder () {
        if(this.setState === "descend") {
            this.setState ({
                order: "ascend"
            })
        } else {
            this.setState ({
                order: "descend"
            })
        }
    }


    componentDidMount () {
        API.getEmployees().then(results => {
            this.setState({
                employees: results.data.results,
                filterResults: results.data.results
            });
        });
    }

    // handleSearch = event => {

    //     const filterResults = this.state.employees.filter(this.setState ({ filterResults}));
    // }

    render (){
        return (
            <div>
                <Navbar handleSearch={this.handleSearch} />
                <div className="data-area">
                  < EmployeeCard
                  headings={this.headings}
                  employees={this.state.filterResults}
                  handleOrder={this.handleOrder}
                />  
                </div>
            </div>
        );
    }
} 

export default EmployeeCard;