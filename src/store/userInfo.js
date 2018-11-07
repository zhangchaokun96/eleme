const state = {
    id:"",
    name:""
}

const getters = {

}

const mutations = {
    modifyIdAndName(state,params){
        console.log("modifyIdAndName 调用了",params)
        state.id = params.id;
        state.name = params.name;
    }
}

const actions = {

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}