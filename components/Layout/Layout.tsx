import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="container">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
} // Layout
