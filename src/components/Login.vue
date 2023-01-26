<template>
    <div class="login-card">
        <div class="left-panel">
            <img src="../assets/images/login.png" alt="" />
        </div>
        <div class="right-panel">
            <v-card class="mx-auto form-card" min-width="350" elevation="5">
                <!-- <template v-slot:title> Login Form </template> -->
                <h1 class=" mt-8 text-center">Sign In</h1>
                <v-card-text>
                    <v-form ref="form" class="pb-10" v-model="valid" lazy-validation>
                        <v-text-field v-model="email" :rules="emailRules" variant="underlined" label="E-mail"
                            required></v-text-field>

                        <v-text-field variant="underlined" v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
                            hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                        <v-btn color="purple" class="mt-4" @click="login"> Login </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";

import { useRouter } from "vue-router";
const form = ref(null);
const router = useRouter();
const valid = ref(true);
const name = ref("");
const nameRules = ref([
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
]);
const email = ref("");
const emailRules = ref([
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
const select = ref(null);
const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
const show1 = ref(false);
const show2 = ref(true);
const password = ref("");

const rules = ref({
    required: (value) => !!value || "Required.",
    min: (v) => v.length >= 8 || "Min 8 characters",
    emailMatch: () => `The email and password you entered don't match`,
});
const validateForm = async () => {
    valid.value = await form.value.validate();
    if (valid.value.valid) {
        alert("Form is valid");
        localStorage.setItem(
            "UserDetail",
            JSON.stringify({ username: email.value })
        );
        router.push({ name: "Products" });
    } else {
        alert("Form is not valid");
    }
};
const login = () => {
    validateForm();
};
</script>
<style lang="scss" scoped>
.login-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-wrap: wrap;
    overflow: auto;

    width: 100%;
    box-shadow: rgba(246, 6, 6, 0.35) 0px 5px 15px !important;
}

@media screen and (max-width: 500px) {
    .left-panel {
        display: none;
    }

    .form-card {
        min-width: 250px !important;
    }
}
</style>