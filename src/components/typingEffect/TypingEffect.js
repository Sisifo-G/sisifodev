import React from 'react';

export default class TypeEffect extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.stringItems = document.getElementsByClassName('items');
        this.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    }

    writingAll = () => {
        while (this.myRef.current.attributes[1]) {
            let myRef = this.myRef1.current;
            for (let i = 0; i < this.stringItems.length; i++) {
                const string = this.stringItems[i].textContent;
                this.write(string, myRef);
                this.sleep(1000);
                this.erase(myRef);
                this.sleep(1000);
            }
        }
    }

    async write(text, myRef) {
        let index = 0;
        while(index < text.length) {
            const timeout = 100;
            await this.sleep(timeout);
            index++;
            myRef.innerHTML = text.substring(0, index);
        }
    }

    async erase(myRef) {
        while(this.myRef.current.textContent.length) {
            const timeout = 100;
            await this.sleep(timeout);
            myRef.textContent = myRef.textContent.substring(0, myRef.textContent.length - 2);
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div ref={this.myRef} className="dataText" data-text></div>
                <span className="items">Hacer un comentario</span>
                <span className="items">Comentario 2</span>
                <span className="items">Comentario 2</span>
                <span className="items">SisifoDev</span>

                <button
                    className="btn btn-info">
                    Hola Mundo
                </button>
                {console.log(this.myRef, this.stringItems)}
                <h2>SisifoDev</h2>
            </div>
        );
    }
}