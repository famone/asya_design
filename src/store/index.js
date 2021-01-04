import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import proj from '../store/proj'

export default new Vuex.Store({
	modules: {
		proj
	}
}) 