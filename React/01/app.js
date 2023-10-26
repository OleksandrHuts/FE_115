const url = 'http://www.omdbapi.com/?apikey=88150c8c';
const options = {
    method: 'GET'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchResults: []
        }
    }

    inputHandler = (event) => {
        event.preventDefault();
        this.setState({
            searchValue: event.target.value
        })
    }

    searchHandler = (event) => {
        event.preventDefault();
        let localUrl = `${url}&s=${this.state.searchValue}`;

        fetch(localUrl, options)
            .then(res => res.json())
            .then(res => this.setState({ searchResults: res.Search }))
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="row p-2 mt-2">

                        <div className="col-8">
                            <input type="search" className='form-control' onChange={this.inputHandler}/>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-info" onClick={this.searchHandler}>Search</button>
                        </div>
                    </div>
                    <div className="row p-2 mt-2">
                        <div className="col-4">
                            <h1>Results for: {this.state.searchValue} <span class="badge bg-secondary">{this.state.searchResults.length} items</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))