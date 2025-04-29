import { render } from '@czechitas/render';
import { StrongPassword } from '../components/StrongPassword';
import '../global.css';
import './index.css';

const response = await fetch ("https://www.psswrd.net/api/v1/password/?length=17");

const json = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
      <h1>Webová aplikace</h1>
      <p>Vaše heslo je: {json.password}, délka: 17</p>
  </div>
);
