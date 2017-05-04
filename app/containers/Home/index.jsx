import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from '../../actions/userinfo'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad  from './subpage/Ad'

class Home extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div>
					<HomeHeader cityName={this.props.userinfo.cityName}/>
					<Category />
					<div style={{height: '15px'}}></div>
					<Ad/>
				</div>
			)
	}
	componentDidMount(){
		
		
	}
}

function mapStateToProps(state){
	return {
		userinfo:state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)