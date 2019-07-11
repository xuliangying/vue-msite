<template>
  <div style="background:#fff;">
    <!-- 头部 -->
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div aria-label="当前地址：正义路北京市人民政府(旧址)，轻点两下重新选择" role="button" class="index-2S5Ah_0" @click="handleClick">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            />
          </svg>
          <span class="index-2uW_v_0">{{city}}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
            />
          </svg>
        </div>
      </div>
    </header>
    <!-- 搜索 -->
    <div role="button" class="search">
      <a class="content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill-opacity="0.38"
            d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"
          />
        </svg>
        <span>搜索饿了么商家、商品名称</span>
      </a>
    </div>
    <!-- 导航 -->
    <div>
      <mt-swipe :auto="0" class="foodentry">
        <mt-swipe-item>
          <a href="javascript:" role="button">
            <div ubt-visit-key="1" ubt-data-title="美食" class="container">
              <img
                src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">美食</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="2" ubt-data-title="晚餐" class="container">
              <img
                src="https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">晚餐</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="3" ubt-data-title="商超便利" class="container">
              <img
                src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">商超便利</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="4" ubt-data-title="水果" class="container">
              <img
                src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">水果</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="5" ubt-data-title="医药健康" class="container">
              <img
                src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">医药健康</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="6" ubt-data-title="浪漫鲜花" class="container">
              <img
                src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">浪漫鲜花</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="7" ubt-data-title="跑腿代购" class="container">
              <img
                src="https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">跑腿代购</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="8" ubt-data-title="汉堡披萨" class="container">
              <img
                src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">汉堡披萨</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="9" ubt-data-title="厨房生鲜" class="container">
              <img
                src="https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">厨房生鲜</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit-key="10" ubt-data-title="甜品饮品" class="container">
              <img
                src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">甜品饮品</span>
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:" role="button">
            <div ubt-visit="105142" ubt-visit-key="13" ubt-data-title="速食简餐" class="container">
              <img
                src="https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">速食简餐</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit="105142" ubt-visit-key="14" ubt-data-title="地方小吃" class="container">
              <img
                src="https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">地方小吃</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit="105142" ubt-visit-key="15" ubt-data-title="大牌惠吃" class="container">
              <img
                src="https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">大牌惠吃</span>
          </a>
          <a href="javascript:" role="button">
            <div ubt-visit="105142" ubt-visit-key="18" ubt-data-title="速食简餐" class="container">
              <img
                src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
              />
              <!---->
            </div>
            <span class="title">速食简餐</span>
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 品质套餐那一块 -->
    <div>
      <div class="index-1ECZ3_0">
        <section id="activity-lego" class="index-1y1Q5_0">
          <div class="index-3xB2N_0">
            <div class="index-Q3GS5_0 index-1xT5J_0">
              <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
              <div class="index-2W67h_0">搭配齐全吃得好</div>
              <div class="index-1DFa7_0">
                <!---->
                立即抢购 &gt;
              </div>
              <img
                src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
              />
            </div>
            <!---->
          </div>
        </section>
        <div class="index-3eoZ-_0">
          <div class="index-3M-d6_0">
            <img
              alt
              class="index-1QvOZ_0"
              src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/"
            />
            <span class="index-M9mXY_0">超级会员</span>
            <span class="index-tO6Fz_0">
              <b></b>每月领20元红包
            </span>
          </div>
          <a href="javascript:" ubt-click="101933" ubt-data-type="1" class="index-1-R5E_0">
            <b class="index-4F0aw_0"></b>立即开通
          </a>
        </div>
        <div class="banner index-1-Na3_1">
          <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in items" :key="item.id">
              <a href="javascript:;">
                <img class="index-1eegU_1" :src="item.src" />
              </a>
            </mt-swipe-item>
          </mt-swipe>
          <div class="index-FVZqI_1">资质证照</div>
        </div>
        <!---->
      </div>
      <!-- 返回到顶部 -->
      <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
          class="BackTop-icon_2Js4K94"
        />
      </div>
      <!---->
    </div>
    <!-- 推荐商家 -->
    <div id="shoplist-title" class="shoplist-title" style>推荐商家</div>
    <!-- 综合排序 -->
    <div class="home-filter">
      <aside data-v-a5cc4024 class="filter" style="top: 0px;">
        <div data-v-a5cc4024 class="filter-header">
          <a data-v-a5cc4024 href="javascript:" class="filter-nav">
            <span data-v-a5cc4024>综合排序</span>
            <svg data-v-a5cc4024 viewBox="0 0 72 32" class="dropdown-icon">
              <path data-v-a5cc4024 d="M36 32l36-32h-72z" />
            </svg>
          </a>
          <a
            data-v-a5cc4024
            href="javascript:"
            ubt-click="104723"
            ubt-data-type="1"
            ubt-data-is_svip="true"
            class="filter-nav"
          >
            <span data-v-a5cc4024>距离最近</span>
          </a>
          <a
            data-v-a5cc4024
            href="javascript:"
            ubt-click="104723"
            ubt-data-type="3"
            class="filter-nav"
          >
            <span data-v-a5cc4024>品质联盟</span>
          </a>
          <!---->
          <a data-v-a5cc4024 ubt-click="104725" href="javascript:" class="filter-nav-more">
            <span data-v-a5cc4024>筛选</span>
            <svg data-v-a5cc4024 class="filter-nav-more__icon">
              <use data-v-a5cc4024 xlink:href="#more-filter" />
            </svg>
          </a>
        </div>
        <section data-v-52820b2e data-v-a5cc4024 class="filter-extend filter-sort">
          <ul data-v-52820b2e>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>综合排序</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="综合排序"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>好评优先</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="好评优先"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>销量最高</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="销量最高"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>起送价最低</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="起送价最低"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>配送最快</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="配送最快"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>配送费最低</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="配送费最低"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>人均从低到高</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="人均从低到高"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>人均从高到低</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="人均从高到低"
                class="selected"
              />
            </li>
            <li data-v-52820b2e class>
              <span data-v-52820b2e>通用排序</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="通用排序"
                class="selected"
              />
            </li>
          </ul>
        </section>
        <section data-v-a5cc4024 class="filter-extend">
          <!---->
          <div class="morefilter-3-5h6_0">
            <dl>
              <dt>商家服务 (可多选)</dt>
              <dd>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    />
                    <span>蜂鸟专送</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    />
                    <span>品牌商家</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    />
                    <span>新店</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    />
                    <span>食安保</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    />
                    <span>开发票</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>优惠活动 (单选)</dt>
              <dd>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>首单立减</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>门店新客立减</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>满减优惠</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>下单返红包</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>进店领红包</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>配送费优惠</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>赠品优惠</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>特价商品</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>品质联盟红包</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>人均消费</dt>
              <dd>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥20以下</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥20 - ¥40</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥40 - ¥60</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥60 - ¥80</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥80 - ¥100</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥100以上</span>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
          <div class="morefilter-2DLty_0">
            <span class="morefilter-39NFb_0">清空</span>
            <span class="morefilter-16ilq_0 morefilter-2Dfps_0">确定</span>
          </div>
        </section>
      </aside>
    </div>
    <!-- 商家列表 -->
    <section class="shoplist" style>
      <section class="index-container_10L_lQb shop-0" v-for="shop in shopList" :key="shop.id">
        <div class="index-shopInfo_1RRTZ0d">
          <div class="logo-container_XoH2Vit_0">
            <div class="logo-main_21aInWJ_0">
              <img
                :alt="shop.restaurant.name"
                class="logo-logo_3S1eSkn_0"
                :src="'https://fuss10.elemecdn.com/'+shop.restaurant.image_path+'.jpeg'"
              />
            </div>
            <!---->
          </div>
          <div class="index-main_N3FfcSz">
            <section class="index-line_2-iYR1A">
              <h3 class="index-shopname_39Y7e3U">
                <i content="品牌" class="index-premium_39rl0v9">品牌</i>
                <span>{{shop.restaurant.name}}</span>
              </h3>
              <ul class="index-supportWrap_2lTcxr2">
                <!---->
                <span class="index-omit_1q3Tw0_">···</span>
              </ul>
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-rateWrap_39dWx_g">
                <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                  <div class="Rating-gray_1kpffd5_0">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                    />
                  </div>
                  <div class="Rating-actived_GBtiHkB_0" style="width: 96%;">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                    />
                  </div>
                </div>
                <span class="index-rate_WsK58g8">4.8</span>
                <span>月售2314单</span>
              </div>
              <!---->
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-moneylimit_2fCq9W5">
                <span>¥0起送</span>
                <span>配送费¥9</span>
                <!---->
              </div>
              <div class="index-timedistanceWrap_2Dp_kzY">
                <span class="index-distanceWrap_1EPAlti">1.41km</span>
                <span>28分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class="index-activityWrap_3mo1GyG">
          <!---->
          <section class="index-tagLine_1rJw_lq">
            <!---->
            <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
              汉堡薯条
              <span
                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
              >汉堡薯条</span>
            </span>
            <!---->
          </section>
          <span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
              class="index-dashedline_7B79b3W"
            />
          </span>
          <section class="index-activities_25AUDsx">
            <div class="index-activityList_1wvwwUY">
              <div class="index-actRow_2f_uNNA">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">减</span>
                </span>
                <span class="index-desc_JLha7Vr">满49减9，满89减25</span>
              </div>
              <div class="index-actRow_2f_uNNA">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(241, 136, 79);">换</span>
                </span>
                <span class="index-desc_JLha7Vr">特价商品5元起</span>
              </div>
              <div class="index-actRow_2f_uNNA" style="display: none;">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(112, 188, 70);">首</span>
                </span>
                <span class="index-desc_JLha7Vr">新用户下单立减21元</span>
              </div>
              <div class="index-actRow_2f_uNNA" style="display: none;">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(153, 153, 153);">票</span>
                </span>
                <span class="index-desc_JLha7Vr">该商家支持开发票，请在下单时填写好发票抬头</span>
              </div>
            </div>
            <div class="index-activityBtn_tMk-e1C">
              <span>4个活动</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                class
              />
            </div>
          </section>
        </div>
        <!---->
      </section>
      
      
      <div class="LoadMore-wrapper_3WFhfHy">
        <div style></div>
        <!---->
        <!---->
        <!---->
      </div>
    </section>
    
  </div>
