import React, { Component } from 'react'
import PubSub from 'pubsub-js'
//import axios from 'axios'

export default class Search extends Component {
    search = async() =>{        
        const {keyWordElement:{value:keyWord}}=this
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        //#region 使用axios发送网络请求
        /*axios.get(`/api1/search/users2?q=${keyWord}`).then(
            response=>{
                PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
            },
            error=>{
                PubSub.publish('atguigu',{isLoading:false,err:error.message})
            }
        )*/
        //#endregion

        //#region 使用fetch发送网络请求（未优化）
        /*fetch(`/api1/search/users2?q=${keyWord}`).then(
            response=>{
                console.log('联系服务器成功');
                return response.json()
            },
            // error=>{                
            //     console.log('联系服务器失败',error) 
            //     return new Promise(()=>{}) //返回初始化状态Promise实例，不再执行后面的then  
            // }
        ).then(
            response=>{console.log('获取数据成功',response);},
            //error=>{console.log('获取数据失败',error)}
        ).catch(
            (error)=>{console.log('请求出错',error);}//不用上面注释掉的内容，兜底输出错误
        )*/
        //#endregion


        //#region 使用fetch发送网络请求（优化,前面最近的函数加async）
        /*try {
            const response=await fetch(`/api1/search/users2?q=${keyWord}`)
            const data=await response.json()
            console.log(data)
        } catch (error) {
            console.log('请求出错',error);
        } */
        //#endregion

        try {
            const response=await fetch(`/api1/search/users2?q=${keyWord}`)
            const data=await response.json()
            PubSub.publish('atguigu',{isLoading:false,users:data.items})
        } catch (error) {
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
        }

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref = {c =>this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}

