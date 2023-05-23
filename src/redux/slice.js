import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [], // state oluşturup boş bir dizi olduğunu belirtiyoruz
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      //addTodo kullanıldığında gönderilen değeri items a eklemesi için
    },
    delTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // items ı gönderilen id dışındaki id ye sahip olan elemanlerı kapsayacak şekilde güncelliyoruz
    },
    clearAll: (state) => {
      state.items = [];
      // items ı tamamen boşaltıyoruz
    },
  },
});
export const { addTodo, delTodo, clearAll } = todosSlice.actions;
// fonksiyonlarımızı her yerden çağırılabilmesi için export ediyoruz

export default todosSlice.reducer;
