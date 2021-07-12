<template>
  <div>

    <main>

      <article>

        <section class="mv">

          <div class="content_blk">
            <h1 class="">
              <nuxt-link to="/">SQUAREWAVE<span>WebDesign&amp;Coding</span></nuxt-link>
            </h1>
            <ul>
              <li class="mail "><a href="mailto:info@squarewave.jp" target="_blank" class="navigate-anchor"><img
                src="@/assets/img/icon_03.png" width="22" alt="">info@squarewave.jp</a></li>
              <li class="tel "><a href="tel:08024501060" target="_blank" class="navigate-anchor"><img
                src="@/assets/img/icon_05.png" width="18" alt="">080-2450-1060</a></li>
            </ul>
          </div>

        </section>

        <section class="works">

          <div class="content_blk">

            <div class="works_blk " v-for="content in contents" :key="content.id">
              <nuxt-link :to="`/${content.id}`">
                <div class="img"><img :src="content.mainimage.url" alt=""></div>
                <h3>{{ content.title }}</h3>
                <p>{{ content.subtitle }}</p>
              </nuxt-link>
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
  async asyncData() {
    const {data} = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://squareworks.microcms.io/api/v1/works?limit=50',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: {'X-API-KEY': 'edda0c78-788a-42e9-8417-b4c623b0adae'}
      }
    )
    return data
  },
  head: {
    bodyAttrs: {
      class: 'top fadeout',
    }
  }
}
</script>
