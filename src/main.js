import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// 导入 Favicon 图标
import '../public/images/index/favicon.png';

// 导入 Slick CSS
import '../public/css/animate.css';

// 导入 LineIcons CSS
import '../public/css/lineicons.css';

// 导入 Slick CSS
import '../public/css/slick.css';

// 导入 Bootstrap CSS
import '../public/css/bootstrap.min.css';
import '../public/js/bootstrap.min.js';
// 导入 Default CSS
import '../public/css/default.css';

// 导入 Style CSS
// import '../public/css/style.css';
// import '../public/css/index.css';

createApp(App).use(router).mount('#app');