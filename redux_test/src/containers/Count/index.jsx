import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

const mapStateToProps = state => ({count:state})

export default connect(
    state => ({count:state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(CountUI)
