import React from 'react';
import './Footer.css';

//dashboard on the left side swaps out the center component.
//its functionality is replaced by the dropdown on mobile
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div>
              ACM by <a href="https://github.com/ahermida">Albert Hermida</a>
              <div>
                The website content is not my own.
              </div>
              <div>The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
              </div>
              <div><a href="mailto:ahermida@villanova.com">submit feedback</a></div>
              <div><a href="https://github.com/Space-Cadets/Puck">source code</a></div>
              <br />
              <br />
              -- Acknowledgements --
              <div>
                <a href="https://github.com/dsiah">Puff Daddy</a>
                <br/>
                <a href="https://github.com/kentkwu">Lil Bo Peep</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
