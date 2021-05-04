import React from 'react';
import Marquee from 'react-text-marquee';
/**
 * This Component is used to create Home Page
 * Author: Shakamuri Sushma
 */
class Home extends React.Component {
    /**
     * props are variabes passed to it by parent component. 
     */
    constructor(props) {
        super(props);
    }
    /**
     * The render method tells react what to display.
     */
    render() {
        /**
         * This return method gives the output of method or a function.
         */
        return (
            <div className="bng">
                <center>
                    <h1>Multi-Client Offering Client Services</h1>
                    <br/>
                    <h5>Experience the life style......</h5>
                    <br/>
                    <h3>2020 CAPGEMINI 'Creators Of Positive Future'</h3>
                </center>            
                <div className="home">       
                </div>
                <div>
                    <center><h2>Thank You For visiting :)</h2></center>
                </div>               
            </div>
        );
    }
}
export default Home;