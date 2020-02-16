import Link from 'next/link';
import { useStoreActions, useStore } from 'easy-peasy';

const Header = () => {
  const setShowLoginModal = useStoreActions(
    actions => actions.modals.setShowLoginModal
  );
  const setShowRegistrationModal = useStoreActions(
    actions => actions.modals.setShowRegistrationModal
  );
  return (
    <div className="nav-container">
      <Link href="/">
        <a>
          <img src="/img/logo.png" alt="" />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setShowRegistrationModal()}>
              Sign up
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setShowLoginModal()}>
              Log in
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          display: block;
          float: left;
        }

        a {
          text-decoration: none;
          display: block;
          margin-right: 15px;
          color: #333;
        }

        nav a {
          padding: 1em 0.5em;
        }

        .nav-container {
          border-bottom: 1px solid #eee;
          height: 50px;
        }

        img {
          float: left;
          height: 50px;
        }

        ul {
          float: right;
        }
      `}</style>
    </div>
  );
};

export default Header;
