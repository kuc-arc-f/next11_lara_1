//import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router'
import React from 'react'
import flash from 'next-flash';

//import LibCookie from "@/lib/LibCookie"
import axios from '@/libs/axios';
import Layout from '@/components/layout'

interface IState {
  title: string,
  content: string,
  _token: string,
}
interface IProps {
  id: string,
  csrf: any,
  item: any,
  user_id: string,
}
//
export default class TaskEdit extends React.Component<IProps, IState> {
  static async getInitialProps(ctx) {
    console.log("id=", ctx.query.id)
    const id = ctx.query.id
//console.log(data.data.task);
console.log(id);
    const res = await axios.get('/api/tasks/show?id=' + id); 
console.log(res.data);  
    const item = res.data; 
    return {
      id: id,
      item: item,
      user_id : '',
      csrf: '',
    };
  }
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.state = {
      title: this.props.item.title, 
      content: this.props.item.content,
      _token : this.props.csrf.token,
    }
//console.log(this.props )
  }
  componentDidMount(){
    const key = process.env.COOKIE_KEY_USER_ID;
  }     
  handleChangeTitle(e){
    console.log("handleChangeTitle:")
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }  
  async handleClickDelete(){
    console.log("#deete-id:" , this.props.id)
    try {
      const item = {
        id: this.props.id,
      }
      const res = await axios.post(
        '/api/tasks/delete', item 
      )
console.log( res.data );
      Router.push('/tasks');      
    } catch (error) {
      console.error(error);
    }     
  } 
  async handleClick(){
  console.log("#-handleClick")
    await this.update_item()
  }     
  async update_item(){
    try {
    } catch (error) {
      console.error(error);
      alert("Error, save item");
    }     
  }  
  render() {
    return (
      <Layout>
        <div className="container">
          <Link href="/tasks">
            <a className="btn btn-outline-primary mt-2">Back</a></Link>
          <hr className="mt-2 mb-2" />
          <h1>Tasks - Edit</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title:</label>
                <input type="text" id="title" className="form-control"
                value={this.state.title}
                onChange={this.handleChangeTitle.bind(this)} />
              </div>
            </div>
          </div>
          <hr />
          <div className="form-group">
            <button className="btn btn-danger" onClick={this.handleClickDelete}>Delete
            </button>
          </div>
          <hr />
          ID : {this.props.id}
        </div>
        {/*
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.handleClick}>Save
          </button>
        </div>
        <hr />                  
        */}
      </Layout>
    );
  }
}

