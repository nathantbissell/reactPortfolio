import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class Landing extends Component {
  render() {
    return (
      <div className='container'>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://instagram.fzty1-1.fna.fbcdn.net/vp/d9d4bd1da97d86d122c66a5cd08ac202/5DA04B46/t51.2885-15/e35/s1080x1080/61411213_624638718050145_2295410649549424989_n.jpg?_nc_ht=instagram.fzty1-1.fna.fbcdn.net'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>
                Javascript | React | Java | ChartJS | D3 | MongoDB | Express
              </p>
              <div className='social-links'>
                <a
                  href='https://www.instagram.com/natebiss/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fab fa-instagram' />
                </a>
                <a
                  href='https://www.linkedin.com/in/nathan-bissell/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fab fa-linkedin' />
                </a>
                <a
                  href='https://github.com/nathantbissell'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fab fa-github' />
                </a>
                <a href='mailto: natebissmadethis@gmail.com'>
                  <i className='fas fa-inbox' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing
