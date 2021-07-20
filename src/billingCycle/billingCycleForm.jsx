import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput' //Personalização do componente Field.
import CreditList from './creditList'

class BillingCycleForm extends Component {
    render () {
        const { handleSubmit, readOnly } = this.props

        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} type='text' label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly} />
                    <Field name='month' component={labelAndInput} type='number' label='Mês' cols='12 4' placeholder='Informe o mês'  readOnly={readOnly}/>
                    <Field name='year' component={labelAndInput} type='number' label='Ano' cols='12 4' placeholder='Informe o ano' readOnly={readOnly}/>
                    <CreditList cols='12 6' readOnly={readOnly}/>
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
export default connect(null, mapDispatchToProps)(BillingCycleForm)