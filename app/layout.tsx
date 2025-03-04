import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className="layout">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;