</template>

<script>
import { Indicator , Swipe , SwipeItem , Toast  } from "mint-ui";
import BScroll from 'better-scroll'

import http from '@/utils/http'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          src:
            "https://fuss10.elemecdn.com/4/ce/328c825a9a0a83599cb3495cfe366jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
        },
        {
          src:
            "https://fuss10.elemecdn.com/2/6b/b352d9b1c584836cde8798360f652png.png?imageMogr/format/webp/thumbnail/568x/"
        },
        {
          src:
            "https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
        },
        {
          src:
            "https://fuss10.elemecdn.com/9/2c/0fbbbbb1be55e598689036b195006png.png?imageMogr/format/webp/thumbnail/568x/"
        }
      ],
      shopList : []
    };
  },
  methods: {
    handleClick(){
      this.$router.push('/city')
    }
  },
  computed: {
    ...mapState(['city'])
  },
  async mounted () {
    let page = 0

    Indicator.open({
      text: 'Loading...',
      spinnerType: 'fading-circle'
    });

    let res = await http.get({
      url : 'bins/bkctv'
    })
    this.shopList = res.items
    Indicator.close()

    this.$nextTick( () => {
      let bScroll = new BScroll( '#bsWrap' , {
        click : true,
        pullUpLoad: true
      })

      bScroll.on('pullingUp' , async () => {
        if(page < 1){
          Indicator.open()
          let res = await http.get({
            url : 'bins/1bug73'
          })
          this.shopList = [...this.shopList , ...res.items]
          this.$nextTick( () => {
            page ++
            Indicator.close()
            bScroll.refresh()
            bScroll.finishPullUp()
          })
        }else{
          bScroll.finishPullUp()
          Toast({
            message: '没有数据咯，用的myjson接口',
            position: 'bottom',
            duration: 3000
          });
        }
      })
    })

    
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  }
};

