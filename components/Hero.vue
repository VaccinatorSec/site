<template>
  <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32 bg-primary-1">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <h1>
          <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">{{ title }}</span>
          <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
            <span class="block text-primary-12">{{ tagline }}</span>
          </span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{{ description }}</p>
        <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <p class="text-base font-medium text-gray-900">We've known each other for so long</p>
          <form action="#" method="POST" class="mt-3 sm:flex">
            <label for="email" class="sr-only">Email</label>
            <input type="email" name="email" id="email" class="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300" placeholder="Enter your email" />
            <button type="submit" class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-9 shadow-sm hover:bg-primary-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">Notify me</button>
          </form>
          <p class="mt-3 text-sm text-gray-500">
            You know the rules
            <a href="#" class="font-medium text-gray-900 underline">and so do I</a>.
          </p>
        </div>
      </div>
      <div class="mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <div class="mx-auto w-full rounded-lg lg:max-w-md hidden lg:block">
          <img class="w-full max-w-sm" src="~/assets/hero.svg" alt="" />
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
      tagline: "Making online communities safer",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt."
    }
  }
}
</script>