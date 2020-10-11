import { Header, Footer } from './Nav';

const ChapitreLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default ChapitreLayout;