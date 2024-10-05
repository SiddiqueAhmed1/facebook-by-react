import { Link } from "react-router-dom";
import Helmets from "../../Helper/Helper";
import './Home.scss'
const Home = () => {
  return (
    <>
      <Helmets title={'Facebook - Log in or sign up'}/>
      <div className="fb-wrapper">
        <div className="fb-container">
          <div className="fb-left">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
          <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="fb-right">
           <div className="fb-box">
            {/* login form */}
           <form action="">
              <input type="text" placeholder="Email address or phone number"/>
              <input type="text" placeholder="Password"/>
              <button>Log in</button>
            </form>

            <Link href="#">Forgotten password</Link>
              <div className="divider"></div>
              <button>Create new account</button>
           </div>
         <span><Link href='#'>Create a Page </Link> for a celebrity, brand or business.</span>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default Home;