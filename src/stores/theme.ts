import { defineStore } from "pinia";
export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    isDark: false,
  }),
  getters: {
    // ! This is not Vuex, you dont need to create a getter for each property. use storeToRefs instead. Only create getters which use one of the states to create a different value, and dont prefix the name of the getters with "get..", there is no need. So the example below is preserved to serve as a reminder (its bad)
    // getIsDark: (state) => state.isDark,
    //.
    // A good example of a good getter would be in a count store, which has a state called 'count'. Instead of creating a new state variable called doubleCount, we can just create a 'doubleCount' getter and return count*2. So, whenever you need a state frequently in a modified form - where the logic for modification is the same for various use cases - then you create a getter instead of another state variable.
  },
  actions: {
    changeTheme() {
      this.isDark = !this.isDark;
      this.setLocalStorage();
    },
    setLocalStorage() {
      localStorage.setItem("isDark", JSON.stringify(this.isDark));
    },
    setIsDark(isDark) {
      this.isDark = isDark;
    },
  },
});
