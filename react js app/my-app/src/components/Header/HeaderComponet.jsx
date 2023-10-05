import React, { Component } from 'react';

class HeaderComponet extends Component {
    constructor(props){
        super(props)

        this.state ={
            
        }
    }


    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-extend-md navbar-dark bg-dark'>
                        <div><a href="" className='navbar-brand'> Employe Managment app</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponet;