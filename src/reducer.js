import produce from 'immer';

export function reducer(state,action){
    console.log("dododododododododododododo",state);
        switch (action.type){
            case 'toggle':
                return produce(state,(draftState) => {
                    draftState[action.payload].isCompleted = !draftState[action.payload].isCompleted
                });
            case 'add':
                return produce(state,(draftState) => {
                draftState.push({label:action.payload});
            });
            default:
                return state;
      }
}

