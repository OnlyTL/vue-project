<template>
  <div class="app-content">
    <div class="app-menu border-dashed border-r-2 p-2">
      <div class="flex items-center">
        <div class="avatar p-4">
          <div class="w-16 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
          </div>
        </div>
        <div>
          <h2 class="mb-1.5 text-2xl text-slate-950	">OnlyTL</h2>
          <h3>a developer.</h3>
        </div>
      </div>

      <ul class="menu w-80">
        <li>
          <a class="text-base text-gray-900 font-black">
            <HomeTwo theme="outline" fill="#FB9541" />
            首页</a>
        </li>
        <li>
          <details open>
            <summary class="text-base text-gray-900 font-black">
              <BookOpen theme="outline" class="text-green-600"/>
              文档
            </summary>
            <ul>
              <li><a>Java</a></li>
              <li><a>Vue</a></li>
            </ul>
          </details>
        </li>
        <li><a class="text-base text-gray-900 font-black">
          <BookmarkOne theme="outline" class="text-fuchsia-400" />
          书签</a></li>
      </ul>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { HomeTwo,BookOpen,BookmarkOne } from '@icon-park/vue-next'

export default {
  components: {
    HomeTwo,
    BookOpen,
    BookmarkOne
  }
}

</script>

<style scoped>

.app-content {
  display: flex;
}

.app-menu {
  height: 100vh;
}
</style>
