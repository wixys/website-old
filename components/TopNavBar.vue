<template>
  <div>
    <section id="topbar" class="d-none d-lg-block">
      <div class="container-fluid clearfix">
        <div v-if="showWhatsappNumber">
          <a
            :href="'https://wa.me/'+showWhatsappNumber"
            target="_blank"
            class="btn btn-brand float-right text-black ml-2"
            title="Enviar un whatsapp"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-white" />
            <span class="text-white">Whatsapp</span>
          </a>
        </div>
        <div v-if="showPhoneNumber">
          <a
            :href="'tel:'+showPhoneNumber"
            class="btn btn-brand float-right text-black"
            title="Llamar"
          >
            <font-awesome-icon :icon="['fas', 'phone']" class="text-white" />
            <span class="text-white">{{ showPhoneNumber }}</span>
          </a>
        </div>
        <div v-if="showMobileNumber">
          <a
            :href="'tel:'+showMobileNumber"
            class="btn btn-brand float-right text-black"
            title="Llamar"
          >
            <font-awesome-icon :icon="['fas', 'mobile-alt']" class="text-white" />
            <span class="text-white">{{ showMobileNumber }}</span>
          </a>
        </div>
        <div v-show="showBtnMainCallToAction">
          <nuxt-link
            :to="'/' + $i18n.locale + '/presupuesto-online'"
            class="btn btn-brand float-right text-black mr-2"
            title="Enviar un correo"
          >
            <font-awesome-icon :icon="['far', 'file-alt']" class="text-white" />
            <span class="text-white">{{ titleMainCallToAction }}</span>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  data() {
    return {
      phoneNumber: "",
      whatsapp: "",
      btnMainCallToAction: false,
      titleMainCallToAction: ""
    };
  },
  components: {
    Logo
  },
  computed: {
    showPhoneNumber() {
      this.phoneNumber = process.env.contactInfo.phone;
      return this.phoneNumber;
    },
    showMobileNumber() {
      this.mobileNumber = process.env.contactInfo.mobile;
      return this.mobileNumber;
    },
    showWhatsappNumber() {
      this.whatsapp = process.env.contactInfo.whatsapp;
      return this.whatsapp;
    },
    showBtnMainCallToAction() {
      this.btnMainCallToAction = process.env.marketing.btnMainCallToAction;
      this.titleMainCallToAction = process.env.marketing.titleMainCallToAction;
      return this.btnMainCallToAction;
    }
  }
};
</script>
<style scoped>
i.text-white {
  color: #ffffff !important;
  font-weight: 600;
}
#topbar {
  background: #222222;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}
#topbar a,
i {
  color: #111111 !important;
  font-weight: 600;
}
#topbar a:hover {
  color: #222222 !important;
}
#topbar .contact-info a {
  line-height: 1;
  color: #555;
}
#topbar .contact-info a:hover {
  color: #5c003c;
}
#topbar .contact-info i {
  color: #4573b5;
  padding: 4px;
}
#topbar .contact-info .fa-phone {
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid #e9e9e9;
}
#topbar .social-links a {
  color: #007fc8;
  padding: 4px 12px;
  display: inline-block;
  line-height: 1px;
  border-left: 1px solid #e9e9e9;
  font-size: 1rem;
}
#topbar .social-links a:hover {
  color: #4573b5;
}
#topbar .social-links a:first-child {
  border-left: 0;
}
</style>
