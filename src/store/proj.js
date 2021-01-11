
import axios from 'axios'

const proj = {
	namespaced: true,
	state: {
		projects: null,
		unique: null
  	},
	mutations: {
		SET_PROJECTS(state, payload){
			state.projects = payload
		},
		SET_UNIQUE(state, payload){
			state.unique = payload
		}
	},
	actions: {
         GET_PROJECTS({commit}){
         	axios
         	.get('http://asyadesign.ru/wp-json/ad/v1/get/projects')
         	.then(res =>{
         		commit('SET_PROJECTS', res.data)
         	})
         },
         GET_UNIQUE({commit}){
         	axios
         	.get('http://asyadesign.ru/wp-json/ad/v1/get/osobennosti')
         	.then(res =>{
         		commit('SET_UNIQUE', res.data)
         	})
         }
	},
	getters: {
		getProjects(state){
			return state.projects
		},
		getSingleProj: (state) => (slug) => {
  			return state.projects.find(projItem => projItem.slug == slug)
  		},
  		getUnique(state){
  			return state.unique
  		}
	}
}

export default proj


