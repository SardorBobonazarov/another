import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsuranceView from '../views/InsuranceView.vue'
import InsuranceDetails from '../components/insurance/insurances/insuranceDetails.vue'
import NewsView from '../views/NewsView.vue'
import newsDetails from '../components/news/newsDetails.vue'
import LeadersView from '../views/LeadersView.vue'
import singleLeader from '../components/leadership/singleLeader.vue'
import AppealsView from '../views/AppealsView.vue'
import SubjectView from '../views/SubjectView.vue'
import HistoryView from '../views/HistoryView.vue'
import DocsView from '../views/DocsView.vue'
import docDetails from '../components/docs/docDetails.vue'
import CollegView from '../views/CollegView.vue'
import ContactView from '../views/ContactView.vue'
import BranchView from '../views/BranchView.vue'
import ReportView from '../views/ReportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/insurance',
      name: 'insurance',
      component: InsuranceView
    },
    {
      path: '/insurance/:id',
      name: 'InsuranceDetails',
      component: InsuranceDetails,
      props: true
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/news/:id',
      name: 'newsDetails',
      component: newsDetails,
      props: true
    },
    {
      path: '/leaders',
      name: 'leaders',
      component: LeadersView
    },
    {
      path: '/leaders/:id',
      name: 'singleLeader',
      component: singleLeader,
      props: true
    },
    {
      path: '/appeals',
      name: 'appealsView',
      component: AppealsView
    },
    {
      path: '/subject-and-main-goals',
      name: 'subject',
      component: SubjectView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/kompaniya-hujjatlari',
      name: 'kompaniya-hujjatlari',
      component: DocsView
    },
    {
      path: '/docs/:id',
      name: 'docDetails',
      component: docDetails,
      props: true
    },
    {
      path: '/kollegial-va-maslahat-organlari',
      name: 'kollegial-va-maslahat-organlari',
      component: CollegView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/branches',
      name: 'branches',
      component: BranchView
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportView
    },
  ]
})

export default router
