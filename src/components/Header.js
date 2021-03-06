import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">Dashboad</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;