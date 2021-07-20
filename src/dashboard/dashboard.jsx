import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { getSummary } from './dashboardActions'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary()
    }

    render () {
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="11 4" color="green" value={`R$ ${credit}`} icon="bank" text="Total de Créditos" />
                        <ValueBox cols="11 4" color="red" value={`R$ ${debt}`} icon="credit-card" text="Total de Débitos" />
                        <ValueBox cols="11 4" color="blue" value={`R$ ${credit - debt}`} icon="money" text="Valor Consolidado" />
                    </Row>                    
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary}) //Faz o de x para entre estado e o props do componente.
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch) //Faz o de x para entre actionCreator e componente.
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)