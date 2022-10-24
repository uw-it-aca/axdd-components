// entry point for npm install via github
// iterate the components object and globally register each component
// source: https://blog.logrocket.com/building-vue-3-component-library/

import components from "./src/components";

const AxddComponents = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export default AxddComponents;
