import { IRouteComponentProps } from 'umi';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Helmet } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <>
      <Helmet>
        <meta name="applicable-device" content="pc" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
}
