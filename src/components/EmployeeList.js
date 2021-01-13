import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import API from "../utils/API";
class EmployeeList extends React.Component {

    //true means A first DSC
    state = {
        employees: [],
        orderBool: true
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.get()
          .then(res => {
              console.log(res);
              this.setState({ employees: res.data.results })
              this.sortEmployeesName()
          })
          .catch(err => console.log(err));
      };

    sortEmployeesName = () => {
        console.log("clicked");
        console.log(this.state.orderBool);
        if (this.state.orderBool === true) {
        this.setState({
            employees: this.state.employees.sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0)),
            orderBool: false
        });
        } else {
            this.setState({
                employees: this.state.employees.sort((a,b) => (a.name.first < b.name.first) ? 1 : ((b.name.first < a.name.first) ? -1 : 0)),
                orderBool: true
            });
        }
    }

    sortEmployeesPhone = () => {

    }

    sortEmployeesEmail = () => {

    }

    render(){
        return(
            <div>
                <Container style={{backgroundColor: "white"}}>
                    <Row style={{textAlign: "center", paddingTop: "5px"}}>
                    <Col>
                        <strong><h4>Image</h4></strong>
                    </Col>
                    <Col>
                        <button onClick = {this.sortEmployeesName}>Name</button>
                    </Col>
                    <Col>
                        <strong><button>Phone</button></strong>
                    </Col>
                    <Col>
                        <strong><button>Email</button></strong> 
                    </Col>
                    </Row>
                    {
                        this.state.employees.map(employee => (
                        <Row key = {employee.cell}>
                            <Col>
                            <img src={employee.picture.thumbnail} alt ="image"/>
                            </Col>
                            <Col>
                        <strong><h4>{employee.name.first}</h4></strong>
                            </Col>
                            <Col>
                        <strong><h4>{employee.cell}</h4></strong>
                            </Col>
                            <Col>
                        <strong><h4>{employee.email}</h4></strong> 
                            </Col>
                        </Row>
                        ))
                    }
                </Container>
            </div>
        );
    };
}

export default EmployeeList;