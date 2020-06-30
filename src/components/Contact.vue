<template>
    <v-row
        transition="slide-x-transition"
        style="background-color: #7880B5"
        no-gutters
    >
        <v-col class="col-md-6 col-sm-12" data-aos="fade-right">
            <v-row align="center" justify="center" style="min-height:100vh">
                <v-col class="col-10 col-md-8 col-sm-9">
                    <div class="display-3 font-weight-thin">
                        Let's get in touch!
                    </div>
                    <div class="headline font-weight-light">
                        <p>
                            I'm always looking to make connections with others,
                            virtually and in-person.
                        </p>
                        <p>
                            Feel free to use the contact form to talk to me! You
                            can also get in touch with me through social media.
                        </p>
                        <p>
                            If you'd prefer to email me, here it is:
                            <v-btn class="ma-2" dark outlined color="blue" ripple style="background-color: white" href="mailto:patricksmtsang@gmail.com">
      patricksmtsang@gmail.com<v-icon>mdi-email</v-icon>
    </v-btn>
                        </p>
                        <v-row>
                            <v-col
                                v-for="social in socials"
                                v-bind:key="social.link"
                            >
                                <v-btn :href="social.link">
                                    <v-icon>{{ social.icon }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="col-md-6 col-12" style="background-color: #C0A9B0">
            <v-row
                align="center"
                justify="center"
                style="min-height:100vh"
                data-aos="fade-left"
            >
                <v-col class="col-10 col-md-8 col-sm-9">
                    <v-form v-if="submitted == false" method="POST">
                        <div class="display-3 font-weight-thin">Contact Me</div>
                        <v-text-field
                            color="blue"
                            clearable
                            outlined
                            v-model="name"
                            label="name"
                            required
                        ></v-text-field>
                        <v-text-field
                            color="blue"
                            clearable
                            outlined
                            v-model="email"
                            label="email"
                            required
                        ></v-text-field>
                        <v-textarea
                            color="blue"
                            clearable
                            outlined
                            v-model="message"
                            label="message"
                            required
                        ></v-textarea>
                        <v-btn @click="formSubmit">Submit</v-btn>
                    </v-form>
                    <div v-else>
                        <div class="display-3 font-weight-thin">
                            Thanks for reaching out!
                        </div>
                        <div class="headline font-weight-light">
                            <p>
                                I will reply to you as soon as I can.
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
import { mdiFacebook, mdiLinkedin, mdiGithub, mdiInstagram } from '@mdi/js';

export default {
    data() {
        return {
            submitted: false,
            name: null,
            email: null,
            message: null,
            action:
                'https://script.google.com/macros/s/AKfycbz0RmrPqqFgAVAe6tabLRwpOGZRMADJmoOTgTLSW-Ccz27UlRQ/exec',
            socials: [
                {
                    icon: mdiFacebook,
                    link: 'https://facebook.com/patricksmt'
                },
                {
                    icon: mdiInstagram,
                    link: 'https://instagram.com/patricksmt'
                },
                {
                    icon: mdiGithub,
                    link: 'https://github.com/patrick-tsang'
                },
                {
                    icon: mdiLinkedin,
                    link: 'https://www.linkedin.com/in/patrick-tsang/'
                }
            ]
        };
    },
    methods: {
        formSubmit: function() {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', this.action);
            xhr.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded'
            );
            let formData = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            var encoded = Object.keys(formData)
                .map(function(k) {
                    return (
                        encodeURIComponent(k) +
                        '=' +
                        encodeURIComponent(formData[k])
                    );
                })
                .join('&');
            xhr.send(encoded);
            this.submitted = true;
        }
    }
};
</script>
<style scoped>
.text-content {
    display: block;
    min-height: 100vh;
    padding: 5px;
}
</style>
