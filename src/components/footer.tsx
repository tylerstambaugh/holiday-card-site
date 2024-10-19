import '../App.css'
export default function Footer() {

   const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Tyler Stambaugh. All rights reserved.</p>
    </footer>
  );
  
}