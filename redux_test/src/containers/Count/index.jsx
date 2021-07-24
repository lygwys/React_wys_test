import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

const mapStateToProps = state => ({count:state})

export default connect(
    state => ({count:state}),
    dispatch =>(
        {
            jia:number=>dispatch(createIncrementAction(number)),
            jian:number=>dispatch(createDecrementAction(number)),
            jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),
        }
    )
)(CountUI)
