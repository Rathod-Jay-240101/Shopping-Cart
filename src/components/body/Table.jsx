import React, {Component, Fragment} from 'react';
import {v4 as uuidv4} from "uuid";
import TableHeader from "./table/TableHeader.jsx";
import TableRow from "./table/TableRow.jsx";
import TableFooter from "./table/TableFooter.jsx";

class Table extends Component {

    decrementPriceCount = (productId) => {
        this.props.decrementPriceCount(productId);
    }

    incrementPriceCount = (productId) => {
        this.props.incrementPriceCount(productId);
    }

    getRows = () => {
        if(this.props.products.length === 0) {
            return <TableRow key={uuidv4()} message="Cart Is Currently Empty. Add Products In Cart"/>
        } else {
            return this.props.products.map((product) => {
                return <TableRow key={uuidv4()} product={product} incrementPriceCount={this.incrementPriceCount} decrementPriceCount={this.decrementPriceCount}/>
            })
        }
    }

    getTotal = () => {
        let total = 0;
        for (let product of this.props.products) {
            total = total + product.productCount * product.productPrice;
        }
        return total;
    }

    render = () => {
        return (<Fragment>
            <div className="table">
                <TableHeader/>
                {
                    this.getRows()
                }
                <TableFooter total={this.getTotal()}/>
            </div>
        </Fragment>);
    }

}

export default Table;
