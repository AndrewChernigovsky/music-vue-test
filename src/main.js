import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import User from "./pages/UserPage";
import Home from "./pages/HomePage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: Home },
	{ path: "/user", component: User },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).use(store).mount("#app");