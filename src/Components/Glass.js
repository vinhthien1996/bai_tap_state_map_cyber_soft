import React, { Component } from 'react';
import Header from './Header';
import Model from './Model';

let arrProduct = [
    { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
];

export default class Glass extends Component {

    state = {
        glass: { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        class: 'glass__review'
    }

    renderGlass = () => {
        return arrProduct.map( item => {
            return <img src={item.url} className="glass__img" alt="Glass" onClick={() => this.changeGlass(item)} key={item.id} />
        });
    }

    changeGlass = (item) => {
        this.setState({
            glass: item,
            class: this.state.class === 'glass__review' ? 'glass__review1' : 'glass__review'
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container__glass">
                    <div className="container__model">
                        <Model item={this.state.glass} class={this.state.class} />
                        <Model />
                    </div>

                    <div className="content__glass">
                        {this.renderGlass()}
                    </div>
                </div>
            </div>
        )
    }
}
