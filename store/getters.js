export default {
    LargeSize(state){
        if(!state.windowSize) return false;
        return state.windowSize > 1355
    },
}