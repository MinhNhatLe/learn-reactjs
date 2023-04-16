const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    //state có thể truyền các loại kiểu dữ  liệu
    // này mình cho nó bằng 0 khi bắt đầu
    initialState: 0,
    reducers: {
        // sử dụng redux toolkit nó sẽ kết hợp giữa cái action và reducer chung 1 file
        // 2 tham số đầu vào lúc nào cũng là state và  action
        increase(state, action) {
            return state + 1;
        },

        decrease(state, action) {
            return state - 1;
        },
    },
});

// dùng destructoring để lấy thằng action và reducer ra countrerSlice
const { actions, reducer } = counterSlice;

// export cho thằng component nó sài
export const { increase, decrease } = actions; //name export


// export cho thằng store nó lụm
export default reducer; //default  export