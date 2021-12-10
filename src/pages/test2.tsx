import type { NextPage } from 'next'
import { useState } from 'react';
import axios from '@/libs/axios'
 
const Page: NextPage = () => {
  /* state */
  const [data , setData] = useState('');

//console.log(process.env.API_URL);
  const initLoad = async function(){
    const item = {
      title: "t111",
    };
    const res = await axios.post(
      '/api/test/test1', item 
    );
    setData(res.data.title);
console.log(res.data.title);
  }
  initLoad();
  if (!data) return <div>読み込み中</div>
  return (
  <div>
    <h1>ようこそ</h1>
    <hr />
    <p>{data}</p>
  </div>
  )
}
 
export default Page