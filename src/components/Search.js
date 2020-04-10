import React, { Component } from 'react';

class Search extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if (!username) {
            alert('Please Enter a username');
            return
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }

    render() {
        return (
          <div>
            <nav className="navbar fixed-top navbar navbar-expand-lg navbar-dark bg-dark bg-ligh">
              <div className="container">
                <a className="navbar-brand" href="#">NReality</a>
              </div>
            </nav>
            <div className="jumbotron bg-dark light">
              <div className="container">
                <p className="lead" style={{ color:"#fff"}}>Enter a Github username into the search box below</p>
                    <hr />

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" ref="username" placeholder="Enter a username..."></input>
                        </div>
                    </form>
              </div>

                  </div>
          </div>
        );
    }
}

export default Search;