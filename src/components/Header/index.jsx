import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

function Header() {

    return (
      <header>
          <div className="icon">
              <a href="https://github.com/brunosvx" target="_blank" ><FaGithub /> Github</a>
          </div>
          <nav>
              <ul>
                  <li>
                    <Link to="/">Chat</Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
              </ul>
          </nav>
      </header>
      )
  }
  
  export default Header
  