</script>

<style lang="stylus" scoped>
// 头部
.index-JMUSj_0 {
  padding: 0.266667rem 0.373333rem 0;
  padding: 2.666667vw 3.733333vw 0;
  background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;

  .index-1DPx9_0 {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 0.92rem;
    height: 9.2vw;
  }

  .index-1DPx9_0, .index-2S5Ah_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    .index-2S5Ah_0 {
      width: 60%;
      font-weight: 700;

      .index-okfdP_0 {
        width: 0.346667rem;
        width: 3.466667vw;
        height: 0.413333rem;
        height: 4.133333vw;
        fill: #fff;
      }

      .index-2iXz3_0 {
        width: 0.186667rem;
        width: 1.866667vw;
        height: 0.093333rem;
        height: 0.933333vw;
        fill: #fff;
      }

      .index-2uW_v_0 {
        margin: 0 0.133333rem;
        margin: 0 1.333333vw;
        font-size: 0.453333rem;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

// 搜索
.search {
  position: -webkit-sticky;
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0.2rem 0.373333rem;
  padding: 2vw 3.733333vw;
  margin: -0.013333rem 0;
  margin: -0.133333vw 0;
}

.search, .search:after, .search:before {
  background-image: -webkit-gradient(linear, left top, right top, from(#0af), to(#0085ff));
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.search:after, .search:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
}

.search:before {
  top: -1px;
}

.search:after {
  bottom: -1px;
}

.search>.content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 0.96rem;
  height: 9.6vw;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 0.373333rem;
}

.search>.content>svg {
  display: inline-block;
  width: 0.426667rem;
  width: 4.266667vw;
  height: 0.426667rem;
  height: 4.266667vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}

.search>.content>span {
  font-family: simsun;
}

.mint-swipe-indicator.is-active {
  background: #f00 !important;
}

// 导航栏
.foodentry {
  overflow: hidden;
  height: 4.72rem;
  height: 47.2vw;
  background-color: #fff;
  text-align: center;
}

.foodentry a {
  position: relative;
  float: left;
  margin-top: 0.293333rem;
  margin-top: 2.933333vw;
  width: 20%;
}

.foodentry img {
  width: 1.066667rem;
  width: 10.666667vw;
  height: 1.066667rem;
  height: 10.666667vw;
  vertical-align: top;
}

.foodentry .title {
  display: block;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  color: #666;
  font-size: 0.32rem;
}

.foodentry .service {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.24rem;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
  border-radius: 0 0 0.8rem 0.8rem;
  border-radius: 0 0 8vw 8vw;
}

.foodentry .container {
  position: relative;
  display: inline-block;
  width: 1.2rem;
  width: 12vw;
  height: 1.2rem;
  height: 12vw;
}

.foodentry .container img {
  width: 100%;
  height: 100%;
}

// 品质套餐那一块
.index-1ECZ3_0 {
  margin-bottom: 0.213333rem;
  margin-bottom: 2.133333vw;
  font-size: 0;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}

.index-1y1Q5_0 {
  background: #fff;
}

.index-3xB2N_0, .index-QE-ye_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.index-3xB2N_0 .index-Q3GS5_0, .index-QE-ye_0 .index-Q3GS5_0 {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(5%, #f4f4f4), color-stop(95%, #fafafa));
  background: -webkit-linear-gradient(bottom, #f4f4f4 5%, #fafafa 95%);
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
}

.index-3xB2N_0 .index-Q3GS5_0:not(:last-child), .index-QE-ye_0 .index-Q3GS5_0:not(:last-child) {
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.index-3xB2N_0 {
  margin-bottom: 0.08rem;
  margin-bottom: 0.8vw;
}

.index-3xB2N_0 .index-Q3GS5_0 {
  height: 3.733333rem;
  height: 37.333333vw;
  padding: 0.32rem 0 0 0.4rem;
  padding: 3.2vw 0 0 4vw;
  z-index: 0;
}

.index-3xB2N_0 .index-Q3GS5_0 .index-1qvN6_0 {
  font-size: 0.453333rem;
  font-weight: 700;
  margin-bottom: 0.133333rem;
  margin-bottom: 1.333333vw;
  color: #333;
}

.index-3xB2N_0 .index-Q3GS5_0 .index-2W67h_0 {
  font-size: 0.346667rem;
  color: #777;
  margin-bottom: 0.24rem;
  margin-bottom: 2.4vw;
}

.index-3xB2N_0 .index-Q3GS5_0 .index-1DFa7_0 {
  font-size: 0.32rem;
  color: #af8260;
  font-weight: 700;
}

.index-3xB2N_0 .index-Q3GS5_0 img {
  position: absolute;
  right: 0;
  bottom: -0.2rem;
  bottom: -2vw;
  width: 3.2rem;
  width: 32vw;
  height: 2.133333rem;
  height: 21.333333vw;
}

.index-3xB2N_0 .index-3OXhZ_0 .index-1qvN6_0 {
  color: #e81919;
}

.index-3xB2N_0 .index-3OXhZ_0 .index-1DFa7_0 {
  color: #333;
}

.index-3xB2N_0 .index-3OXhZ_0 .index-1DFa7_0>span {
  color: #e81919;
}

.index-3xB2N_0 .index-1xT5J_0 {
  height: 2.933333rem;
  height: 29.333333vw;
}

.index-3xB2N_0 .index-1xT5J_0 img {
  top: 0.24rem;
  top: 2.4vw;
  right: 0.373333rem;
  right: 3.733333vw;
  width: 3.76rem;
  width: 37.6vw;
  height: 2.506667rem;
  height: 25.066667vw;
}

.index-3eoZ-_0 {
  height: 1.066667rem;
  height: 10.666667vw;
  margin-bottom: 0.106667rem;
  margin-bottom: 1.066667vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  background-image: -webkit-gradient(linear, left top, right top, from(#ffefc4), to(#f3dda0));
  background-image: -webkit-linear-gradient(left, #ffefc4, #f3dda0);
  background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
  background-size: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 0.266667rem 0 0.4rem;
  padding: 0 2.666667vw 0 4vw;
  color: #644f1b;
  font-size: 0.293333rem;
}

.index-1QvOZ_0 {
  width: 0.453333rem;
  width: 4.533333vw;
  height: 0.453333rem;
  height: 4.533333vw;
  margin-right: 0.2rem;
  margin-right: 2vw;
}

.index-1-R5E_0, .index-3M-d6_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-1-Na3_1 {
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  width: 100%;
  height: 2.346667rem;
  height: 23.466667vw;
  position: relative;
}

.index-FVZqI_1 {
  z-index: 9;
  position: absolute;
  bottom: 0.053333rem;
  bottom: 0.533333vw;
  right: 0.053333rem;
  right: 0.533333vw;
  width: 1.466667rem;
  width: 14.666667vw;
  height: 0.506667rem;
  height: 5.066667vw;
  line-height: 0.506667rem;
  line-height: 5.066667vw;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 0.266667rem;
  border-radius: 0.266667rem;
  border-radius: 2.666667vw;
  color: #eee;
}

.index-1eegU_1 {
  width: 100%;
  height: auto;
}

// 推荐商家
.shoplist, .shoplist-title {
  background-color: #fff;
}

.shoplist-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.96rem;
  height: 9.6vw;
  font-size: 0.4rem;
  color: #000;
}

.shoplist-title:after, .shoplist-title:before {
  display: block;
  content: '';
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.026667rem;
  height: 0.266667vw;
  background-color: #999;
}

.shoplist-title:before {
  margin-right: 0.346667rem;
  margin-right: 3.466667vw;
}

.shoplist-title:after {
  margin-left: 0.346667rem;
  margin-left: 3.466667vw;
}

// 综合排序
.home-filter {
  position: -webkit-sticky;
  position: sticky;
  top: 1.333rem;
  z-index: 100;
}

.filter[data-v-a5cc4024] {
  position: relative;
  line-height: 1.04rem;
  line-height: 10.4vw;
  z-index: 101;
  height: 1.066667rem;
  height: 10.666667vw;
}

.filter-header[data-v-a5cc4024] {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 1.053333rem;
  height: 10.533333vw;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 4;
  background-color: #fff;
}

.filter-nav[data-v-a5cc4024] {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  color: #666;
  position: relative;
  font-size: 0.373333rem;
  z-index: 101;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.filter-nav.active[data-v-a5cc4024] {
  color: #333;
  font-weight: 700;
}

.filter-nav.active .dropdown-icon[data-v-a5cc4024] {
  fill: currentColor;
}

.filter-nav.open[data-v-a5cc4024] {
  color: #3190e8;
  font-weight: 700;
}

.filter-nav.open .dropdown-icon[data-v-a5cc4024] {
  fill: currentColor;
}

.filter-nav .dropdown-icon[data-v-a5cc4024] {
  width: 0.16rem;
  width: 1.6vw;
  height: 0.08rem;
  height: 0.8vw;
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  margin-bottom: 0.053333rem;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.filter-nav-more[data-v-a5cc4024] {
  width: 2.133333rem;
  width: 21.333333vw;
  height: 1.066667rem;
  height: 10.666667vw;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #666;
  font-size: 0.373333rem;
  position: relative;
}

.filter-nav-more.open[data-v-a5cc4024] {
  color: #3190e8;
  font-weight: 700;
}

.filter-nav-more.open .filter-nav-more__icon[data-v-a5cc4024] {
  fill: currentColor;
}

.filter-nav-more.active[data-v-a5cc4024] {
  color: #333;
  font-weight: 700;
}

.filter-nav-more.active .filter-nav-more__icon[data-v-a5cc4024] {
  fill: currentColor;
}

.filter-nav-more__icon[data-v-a5cc4024] {
  margin-left: 0.053333rem;
  margin-left: 0.533333vw;
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.346667rem;
  height: 3.466667vw;
  fill: #666;
}

.filter-nav-arrow[data-v-a5cc4024] {
  display: inline-block;
  vertical-align: middle;
  width: 0.24rem;
  width: 2.4vw;
}

.filter-extend[data-v-a5cc4024] {
  left: 0;
  right: 0;
  top: 1.053333rem;
  top: 10.533333vw;
  border-top: 1px solid #ddd;
  position: absolute;
  max-height: 0;
  background-color: #fff;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  visibility: hidden;
  overflow: auto;
  opacity: 0;
  z-index: 4;
}

.filter-extend.open[data-v-a5cc4024] {
  opacity: 1;
  visibility: visible;
  max-height: 1500%;
}

.filter-nav__icon[data-v-a5cc4024] {
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.293333rem;
  height: 2.933333vw;
  margin-right: 0.053333rem;
  margin-right: 0.533333vw;
}

.morefilter-2etYY_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 10em;
  color: #999;
}

.morefilter-3-5h6_0 {
  overflow: auto;
  height: 100%;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
  background: #fff;
  -webkit-overflow-scrolling: touch;
  line-height: normal;
}

.morefilter-3-5h6_0 dl {
  margin: 0.266667rem 0;
  margin: 2.666667vw 0;
  overflow: hidden;
}

.morefilter-3-5h6_0 dt {
  margin-left: 1%;
  margin-bottom: 0.2rem;
  margin-bottom: 2vw;
  color: #666;
}

.morefilter-3-5h6_0 dd {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background: #fff;
  position: relative;
}

.morefilter-3-5h6_0 dd, .morefilter-3GXUR_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.morefilter-3GXUR_0 {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 31.33%;
  -ms-flex: 0 0 31.33%;
  flex: 0 0 31.33%;
  height: 0.933333rem;
  height: 9.333333vw;
  font-size: 0.346667rem;
  margin: 0.08rem 1%;
  margin: 0.8vw 1%;
  background: #fafafa;
}

.morefilter-3GXUR_0 .morefilter-l3S4A_0 {
  white-space: nowrap;
}

.morefilter-3GXUR_0 span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-3GXUR_0 .morefilter-2JyrM_0 {
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.346667rem;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}

.morefilter-3GXUR_0.morefilter-3emCs_0 {
  font-weight: 700;
  color: #3190e8;
  background-color: #edf5ff;
}

.morefilter-2DLty_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fafafa;
  -webkit-box-shadow: 0 -0.026667rem 0.053333rem 0 #ededed;
  -webkit-box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  box-shadow: 0 -0.026667rem 0.053333rem 0 #ededed;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 1.146667rem;
  line-height: 11.466667vw;
}

.morefilter-2DLty_0 .morefilter-16ilq_0, .morefilter-2DLty_0 .morefilter-39NFb_0 {
  font-size: 0.426667rem;
  text-align: center;
  text-decoration: none;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.morefilter-2DLty_0 .morefilter-39NFb_0 {
  background-color: #fff;
  color: #ddd;
}

.morefilter-2DLty_0 .morefilter-39NFb_0.morefilter-2Dfps_0 {
  color: #333;
}

.morefilter-2DLty_0 .morefilter-16ilq_0 {
  opacity: 0.5;
  color: #fff;
  background-color: #00d762;
  border: 0.013333rem solid #00d762;
  border: 0.133333vw solid #00d762;
}

.morefilter-2DLty_0 .morefilter-16ilq_0.morefilter-2Dfps_0 {
  opacity: 1;
}

.morefilter-2DLty_0 i, .morefilter-2DLty_0 i:after, .morefilter-2DLty_0 i:before {
  display: inline-block;
  width: 0.133333rem;
  width: 1.333333vw;
  height: 0.133333rem;
  height: 1.333333vw;
  border-radius: 50%;
  background: #fff;
  opacity: 0.8;
  position: relative;
}

.morefilter-2DLty_0 i:after, .morefilter-2DLty_0 i:before {
  content: '';
  position: absolute;
  top: 0;
}

.morefilter-2DLty_0 i:before {
  left: -0.266667rem;
  left: -2.666667vw;
  opacity: 0.5;
}

.morefilter-2DLty_0 i:after {
  right: -0.266667rem;
  right: -2.666667vw;
  opacity: 1;
}

ul[data-v-52820b2e] {
  list-style: none;
  margin: 0;
  padding: 0;
}

.filter-sort[data-v-52820b2e] {
  padding-top: 0.213333rem;
  padding-top: 2.133333vw;
  padding-bottom: 0.32rem;
  padding-bottom: 3.2vw;
  font-size: 0.373333rem;
  color: #333;
}

.filter-sort li[data-v-52820b2e] {
  position: relative;
  padding-left: 0.533333rem;
  padding-left: 5.333333vw;
  line-height: 1.066667rem;
  line-height: 10.666667vw;
}

.filter-sort li.active[data-v-52820b2e] {
  color: #3190e8;
  font-weight: 700;
}

.filter-sort li.active .selected[data-v-52820b2e] {
  display: block;
}

.filter-sort .selected[data-v-52820b2e] {
  position: absolute;
  right: 0.373333rem;
  right: 3.733333vw;
  top: 50%;
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  display: none;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

// 商家列表
.index-container_10L_lQb {
    position: relative;
    border-bottom: .013333rem solid #eee;
    border-bottom: .133333vw solid #eee;
    background-color: #fff;
    color: #666;
    padding: .4rem 0;
    padding: 4vw 0;
    list-style: none;
    font-size: .293333rem;
    line-height: normal
}

.index-shopInfo_1RRTZ0d {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    padding: 0 .266667rem;
    padding: 0 2.666667vw
}

.index-main_N3FfcSz {
    -webkit-flex-grow: 1;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: .266667rem;
    padding-left: 2.666667vw
}

.index-line_2-iYR1A, .index-main_N3FfcSz {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden
}

.index-line_2-iYR1A, .index-shopname_39Y7e3U {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.index-shopname_39Y7e3U {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    color: #333;
    font-weight: 700;
    font-size: .4rem;
    overflow: hidden
}

.index-shopname_39Y7e3U span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.index-premium_39rl0v9 {
    position: relative;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    padding: .026667rem .066667rem;
    padding: .266667vw .666667vw;
    color: transparent;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: .293333rem;
    font-style: normal;
    line-height: normal
}

.index-premium_39rl0v9:after {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    content: attr(content);
    padding: .011373rem .02844rem;
    padding: .113733vw .2844vw;
    padding: .053333rem .133333rem;
    padding: .533333vw 1.333333vw;
    color: #6f3f15;
    font-weight: 700;
    font-size: .125147rem;
    font-size: .586667rem;
    border-radius: .022747rem;
    border-radius: .227467vw;
    border-radius: .106667rem;
    border-radius: 1.066667vw;
    background-image: -webkit-linear-gradient(229deg, #fff100, #ffe339);
    background-image: linear-gradient(-139deg, #fff100, #ffe339);
    white-space: nowrap;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.index-rateWrap_39dWx_g {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.index-rate_WsK58g8, .index-stars_vPkk9Vv {
    margin-right: .106667rem;
    margin-right: 1.066667vw
}

.index-moneylimit_2fCq9W5 {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center
}

.index-moneylimit_2fCq9W5 span+span:before {
    margin: 0 .017067rem;
    margin: 0 .170667vw;
    margin: 0 .08rem;
    margin: 0 .8vw;
    color: #ddd;
    content: "|"
}

.index-moneylimit_2fCq9W5 span:nth-of-type(2) {
    overflow: hidden;
    max-width: 2.666667rem;
    max-width: 26.666667vw;
    text-overflow: ellipsis;
    white-space: nowrap
}

.index-activityWrap_3mo1GyG {
    padding-left: 2.266667rem;
    padding-left: 22.666667vw
}

.index-tagLine_1rJw_lq, .index-tagsSlot_3bpWx9O {
    margin: .266667rem .266667rem 0 0;
    margin: 2.666667vw 2.666667vw 0 0
}

.index-tagLine_1rJw_lq {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.index-tagLine_1rJw_lq>span {
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    margin-bottom: .106667rem;
    margin-bottom: 1.066667vw
}

.index-activities_25AUDsx {
    position: relative;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    overflow: hidden
}

.index-activities_25AUDsx, .index-supportWrap_2lTcxr2 {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.index-supportWrap_2lTcxr2 {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: .266667rem;
    margin-left: 2.666667vw
}

.index-supportWrap_2lTcxr2>li {
    position: relative;
    height: .346667rem;
    height: 3.466667vw;
    width: .346667rem;
    width: 3.466667vw;
    margin-left: .08rem;
    margin-left: .8vw
}

.index-supportWrap_2lTcxr2>li:after {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    font-size: .113773rem;
    font-size: .533333rem;
    color: #999;
    content: attr(content);
    border-radius: .00568rem;
    border-radius: .0568vw;
    border-radius: .026667rem;
    border-radius: .266667vw;
    width: .147907rem;
    width: 1.479067vw;
    width: .693333rem;
    width: 6.933333vw;
    height: .147907rem;
    height: 1.479067vw;
    height: .693333rem;
    height: 6.933333vw;
    line-height: normal;
    border: .013333rem solid #ddd;
    border: .133333vw solid #ddd;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.index-supportWrap_2lTcxr2>li:last-child {
    margin-right: .013333rem;
    margin-right: .133333vw
}

.index-supportWrap_2lTcxr2>li.index-ad_2AGWmo_ {
    height: .293333rem;
    height: 2.933333vw;
    width: .48rem;
    width: 4.8vw
}

.index-supportWrap_2lTcxr2>li.index-ad_2AGWmo_:after {
    color: #ccc;
    font-size: .07964rem;
    font-size: .373333rem;
    width: .2048rem;
    width: 2.048vw;
    width: .96rem;
    width: 9.6vw;
    height: .125147rem;
    height: 1.251467vw;
    height: .586667rem;
    height: 5.866667vw;
    border: .013333rem solid #eee;
    border: .133333vw solid #eee
}

.index-supportWrap_2lTcxr2 .index-omit_1q3Tw0_ {
    margin-left: .266667rem;
    margin-left: 2.666667vw;
    padding: 0 .133333rem;
    padding: 0 1.333333vw
}

.index-timedistanceWrap_2Dp_kzY {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999
}

.index-timedistanceWrap_2Dp_kzY span:after {
    margin: 0 .017067rem;
    margin: 0 .170667vw;
    margin: 0 .08rem;
    margin: 0 .8vw;
    color: #ddd;
    content: "|"
}

.index-timedistanceWrap_2Dp_kzY span:last-child:after {
    display: none
}

.index-distanceWrap_1EPAlti>span {
    display: inline-block;
    -webkit-transform: scale(.85);
    transform: scale(.85)
}

.index-activityList_1wvwwUY {
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-right: .266667rem;
    padding-right: 2.666667vw;
    overflow: hidden
}

.index-activityList_1wvwwUY>div:not(:first-child) {
    margin-top: .066667rem;
    margin-top: .666667vw
}

.index-activityBtn_tMk-e1C {
    padding: .08rem .266667rem 0 0;
    padding: .8vw 2.666667vw 0 0;
    color: #999;
    text-align: right;
    font-size: .266667rem;
    line-height: 1
}

.index-activityBtn_tMk-e1C span {
    vertical-align: middle
}

.index-activityBtn_tMk-e1C img {
    width: .173333rem;
    width: 1.733333vw;
    opacity: .9;
    margin-left: .106667rem;
    margin-left: 1.066667vw;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    fill: currentColor;
    will-change: transform;
    vertical-align: middle;
    position: relative;
    z-index: 1
}

.index-activityBtn_tMk-e1C img.index-open_33dKeGm {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.index-recommendTag__2apOBL {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: .013333rem;
    border-radius: .133333vw;
    font-size: .266667rem;
    color: #666;
    height: .4rem;
    height: 4vw;
    padding: 0 .106667rem;
    padding: 0 1.066667vw;
    color: #e8470b
}

.index-recommendTag__2apOBL img {
    margin-top: .04rem;
    margin-top: .4vw;
    height: .266667rem;
    height: 2.666667vw;
    width: .266667rem;
    width: 2.666667vw;
    margin-right: .08rem;
    margin-right: .8vw
}

.index-tag_3oprLi5 {
    padding: 0 .106667rem;
    padding: 0 1.066667vw
}

.index-tagGhost_1KCu_KY {
    border: .026667rem solid #ddd;
    border: .266667vw solid #ddd;
    border-radius: .053333rem;
    border-radius: .533333vw;
    padding: 0 .213333rem;
    padding: 0 2.133333vw
}

.index-dashedline_7B79b3W {
    width: 100%;
    height: .013333rem;
    height: .133333vw;
    padding-right: .266667rem;
    padding-right: 2.666667vw
}

.index-actRow_2f_uNNA {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .293333rem;
    line-height: .48rem;
    line-height: 4.8vw
}

.index-actRow_2f_uNNA .index-iconWrap_1xJuKaY {
    display: inline-block;
    position: relative;
    margin-right: .16rem;
    margin-right: 1.6vw;
    height: .373333rem;
    height: 3.733333vw;
    width: .373333rem;
    width: 3.733333vw;
    vertical-align: middle
}

.index-actRow_2f_uNNA .index-icon_1fBCxBk {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: .746667rem;
    height: 7.466667vw;
    width: .746667rem;
    width: 7.466667vw;
    font-size: .56rem;
    color: #fff;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: .106667rem;
    border-radius: 1.066667vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.index-actRow_2f_uNNA .index-desc_JLha7Vr {
    display: inline-block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle
}

.index-adLite_35BlsGa {
    text-align: center;
    display: inline-block;
    height: .426667rem;
    height: 4.266667vw;
    width: .746667rem;
    width: 7.466667vw;
    position: relative;
    font-size: .266667rem;
    color: transparent
}

.index-adLite_35BlsGa:after {
    content: attr(content);
    position: absolute;
    top: 0;
    left: 0;
    font-size: .113773rem;
    font-size: .533333rem;
    color: #d8d8d9;
    white-space: nowrap;
    height: .18204rem;
    height: 1.8204vw;
    height: .853333rem;
    height: 8.533333vw;
    width: .318573rem;
    width: 3.185733vw;
    width: 1.493333rem;
    width: 14.933333vw;
    line-height: .18204rem;
    line-height: 1.8204vw;
    line-height: .853333rem;
    line-height: 8.533333vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    border: .013333rem solid #c9c8c8;
    border: .133333vw solid #c9c8c8;
    border-radius: .022747rem;
    border-radius: .227467vw;
    border-radius: .106667rem;
    border-radius: 1.066667vw
}

.index-dislikeModal_1am3w6C {
    position: absolute;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.index-dislike_2_wUsCr {
    width: 1.333333rem;
    width: 13.333333vw;
    height: 1.333333rem;
    height: 13.333333vw;
    border-radius: 50%;
    background: #fff;
    line-height: 1.333333rem;
    line-height: 13.333333vw;
    text-align: center;
    color: #333
}

.index-aliday_1m1a-Gy {
    display: inline-block;
    height: .373333rem;
    height: 3.733333vw;
    width: .853333rem;
    width: 8.533333vw;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-image: url(https://gw.alicdn.com/tfs/TB1m7XsXL1H3KVjSZFHXXbKppXa-80-35.png);
    background-size: cover;
    background-repeat: no-repeat
}

.logo-container_XoH2Vit_0 {
    position: relative;
    -webkit-flex: none;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    z-index: 0
}

.logo-main_21aInWJ_0 {
    position: relative;
    width: 1.733333rem;
    width: 17.333333vw;
    height: 1.733333rem;
    height: 17.333333vw
}

.logo-logo_3S1eSkn_0 {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: .053333rem;
    border-radius: .533333vw;
    border: .013333rem solid rgba(0, 0, 0, .08);
    border: .133333vw solid rgba(0, 0, 0, .08)
}

.logo-statusTip_1CEG6F-_0 {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    border-bottom-right-radius: .053333rem;
    border-bottom-right-radius: .533333vw;
    border-bottom-left-radius: .053333rem;
    border-bottom-left-radius: .533333vw;
    text-align: center;
    white-space: nowrap
}

.logo-statusTipText_1Dx4kZS_0 {
    color: #fff;
    font-size: .24rem;
    padding: .013333rem 0;
    padding: .133333vw 0;
    position: relative;
    color: transparent;
    white-space: nowrap
}

.logo-statusTipText_1Dx4kZS_0:after {
    content: attr(content);
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    font-size: .1024rem;
    font-size: .48rem;
    color: #fff;
    padding: .00568rem 0;
    padding: .0568vw 0;
    padding: .026667rem 0;
    padding: .266667vw 0;
    white-space: nowrap;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.logo-statusTipSmall_3tjsgtJ_0 {
    font-size: .213333rem
}

.logo-newShop_PI2TWde_0 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: .853333rem;
    width: 8.533333vw;
    height: .853333rem;
    height: 8.533333vw;
    background-image: -webkit-linear-gradient(315deg, #26ce61, #26ce61 50%, transparent 0);
    background-image: linear-gradient(135deg, #26ce61, #26ce61 50%, transparent 0);
    font-size: .24rem
}

.logo-newShop_PI2TWde_0 span {
    position: absolute;
    top: .133333rem;
    top: 1.333333vw;
    left: .026667rem;
    left: .266667vw;
    display: block;
    color: #fff;
    font-weight: 700;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.logo-categoryQuantity_uaoPHzl_0 {
    position: absolute;
    right: -.186667rem;
    right: -1.866667vw;
    top: -.186667rem;
    top: -1.866667vw;
    color: #fff;
    background-image: -webkit-gradient(linear, right top, left top, from(#ff7416), color-stop(98%, #ff3c15));
    background-image: -webkit-linear-gradient(right, #ff7416, #ff3c15 98%);
    background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
    border-radius: .2rem;
    border-radius: 2vw;
    font-size: .266667rem;
    font-weight: 700;
    text-align: center;
    min-width: .373333rem;
    min-width: 3.733333vw;
    padding: 0 .106667rem;
    padding: 0 1.066667vw;
    line-height: .373333rem;
    line-height: 3.733333vw
}

.delivery-delivery_3gyT50e_0 {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.delivery-icon-delivery_2nSP7AC_0, .delivery-icon-hollow_3q8_B5r_0 {
    position: relative;
    padding: 0 .04rem;
    padding: 0 .4vw;
    color: transparent;
    white-space: nowrap;
    font-size: .266667rem;
    border: .013333rem solid transparent;
    border: .133333vw solid transparent;
    border-radius: .04rem;
    border-radius: .4vw;
    line-height: 1.2
}

.delivery-icon-delivery_2nSP7AC_0:after, .delivery-icon-hollow_3q8_B5r_0:after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    white-space: nowrap;
    content: attr(content);
    font-size: .113773rem;
    font-size: .533333rem;
    padding: 0 .011373rem;
    padding: 0 .113733vw;
    padding: 0 .053333rem;
    padding: 0 .533333vw;
    border-radius: .017067rem;
    border-radius: .170667vw;
    border-radius: .08rem;
    border-radius: .8vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.delivery-icon-delivery_2nSP7AC_0:after {
    color: #0097ff;
    border: .013333rem solid #0097ff;
    border: .133333vw solid #0097ff
}

.delivery-icon-hollow_3q8_B5r_0:after {
    color: #fff;
    border: .013333rem solid #0097ff;
    border: .133333vw solid #0097ff;
    background-image: -webkit-linear-gradient(45deg, #0085ff, #0af);
    background-image: linear-gradient(45deg, #0085ff, #0af)
}

.delivery-icon-hollow_3q8_B5r_0 {
    margin-left: .106667rem;
    margin-left: 1.066667vw
}

.mini-tag-tag_3Tm_6bw_0 {
    position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap
}

.mini-tag-ghost_3DwLU8E_0 {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    font-size: .533333rem
}

.mini-tag-ghost_3DwLU8E_0, .NoDataTip-wrapper_1Gwf0tm {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.Rating-wrapper_TYbDrku_0 {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle
}

.Rating-actived_GBtiHkB_0, .Rating-gray_1kpffd5_0 {
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Rating-actived_GBtiHkB_0 img, .Rating-gray_1kpffd5_0 img {
    width: 1.493333rem;
    width: 14.933333vw;
    height: .266667rem;
    height: 2.666667vw;
    -webkit-flex: none;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    max-width: none
}

.Rating-actived_GBtiHkB_0 {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden
}
</style>



