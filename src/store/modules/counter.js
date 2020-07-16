const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.counter + ' Clicks',
};

const namespaced =  true;

const mutations=  {
    increment: (state, payload = 1) => state.counter += payload,
    decrement:  (state, payload = 1) => state.counter -= payload,
};

const actions=  {
    increment: ({commit}, payload) => commit('increment', payload),
    decrement: ({commit}, payload = 1) => commit('decrement', payload),
    asyncIncrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration)
    },
    asyncDecrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration)
    },
}; 

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,
}