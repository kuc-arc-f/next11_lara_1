import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import axios from '@/libs/axios';
import Layout from '../../components/layout'
//
function Page(props) {
  const item = props.item
console.log(item)
  return (
  <Layout>
    <div className="container">
      <Link href="/tasks">
        <a className="btn btn-outline-primary mt-2">Back</a></Link>
      <hr />
      <div><h1>Title : {item.title}</h1>
      </div>
      <hr />
      ID: {item.id}      
      {/*
      <div>Content: {item.content}
      </div>
      */}
    </div>
  </Layout>
  )
}
//
export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id
console.log(id);
  const res = await axios.get('/api/tasks/show?id=' + id); 
console.log(res.data);  
  const item = res.data; 
  return {
    props: { item },
  }
}

export default Page

