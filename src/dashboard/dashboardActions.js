import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

//Funções que geraram uma ação pra atualizar o estado da aplicação:
export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}