import Link from 'next/link';
import Layout from '@/components/layout'
import axios from '@/libs/axios'
import cookies from 'next-cookies'
//
function Index(props) {
//console.log(props);
  const items = props.items
  return (
    <Layout>
      <div className="container">
        <Link href="/tasks/create">
          <a className="btn btn-primary mt-2">New</a>
        </Link>  
        <hr className="mt-2 mb-2" />        
        <h3>Tasks - index</h3>
        <hr />
        {items.map((item, index) => {
          return (
          <div key={index} >
            <h3>{item.title}</h3>
            <Link href={`/tasks/${item.id}`}>
              <a className="btn btn-sm btn-outline-primary mx-2">Show</a>
            </Link>
            ID: {item.id} , {item.created_at}
            <hr className="my-1"/>
          </div>       
          )
        })}
      </div>
    </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
  //  console.log("uid=", cookies(ctx).user_id)
  const user_id = cookies(ctx).user_id || ''
  const res = await axios.get('/api/tasks/list'); 
console.log(res.data); 
  return {
    props: { 
      items: res.data, user_id: user_id
    } 
  }
}

export default Index
