<!-- App.vue -->
<template>
  <div>
    <div>
      <h1>天津渊源</h1>
    </div>
    <div class="container">
      <div v-for="(card, index) in cards" :key="index" class="image-card">
        <img :src="card.image" :alt="card.text">
        <span>{{ card.text }}</span>
      </div>
    </div>
    <div class="footer">
      <p>{{ footerText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { 
          image: 'resource/天津博物馆.png',
          text: '天津博物馆'
        },
        { 
          image: 'resource/周恩来邓颖超纪念馆.png',
          text: '周恩来邓颖超纪念馆'
        },
        { 
          image: 'resource/平津战役纪念馆.png',
          text: '平津战役纪念馆'
        },
        { 
          image: 'resource/瓷房子.png',
          text: '瓷房子'
        },
        { 
          image: '/resource/天塔湖风景区.png',
          text: '天塔湖风景区'
        },
        { 
          image: '/resource/天津市文化中心.png',
          text: '天津市文化中心'
        }
      ],
      footerText: ''
    };
  }
};
</script>

<style scoped>

/* 可以在这里添加你的样式 */
body {
    font-family: LiSu;
    margin: 0;
    padding: 20px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    
  }

  .container {
     font-family: LiSu;
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 100px;
  }

  .image-card {
    background-color: #1540ff00;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px black;
    transition: transform 0.3s ease;
    text-align: center;
  }

  .image-card:hover {
    transform: translateY(-10px);
  }


  .image-card img {
    width: 100%;
    height: auto;
    display: block;
  }

  .image-card p {
    font-size: 0.9rem;
    color: #333;
    padding: 10px;
    margin: 0;
  }

  .footer {
    text-align: left;
    color: #999;
    font-size: 0.9rem;
    margin-top: 20px;
    position:relative;
    left:100%;
  }

  h1{
    font-family: LiSu;
    text-align: center;
    font-size:80px;
    text-shadow: 1px 1px 10px red,1px 1px 13px blue;

  }

  .container span{
    background: linear-gradient(to right,#6224cc,#e11b5d)no-repeat left bottom;
    background-size: 0 2px;
    transition: background-size 1s;
    font-family: LiSu;

  }
  .container .image-card:hover span{
    background-size: 100% 2px;
    color: orange;
  }
</style>