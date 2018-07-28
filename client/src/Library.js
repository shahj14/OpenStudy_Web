import React, {Component} from 'react';
// import './Library.css';

class Library extends Component{

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("db")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
            // var result = {
            //   items: [
            //     { id: 1, name: 'Apples', price: '$2' },
            //     { id: 2, name: 'Peaches', price: '$5' }
            //   ]
            // };
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>{items[0].number}
            <ul>
              {items.map(item => (
                <li key={item.number}>
                  {item.floor}
                </li>
              ))}
            </ul>
        </div>
      );
    }
  }
}

export default Library;
