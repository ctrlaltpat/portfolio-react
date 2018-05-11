import React from 'react';

const Intro = (props) => {
  const { login, name, location, html_url } = props.moi;
  // const getAge = () => {
  //   const today = new Date();
  //   const bday = new Date("4/15/1989");
  //   const diff = today.getTime() - bday.getTime();
  //   const age = Math.floor(diff/1000)
  //   return age;
  // }
  return (
    <div id="intro">
      <h1>{ login }</h1>
      <br/>
      <p>Heya! My name is { name } and I'm a Web Developer based in { location }.</p>
      <p>I'm currently seeking opportunities for continuous growth and experience in modern web and software development.</p>
      <br/>
      <p>Check back soon for the link to my main website.</p>
      <br/>
      <ul id="icons">
        <li>
          <a href="https://twitter.com/ctrlaltpat"><i className="fab fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href={ html_url }><i className="fab fa-github" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="https://www.freecodecamp.com/ctrlaltpat"><i className="fab fa-free-code-camp" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="http://codepen.io/ctrlaltpat/"><i className="fab fa-codepen" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Intro;