import { IRouteComponentProps } from 'umi'
import { Header } from '../components/header'

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <>
      <Header />
      { children }
    </>
  )
}