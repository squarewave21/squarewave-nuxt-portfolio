<template>
  <div>
    <main>

      <article>

        <section class="mv">

          <div class="content_blk">
            <h1 class="">
              <nuxt-link to="/">SQUAREWAVE<span>WebDesign&Coding</span></nuxt-link>
            </h1>
          </div>

        </section>

        <section class="single">

          <div class="content_blk">

            <div class="single_blk">
              <h2 class="">{{ title }}</h2>
              <p class="subttl ">{{ encharge }}</p>
              <div class="img"><img :src="mainimage.url" width="100%" alt=""></div>
              <p class="txt ">{{ comment }}</p>

              <div class="flex txt-blk">
                <div class="blk01 ">
                  <div class="blk01-01">
                    <h3>URL</h3>
                    <div class="flex">
                      <input type="text" class="url" id="copyTarget" :value="url" readonly>
                      <button onclick="copyToClipboard()" class="copy">URLコピー</button>
                    </div>
                    <span>※WEBサイトを閲覧される場合は上記URLをコピーしアドレスバーからご入力下さい。</span>
                  </div>
                  <div class="blk01-02">
                    <h3>クライアント</h3>
                    <p>{{ client }}</p>
                  </div>
                </div>

                <div class="blk02">
                  <div class="blk02-01">
                    <h3>担当</h3>
                    <p>{{ charge }}</p>
                  </div>
                  <div class="blk02-02">
                    <h3>制作期間</h3>
                    <p>{{ schedule }}</p>
                  </div>
                </div>

              </div>

              <!--v-ifで存在確認-->
              <div class="img-blk flex">
                <div class="subimg01" v-if="subimage1 && subimage1.url"><img :src="subimage1.url" width="100%" alt=""></div>
                <div class="subimg02" v-if="subimage2 && subimage2.url"><img :src="subimage2.url" width="100%" alt=""></div>
              </div>

              <!--v-ifで存在確認-->
              <div class="img-blk flex">
                <div class="subimg03" v-if="subimage3 && subimage3.url"><img :src="subimage3.url" width="100%" alt=""></div>
                <div class="subimg04" v-if="subimage4 && subimage4.url"><img :src="subimage4.url" width="100%" alt=""></div>
              </div>

            </div>

          </div>

        </section>

      </article>

    </main>

    <footer>
      <div class="content_blk">

        <div class="blk01">
          <h2 class="">
            <nuxt-link to="/">SQUAREWAVE</nuxt-link>
          </h2>
          <div class="contact_blk">
            <h3 class="">CONTACT</h3>
            <ul class="">
              <li><a href="mailto:info@squarewave.jp" target="_blank" class="navigate-anchor">
                <img src="@/assets/img/icon_06.png" width="22" alt="">info@squarewave.jp</a></li>
              <li>
                <a href="tel:08024501060" target="_blank" class="navigate-anchor">
                  <img src="@/assets/img/icon_08.png" width="18" alt="">
                  080-2450-1060
                </a>
              </li>
            </ul>
          </div>
          <p class="txt ">〒542-0062<br>大阪府大阪市中央区上本町西1丁目1-9ハイマート上町503</p>
        </div>

        <div class="blk02">
          <a href="#" class="arrow "><img src="@/assets/img/arrow.png" width="65" alt=""></a>
          <small class="">&copy SQUAREWAVE All Rights Reserved.</small>
        </div>

      </div>
    </footer>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {//データ初期化（v-ifで存在確認する際に必須）
    return {
      subimage1: '',
      subimage2: '',
      subimage3: '',
      subimage4: '',
    }
  },
  async asyncData({params}) {
    const {data} = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://squareworks.microcms.io/api/v1/works/${params.slug}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: {'X-API-KEY': 'edda0c78-788a-42e9-8417-b4c623b0adae'}
      }
    )
    return data
  },

  head: {
    bodyAttrs: {
      class: 'top fadeout'
    }
  }
}
</script>
