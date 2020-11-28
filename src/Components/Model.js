import React, { Component } from 'react'

export default class Model extends Component {
    
    render() {
        return (
            <div className="wrap__model">
                <img src="./glassesImage/model.jpg" className="glass__model" alt="Model" />
                {this.props.item ? <img src={this.props.item.url} className={this.props.class ? this.props.class : ''} /> : ''}
                {this.props.item ?     
                    <div className="info__glass">
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.desc}</p>
                    </div>
                : ''}
            </div>
        )
    }
}
