import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import Home from "./pages/Home";
import MobileSchool from "./pages/MobileSchool";
import Company from "./pages/Company";
import Example from "./pages/Example";
import NeedPeople from "./pages/NeedPeople";
import Connection from "./pages/Connection";

Vue.use(Router);
new Vue({
  el: '#app',
  router : new Router({
	  mode : "history",	
	  routes : [
		  {
		  	path : "/",
		  	component : Home
		  },
		  {
		  	path : "/mobileSchool",
		  	component : MobileSchool
		  },
		  {
		  	path : "/company",
		  	component : Company
		  },
		  {
		  	path : "/example",
		  	component : Example
		  },
		  {
		  	path : "/needPeople",
		  	component : NeedPeople
		  },
		  {
		  	path : "/connection",
		  	component : Connection
		  }
	  ]
  }),
  render: h => h(App)
});
