import React, { Component } from 'react';

class Repo extends Component {

  render() {
    const { repo } = this.props;
    return (
      <div>
        <br/>
        <div className="list-group">
          <a href={repo.html_url} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{repo.name}</h5>
            </div>
            <p className="mb-1">{repo.description}</p>
            <span className="badge badge-warning">{repo.language}</span>
          </a>

        </div>
      </div>
    );
  }
}

export default Repo;