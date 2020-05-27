<style>
    @import "../styles/modal.css";
</style>
<template>
    <div>
        <transition v-if="showModal" name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                                default header
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                default body
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                default footer
                                <button class="modal-default-button" @click="showModal = false">
                                    OK
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!-- use the modal component, pass in the prop -->

    </div>
</template>

<script>
    import {citiesHotel} from '../gateways/srcAPI'
    export default {
        name: "Modal",
        template: "#modal-template",
        props: {
            showModal: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                      cityname: 'tehran',
                      cityData: ''
            };
            },
        methods: {
            getCitiesHotelsData: function () {citiesHotel(this.cityname).get().then(response => {
                this.cityData = response
            })}
        },
        mounted: function () {
            this.getCitiesHotelsData()
        }
    }
</script>
