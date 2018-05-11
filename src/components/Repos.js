import React from 'react';

const Repos = (props) => {
  const { repos } = props;
  return (
    <div>
      <h2>github repos:</h2>
      <br/>
      <div id="repos">
        { repos ? (
          repos.map(repo => {
            return (
              <a key={repo.id} className="repo" href={repo.html_url}>
                <h4>{ repo.name }</h4>
                <p>Created: { repo.created_at.substring(0,10) }</p>
                <p>Last Updated: { repo.created_at.substring(0,10) }</p>
              </a>
            )
          })
        ) : (
          <div>incoming...</div>
        )}
        <span className="stretch"></span>
      </div>
    </div>
  )
}

export default Repos;
