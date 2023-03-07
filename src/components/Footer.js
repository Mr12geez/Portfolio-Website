
import React from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer>
      <p>© 2022 CHIJIOKE OBIORAH, ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

export default Footer;

