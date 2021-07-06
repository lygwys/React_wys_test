import react,{Component} from 'react'
import wellcome from './index.module.css'
export default class Wellcome extends Component{
    render(){
        return <h1 className={wellcome.title}>Wellcome!</h1>
    }
}