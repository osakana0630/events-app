import Layout from '../components/Layout/Layout'
import { EventList } from '@/components/List/EventList'

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ padding: '30px' }}>
        <h1>Homeページだよ！！！！</h1>
        <EventList />
      </div>
    </Layout>
  )
}

export default IndexPage
