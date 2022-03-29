<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="lg:bg-zinc-200 lg:dark:bg-zinc-800">
        <nav class="hidden lg:flex max-w-7xl mx-auto items-center justify-between px-4 sm:px-6 py-6" aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-auto">
              <a href="#">
                <span class="sr-only">Vaccinator</span>
                <img class="h-8 w-auto sm:h-10" src="~/assets/logo.svg" alt="" />
              </a>
            </div>
            <div class="space-x-8 flex ml-10">
              <a v-for="(item,index) in navigation" :key="index" :href="item.href" class="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300">{{ item.name }}</a>
            </div>
          </div>
          <div class="flex items-center space-x-6">
            <a v-show="cta.show" :href="cta.href" class="btn btn-secondary text-base"> {{ cta.name }} </a>
          </div>
        </nav>

        <!-- mobile -->
        <div class="top-0 w-full" :class="{'h-screen': opened, 'bg-zinc-100 dark:bg-zinc-900': opened }">
          <div class="inset-x-0 p-4 transition transform origin-top-right lg:hidden h-full">
            <div class="flex flex-row justify-between items-center">
              <a href="#">
                <span class="sr-only">Vaccinator</span>
                <img class="h-8 w-auto sm:h-10" src="~/assets/logo.svg" alt="" />
              </a>
              <FaIcon :icon="opened ? 'xmark' : 'bars'" class="text-primary-9 cursor-pointer text-base" @click="toggle()"/>
            </div>
            <div class="bg-zinc-100 dark:bg-zinc-900 overflow-hidden h-full" :class="{hidden: !opened}">
              <div class="pt-2 flex flex-col space-y-8 justify-center h-full items-center text-4xl">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-primary-11 hover:text-primary-12">{{ item.name }}</a>
                <a v-show="cta.show" :href="cta.href" class="btn btn-primary"> {{ cta.name }} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          name: "Malware Analysis",
          href: "https://analysis.vaccinator.dev"
        },
        {
          name: "Learn",
          href: "#" // todo: /learn
        },
        {
          name: "Blog",
          href: "#" // todo: /blog
        },
        {
          name: "GitHub",
          href: "https://github.com/TheVaccinator"
        },
        {
          name: "Contact",
          href: "mailto:team@vaccinator.dev"
        }
      ],
      opened: false,
      cta: {
        show: false,
        name: "click me",
        href: "#"
      }
    }
  },
  methods: {
    toggle() {
      this.opened = !this.opened
    }
  }
}
</script>