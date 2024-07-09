import { createRouter, createWebHistory } from 'vue-router';
import SearchBar from '../components/SearchBar.vue';
import PlayerProfile from '../components/PlayerProfile.vue';

const routes = [
    {
        path: '/',
        name: 'Search',
        component: SearchBar
    },
    {
        path: '/profile/:name',
        name: 'Profile',
        component: PlayerProfile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
