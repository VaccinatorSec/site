<template>
    <div class="mt-8 sm:mt-12 lg:mt-16 mb-8">
        <h1 class="text-5xl font-extrabold py-6">Get in touch</h1>

        <main class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="col-span-1">
                <label for="first-name" class="block text-sm font-bold py-2">Name</label>
                <input type="text" placeholder="" class="rounded-md bg-zinc-100 dark:bg-zinc-900 w-full" required v-model="name"/>
            </div>

            <div class="col-span-1">
                <label for="email" class="block text-sm font-bold py-2">Email</label>
                <input type="email" placeholder="" class="rounded-md bg-zinc-100 dark:bg-zinc-900 w-full" required v-model="email"/>
            </div>

            <div class="col-span-1 md:col-span-2">
                <label for="subject" class="block text-sm font-bold py-2">Subject</label>
                <input type="text" placeholder="" class="rounded-md bg-zinc-100 dark:bg-zinc-900 w-full" required v-model="subject"/>
            </div>

            <div class="col-span-1 md:col-span-2">
                <label for="message" class="block text-sm font-bold py-2">Message</label>
                <textarea rows="4" type="text" placeholder="" class="rounded-md bg-zinc-100 dark:bg-zinc-900 w-full" required v-model="message"/>
            </div>

            <div class="col-span-1 md:col-span-2">
                <vue-hcaptcha sitekey="84bf7ae5-a5c3-48de-9bb9-3aff727b0926" :theme="$colorMode.value" @verify="captchaSolved"></vue-hcaptcha>
            </div>

            <div class="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-8">
                <p class="dark:text-zinc-600 text-zinc-500 max-w-md">
                    When submitting this form, you voluntarily provide us with personal information, including your name, email address, and message.
                    We will use this information to respond to your inquiry and may store it for future correspondence.
                </p>
                <button type="submit" @click="submit" class="mt-2 w-full md:w-auto h-auto my-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-9 hover:bg-primary-10">Submit</button>
            </div>
        </main>
        
        <div class="transition ease-in-out duration-100" :class="{hidden: !alert.visible}">
            <div class="rounded-md p-4 my-8" :class="alert.success ? ['bg-success-3', 'dark:bg-success-12'] : ['bg-error-3', 'dark:bg-error-12']">
                <div class="flex flex-row items-center justify-center">
                    <div class="flex-shrink-0">
                        <FaIcon class="h-5 w-5" :class="alert.success ? ['text-success-10', 'dark:text-success-8'] : ['text-error-10', 'dark:text-error-8']" aria-hidden="true" :icon="alert.success ? 'check' : 'exclamation'"/>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm" :class="alert.success ? ['text-success-9', 'dark:text-success-7'] : ['text-error-9', 'dark:text-error-7']">{{alert.message}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
</script>

<script>
const required = ['name', 'email', 'subject', 'message'];

const emailReg = /^\S+@\S+\.\S+$/;

export default {
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            captcha: '',
            alert: {
                visible: false,
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
                success: true
            }
        }
    },
    methods: {
        captchaSolved(token) {
            this.captcha = token;
        },
        async submit() {
            const data = {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
                captcha: this.captcha
            };

            const missing = required.filter(prop => !data[prop]);

            if (missing.length) {
                this.alert.visible = true;
                this.alert.message = `Please fill out the ${missing[0]} field.`;
                this.alert.success = false;
            } else if (!emailReg.test(this.email)) {
                this.alert.visible = true;
                this.alert.message = 'Please enter a valid email address.';
                this.alert.success = false;
            } else if (!this.captcha) {
                this.alert.visible = true;
                this.alert.message = 'Please solve the captcha.';
                this.alert.success = false;
            } else {
                const res = await $fetch('/api/contact', { method: 'post', body: data });

                this.alert.visible = true;
                this.alert.message = res.message;
                this.alert.success = res.success;
            }
        }
    }
}
</script>
