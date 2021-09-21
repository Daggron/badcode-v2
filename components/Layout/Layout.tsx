import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
} // Layout
