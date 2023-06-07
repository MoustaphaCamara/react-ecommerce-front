import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
