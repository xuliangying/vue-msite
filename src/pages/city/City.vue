<template>
  <div>
    <div id="city" class="city-sMoQY_0" style>
      <div style="position: sticky; top: 0px; z-index: 1000;">
        <div class="city-3WB7V_0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 33" class="city-13oid_0" @click="handleBackClick">
            <path
              fill-rule="evenodd"
              d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z"
              class="path1"
            />
          </svg>
          <div class="city-2fUnY_0">城市选择</div>
        </div>
      </div>
      <div class="city-1VGFB_0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="city-1r2VH_0">
          <path
            fill-opacity="0.38"
            d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"
          />
        </svg>
        <input type="text" placeholder="输入城市名或者拼音" @input="searchCity" />
      </div>
      
      <div class="city-bSMF7_0" id="city-list">
        <div>
          <div class="city-EAJ1X_0">
          <p class="city-1bnTP_0">当前定位城市</p>
          <div class="city-5r26m_0">{{city}}</div>
        </div>
        <div id="list" v-for=" (value,key) in cities" :key="key">
          <div :id="key" class="city-3Obwy_0">
            <div class="city-1bnTP_0">{{key}}</div>
            <div class="city-5r26m_0" v-for="city in value " :key="city.id">
              <span @click="pickCity(city.name)">{{city.name}}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="city-2_cDS_0"  >
        <span v-for=" (value,key) in cities"
              @click="scrollToElement(`#${key}`)"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              :ref="key"
             :key="key.id"
             :id="key" >
          {{key}}
        </span>  
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/utils/http'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'

export default {
    data(){
        return {
            cities:{}
        }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
        handleBackClick() {
            this.$router.push('/')
        },
        handleTouchStart() {
          this.touch = true
        },
        handleTouchMove(e) {
          if(this.touch) {
            let clientY = e.touches[0].clientY
            let aNum = Math.floor((clientY - this.hotpoisition) / this.alphabetaHeight)
            let cityArray = Object.keys(this.cities)
            this.scrollToElement(`#${cityArray[aNum - 1]}`)

          }
        },
        handleTouchEnd() {
          this.touch = false
        },
        pickCity(city) {
            this.currentCity = city
            this.$store.commit('setCity',city)
            this.$router.push('/')
        },
        scrollToElement(el){
          this.bScroll.scrollToElement(el)
        },
        searchCity(){
        }
    },
    async mounted() {
        let result = await http.get({
            url : '/cities.json'
        })
        this.cities = result.cities

        this.$nextTick( () => {
          this.bScroll = new BScroll('#city-list',{
            click : true
          })

          this.hotpoisition = this.$refs['A'][0].getBoundingClientRect()['y']
          this.alphabetaHeight = this.$refs['A'][0].offsetHeight
        })
    }
}
</script>

<style>
.city-sMoQY_0 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    overflow: hidden;
    background-color: #fff;
    -webkit-animation: city-3V70Z_0 .3s;
    animation: city-3V70Z_0 .3s;
    -webkit-overflow-scrolling: touch
}

.city-3WB7V_0 {
    position: relative;
    width: 100%;
    color: #fff;
    background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    text-align: center;
    font-size: .32rem
}

.city-2fUnY_0 {
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    font-size: .48rem
}

.city-13oid_0 {
    position: absolute;
    left: .333333rem;
    left: 3.333333vw;
    top: .333333rem;
    top: 3.333333vw;
    fill: #fff;
    width: .533333rem;
    width: 5.333333vw;
    height: .533333rem;
    height: 5.333333vw
}

.city-1VGFB_0 {
    height: 1.173333rem;
    height: 11.733333vw;
    background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    text-align: center;
    position: relative
}

.city-1VGFB_0 .city-1r2VH_0 {
    position: absolute;
    width: .373333rem;
    width: 3.733333vw;
    height: .373333rem;
    height: 3.733333vw;
    left: .986667rem;
    left: 9.866667vw;
    top: .4rem;
    top: 4vw
}

.city-1VGFB_0 input {
    width: 8.666667rem;
    width: 86.666667vw;
    height: .8rem;
    height: 8vw;
    margin-top: .186667rem;
    margin-top: 1.866667vw;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .4rem;
    border-radius: 4vw;
    padding-left: .8rem;
    padding-left: 8vw
}

.city-EAJ1X_0 {
    font-size: .373333rem
}

.city-bSMF7_0 {
    height: 100%;
    overflow: hidden;
}

.city-3Obwy_0 {
    font-size: .373333rem;
    color: #333
}

.city-1bnTP_0 {
    color: #666;
    background: #f5f5f5;
    padding: .373333rem 0 .186667rem .4rem;
    padding: 3.733333vw 0 1.866667vw 4vw
}

.city-1bnTP_0, .city-5r26m_0 {
    border-bottom: 1px solid #ddd
}

.city-5r26m_0 {
    height: 1.333333rem;
    height: 13.333333vw;
    margin-left: .4rem;
    margin-left: 4vw;
    line-height: 1.333333rem;
    line-height: 13.333333vw
}

.city-5r26m_0 span {
    display: inline-block;
    width: 80%;
    height: 100%
}

.city-5r26m_0:last-child {
    border: none
}

.city-2_cDS_0 {
    position: absolute;
    right: .266667rem;
    right: 2.666667vw;
    top: 4rem;
    top: 40vw;
    width: .533333rem;
    width: 5.333333vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    color: #999
}

.city-2_cDS_0 span {
    width: 100%;
    height: .533333rem;
    height: 5.333333vw;
    line-height: .533333rem;
    line-height: 5.333333vw
}

.city-2OCz0_0 {
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: .4rem;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}
</style>
