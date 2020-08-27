import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles.css";

class EmployeeCard extends Component {
    state = {
        employees: [{}],
        order: "descend",
        results: [{}]
    };


   Table = ({ headings, employees, handleOrder }) => {
    return (
        <div className="datatable mt-5">
          <table
            id="table"
            className="table table-striped table-hover table-condensed"
          >
            <thead>
              <tr>
                {headings.map(({ name, width }) => {
                  return (
                    <th
                      className="col"
                      key={name}
                      style={{ width }}
                      onClick={() => {
                        handleOrder(name.toLowerCase());
                      }}
                    >
                      {name}
                      <span className="pointer"></span>
                    </th>
                  );
                })}
              </tr>
            </thead>
    
            <EmployeeCard employees={employees} />
          </table>
        </div>
      );
   }


  handleOrder = heading => {
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