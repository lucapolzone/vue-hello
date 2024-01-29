const {createApp} = Vue;

const app = createApp({
  data() {
    return {
      message: 'Ciao! Questo è il mio primo titolo creato con Vue!',
    };
  },
});
app.mount('#title');