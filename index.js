import { Component, render } from 'preact';
import { Provider, connect } from 'unistore/preact'
import createStore from 'stockroom'
import StoreWorker from 'worker-loader!./worker'

const store = createStore(new StoreWorker())

store.subscribe(console.log)

const PageBase = ({count, increment}) => (
    <div>
        Count : {count}
        <br />
        <button onClick={increment}>
            increment
        </button>
    </div>
)

const Page = connect(
    (state, props) => ({...state}),
    (state, props) => ({
        count: store.action('increment')
    })
)(PageBase)

const Foo = (
    <div>
        Hello World
    </div>
);

export default Foo;
