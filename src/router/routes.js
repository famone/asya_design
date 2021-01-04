import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import Services from '../pages/Services.vue'
import Contacts from '../pages/Contacts.vue'
import ProjectPage from '../pages/ProjectPage.vue'


const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/obo-mne',
			component: About
		},
		{
			path: '/projects',
			component: Projects
		},
		{
			path: '/uslugi',
			component: Services
		},
		{
			path: '/contacti',
			component: Contacts
		},
		{
			path: '/projects/:id',
			component: ProjectPage
		}
	]

export default routes;