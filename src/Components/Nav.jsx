import { useNavigate } from 'react-router-dom';

function NavButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

export default NavButtons;
