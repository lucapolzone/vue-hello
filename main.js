const {createApp} = Vue;

const app = createApp({
  data() {
    return {
      message: 'Ciao! Questo è il mio primo titolo creato con Vue!',
      imgUrl: 'https://picsum.photos/id/11/600/400',
    };
  },
});
app.mount('#app');