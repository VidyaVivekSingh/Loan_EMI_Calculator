import React from "react";
import {Button} from 'reactstrap';
import './History.css'

export default class HistoryData extends React.Component {
    handleClick = (data) => {
        console.log(data);
        document.getElementsByClassName('form-control')[0].valueAsNumber = data.amount;
        document.getElementsByClassName('form-control')[1].valueAsNumber = data.month;
        document.getElementsByClassName('form-control')[2].valueAsNumber = data.emi;
        document.getElementsByClassName('form-control')[3].valueAsNumber = data.interest;
    }
    render() {

        return (
            <div className="sidebar__category container-fluid">
                <div className="row">
                    <div className='field row'>
                        <div className="col-3">AMOUNT</div>
                        <div className="col-3">MONTH</div>
                        <div className="col-2">EMI</div>
                        <div className="col-4">INTEREST</div>
                    </div>
                </div>
                <div className="data col">
                    {this.props.categories.map((category, key) => (
                        <div className='history_navigation-items row'>
                            <div className="col-3"><span key={key}>{category.amount}</span></div>
                            <div className="col-3"><span key={key}>{category.month}</span></div>
                            <div className="col-2"><span key={key}>{category.emi}</span></div>
                            <div className="col-4"><span key={key}>{category.interest}</span></div>
                            <Button variant="primary" size="sm" type="submit" onClick={()=>this.handleClick(category)}>Get Result</Button>
                        </div>
                    ))}
                </div>
            </div >
        );
    }
}