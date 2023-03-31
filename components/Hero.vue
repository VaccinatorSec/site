<template>
  <main class="mt-16 sm:mt-24 lg:mt-32">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <h1>
          <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">{{ title }}</span>
          <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
            <span class="block">{{ tagline }}</span>
          </span>
        </h1>
        <p v-for="desc in description" :key="desc" class="mt-3 text-base text-zinc-700 dark:text-zinc-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{{ desc }}</p>
        <!-- <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <p class="text-base font-medium text-zinc-600 dark:text-zinc-400">{{ cta.upsell }}</p>
          <NuxtLink
            type="submit"
            :to="cta.href"
            target="_blank"
            class="mt-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-9 shadow-sm hover:bg-primary-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-9 flex-shrink-0 inline-flex sm:items-center w-auto">
            {{ cta.text }}
          </NuxtLink>
          <p class="mt-3 text-sm text-zinc-600">
            {{ cta.smallprint }}
          </p>
        </div> -->
      </div>
      <div class="hidden mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <div class="mx-auto w-full rounded-lg lg:max-w-md block">
          <img class="w-full max-w-sm" src="~/assets/hero.svg" alt="Hero image containing a man standing beside a phone that is showing a scanning process" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Vaccinator Security",
      tagline: "Fighting cybercrime in online communities",
      description: [
          "The Vaccinator project is a nonprofit volunteer effort to research and mitigate cybercrime threats in online communities.",
          // "Our team maintains a public threat analysis tool on our website, specialized for efforts against the unique types of malware commonly found on Discord."
      ],
      // cta: {
      //   upsell: "Found possible malware?",
      //   href: "https://analysis.vaccinator.tech",
      //   text: "Upload & Scan",
      //   smallprint: "This will redirect you to our external scanning utility."
      // }
    }
  }
}
</script>