import axios from ('axios');

export function getClientes(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/info')
         return dispatch({
            type: 'GET_CLIENTES',

         })
    }
}