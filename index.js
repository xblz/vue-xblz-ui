import Table from './packages/table';

const components = [Table];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { Table };
export default {
  install,
  Table
};
