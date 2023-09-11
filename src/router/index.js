import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import ErrorView from "@/views/ErrorView.vue";
import FrontendView from "@/views/FrontendView.vue";
import BackendView from "@/views/BackendView.vue";
import MyLessonsView from "@/views/MyLessonsView.vue";
import EditorView from "@/views/EditorView.vue";

const routes = [
  {
    path: '/home',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signupRoute',
    component: SignUpView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
  {
    path: '/frontend',
    name: 'frontendRoute',
    component: FrontendView
  },
  {
    path: '/backend',
    name: 'backendRoute',
    component: BackendView
  },
  {
    path: '/mylessons',
    name: 'myLessonsRoute',
    component: MyLessonsView
  },
  {
    path: '/editor/:newLessonName?',
    name: 'editorRoute',
    component: EditorView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
