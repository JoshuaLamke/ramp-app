let initialState = [
    {name: "Access & duration (Design database log) using TSS internal metrics​", levels: [1.50,1.50,1.50,3.00,1.00], checked: false},
    {name: "Access & duration using Machine Learning Insider Threat Detection​", levels: [1.00,1.25,1.50,1.75,2.00], checked: false},
    {name: "Mitigation 3", levels: [3.00,3.00,3.00,3.00,1.00], checked: false},
    {name: "Mitigation 4", levels: [2.50,2.78,2.00,3.00,2.67], checked: false}
]
const mitigationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_MITIGATION_CHECKED_TRUE':
            return state.map((item) => {
                if (item.name == action.payload.name) {
                    return {
                        ...item,
                        checked: true
                    }
                }
                return item;
              })
        case 'TOGGLE_MITIGATION_CHECKED_FALSE':
            return state.map((item) => {
                if (item.name == action.payload.name) {
                  return {
                      ...item,
                      checked: false
                  }
                }
                return item
              })
        default:
            return state;
    }
}

export default mitigationReducer;