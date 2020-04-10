import React, { Component } from 'react';
import RepoList from './List';

class Profile extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem;' }}>
                            <img class="card-img-top" src={this.props.userData.avatar_url} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.userData.name} </h5>
                                <h6 className="card-title">{this.props.userData.login} </h6>
                                <p className="card-text">{this.props.userData.bio}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Repos: {this.props.userData.public_repos}</li>
                                <li className="list-group-item"> Gists:  {this.props.userData.public_gists}</li>
                                <li className="list-group-item">Followers: {this.props.userData.followers}</li>
                                <li className="list-group-item">Location: {this.props.userData.location}</li>
                            </ul>
                            <div className="card-body">
                                <a href={this.props.userData.html_url} className="btn btn-primary">Deatils</a>

                            </div>
                        </div>

                    </div>

                    <div className="col-md-7">
                        <hr />
                        <h3 className="text-center card-header">{this.props.userData.login}'s Repositories</h3>
                        <RepoList userRepos={this.props.userRepos} />

                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;