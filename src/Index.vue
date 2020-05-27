<style>
    @import "styles/faq.css";
    @import "styles/body.css";
    @import "styles/footer.css";
    @import "styles/header.css";
    @import "styles/search.css";
    @import "styles/style.css";
</style>
<template>
    <div class="container-body-view rtl">
        <HeaderView></HeaderView>


        <SearchView></SearchView>


        <div class="mt-3 container">
            <div class="flex flex-wrap flex-justify-center flex-align-center row"></div>
        </div>
        <InfoView></InfoView>
        <ReserveMainPageView></ReserveMainPageView>

        <h2 class="w-500 m-0">
            پرسش های شما
        </h2>


        <div class="container">
            <ul aria-multiselectable="true" id="accordion" role="tablist" class="list-unstyled mb-0">
                <li class="faq-item mb-2">
                    <div class="faq-item__question flex"><i class="faq-item__question__icon icon-question-mark"></i>
                        <p class="faq-item__question__content mb-0 mx-3">
                            پیش از رزرو هتل چه طور درباره آن و فرآیند رزرو اطلاعات به دست بیاوریم؟
                        </p>
                    </div>
                    <div class="faq-item__answer">
                        <div aria-labelledby="answer-123" id="collapse-123" role="tabpanel" class="collapse">
                            <div class="faq-item__answer__content p-3 pb-2">
                                <div class="mb-2">فرایند انتخاب و رزرو اینترنتی هتل در علی بابا بسیار ساده است. به سادگی
                                    و با
                                    چند کلیک می توانید با انتخاب مقصد و تاریخ سفر خود، هتل مناسب خود را با قیمت مناسب
                                    رزرو کنید.
                                    با این حال در صورت نیاز، تیم پشتیبانی علی بابا 24
                                    ساعته پاسخگوی شماست.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="answer-123" role="tab" class="faq-item__button text-center">
                        <a aria-controls="collapse-123" aria-expanded="false" data-parent="#accordion"
                           data-toggle="collapse"
                           href="#collapse-123" class="flex">
                            <i class="icon-arrow-down-12 show-answer"></i></a>
                    </div>
                </li>
                <li class="faq-item mb-2">
                    <div class="faq-item__question flex"><i class="faq-item__question__icon icon-question-mark"></i>
                        <p class="faq-item__question__content mb-0 mx-3">
                            هزینه هتل خارجی را چه طور بپردازیم؟ با کارت های شتاب این فرآیند امکان پذیر است؟
                        </p>
                    </div>
                    <div class="faq-item__answer">
                        <div aria-labelledby="answer-124" id="collapse-124" role="tabpanel" class="collapse">
                            <div class="faq-item__answer__content p-3 pb-2">
                                <div class="mb-2">زمانی که برای رزرو هتل خارجی به علی بابا مراجعه می کنید، خیالتان از هر
                                    بابت به
                                    خصوص پرداخت راحت باشد. شما می توانید هزینه رزرو هتل را با همین کارت های شتاب ساده
                                    خودتان
                                    بپردازید. به هیچ وجه نیازی به استفاده
                                    از کارت های اعتباری خارجی نیست.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="answer-124" role="tab" class="faq-item__button text-center">
                        <a aria-controls="collapse-124" aria-expanded="false" data-parent="#accordion"
                           data-toggle="collapse"
                           href="#collapse-124" class="flex">
                            <i class="icon-arrow-down-12 show-answer"></i></a>
                    </div>
                </li>
            </ul>
        </div>


        <div class="container">
            <div class="row mb-2">
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/tr-antalya" target="_blank">
                            رزرو هتل آنتالیا
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/tr-istanbul" target="_blank">
                            رزرو هتل استانبول
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/tr-van" target="_blank">
                            رزرو هتل وان
                        </a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/ae-dubai" target="_blank">
                            رزرو هتل دبی
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/fr-paris" target="_blank">
                            رزرو هتل پاریس
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/am-yerevan" target="_blank">
                            رزرو هتل ایروان
                        </a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/nl-amsterdam" target="_blank">
                            رزرو هتل آمستردام
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/az-baku" target="_blank">
                            رزرو هتل باکو
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/it-rome" target="_blank">
                            رزرو هتل رم
                        </a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/de-berlin" target="_blank">
                            رزرو هتل برلین
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/it-milan" target="_blank">
                            رزرو هتل میلان
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/ru-moscow" target="_blank">
                            رزرو هتل مسکو
                        </a></li>
                    </ul>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/ir-mashhad" target="_blank">
                            رزرو هتل مشهد
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/ir-tehran" target="_blank">
                            رزرو هتل تهران
                        </a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/ir-kish" target="_blank">
                            رزرو هتل کیش
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/ir-tabriz" target="_blank">
                            رزرو هتل تبریز
                        </a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart">
                        <li class="site-footer__item"><a href="/hotel/ir-isfahan" target="_blank">
                            رزرو هتل اصفهان
                        </a></li>
                        <li class="site-footer__item"><a href="/hotel/ir-shiraz" target="_blank">
                            رزرو هتل شیراز
                        </a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="site-footer__list multipart"></ul>
                </div>
            </div>
        </div>


        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-2">
                        <div class="site-footer__title">
                            علی بابا
                        </div>
                        <div class="row">
                            <div class="col-xs-6 col-sm-12">
                                <ul class="site-footer__list multipart">
                                    <li class="site-footer__item"><a>
                                        درباره ما
                                    </a></li>
                                    <li class="site-footer__item"><a>
                                        تماس با ما
                                    </a></li>
                                    <li class="site-footer__item"><a>
                                        چرا علی بابا
                                    </a></li>
                                    <li class="site-footer__item"><a>
                                        باشگاه مشتریان
                                    </a></li>
                                    <li class="site-footer__item"><a>
                                        قوانین و مقررات
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-xs-6 col-sm-12">
                                <ul class="site-footer__list">
                                    <li class="site-footer__item multipart"><a>
                                        راهنمای خرید
                                    </a></li>
                                    <li class="site-footer__item"><a>
                                        پرسش و پاسخ
                                    </a></li>
                                    <li class="site-footer__item"><a>مجله
                                        علی بابا</a></li>
                                    <li class="site-footer__item"><a>فرصت های شغلی</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3">
                        <div class="site-footer__title">
                            اطلاعات تکمیلی
                        </div>
                        <ul class="site-footer__list">
                            <li class="site-footer__item"><a>
                                بلیط چارتر
                            </a></li>
                            <li class="site-footer__item"><a>
                                راهنمای خرید بلیط هواپیما(داخلی)
                            </a></li>
                            <li class="site-footer__item"><a>
                                راهنمای خرید بلیط هواپیما(خارجی)
                            </a></li>
                            <li class="site-footer__item"><a>
                                راهنمای خرید بلیط قطار
                            </a></li>
                            <li class="site-footer__item"><a>
                                راهنمای خرید بلیط اتوبوس
                            </a></li>
                            <li class="site-footer__item"><a>
                                راهنمای رزرو هتل خارجی
                            </a></li>
                            <li class="site-footer__item"><a>
                                راهنمای استرداد بلیط
                            </a></li>
                            <li class="site-footer__item"><a>
                                بلیط قطار
                            </a></li>
                            <li class="site-footer__item"><a>
                                خرید بلیط هواپیما خارجی
                            </a></li>
                            <li class="site-footer__item"><a>
                                اطلاعات فرودگا هی
                            </a></li>
                            <li class="site-footer__item"><a>شیوه نامه
                                حقوق مسافر</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-3 app-download">
                        <div class="site-footer__title">
                            اپلیکیشن علی بابا
                        </div>
                        <p class="hidden-xs hidden-sm">
                            با نصب اپلیکیشن علی بابا بلیط همه سفرها در جیب شماست. آسان ترین، کامل ترین و مطمئن ترین روش
                            تهیه
                            بلیط و هتل را با اپلیکیشن علی بابا تجربه کنید.
                        </p>
                        <div class="app-download__links">
                            <a class="app-download__link android-app">
                                <img src="./assets/img/bazaar.png">
                            </a>
                            <a class="app-download__link ios-app">
                                <img src="./assets/img/alibaba-app.png">
                            </a>
                            <a class="app-download__link">
                                <img src="./assets/img/googleplay.png">
                            </a>
                            <a class="app-download__link">
                                <img src="./assets/img/iapps.png">
                            </a>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 text-center signs-container">
                        <img src="./assets/img/alibaba-footer.png" class="site-footer__logo">
                        <ul class="contact-info">
                            <li class="contact-info__phone clearfix">
                                <span>تلفن پشتیبانی:</span>
                                <span class="ltr">۰۲۱ - ۴۳۹۰۰۰۰۰</span> |
                                <span class="ltr">۰۲۱ - ۴۹۲۷۵۰۰۰</span></li>
                        </ul>
                        <ul class="signs">
                            <li class="signs__virtualBusinesses"><img src="./assets/img/kasbOkar.png"
                                                                      class="clickable"></li>
                            <li class="signs__samandehi"><img src="./assets/img/enamad.png" class="clickable"></li>
                            <li class="signs__enamad"><img src="./assets/img/enamad.png" class="clickable"></li>
                            <li class="signs__passengerRights"><img src="./assets/img/passenger-rights.png"
                                                                    class="clickable">
                            </li>
                            <li class="signs__aira"><img src="./assets/img/aira.png" class="clickable"></li>
                            <li class="signs__stateAirline"><img src="./assets/img/homa.png" class="clickable"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-socials">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="copyright"><span>کلیه حقوق این سایت محفوظ و متعلق به آژانس هواپیمایی و جهانگردی علی
                                بابا می باشد.</span> <span>(ورژن 4.194.0)</span></p>
                        </div>
                        <div class="col-sm-6">
                            <ul class="socials">
                                <li class="socials__aparat">
                                    <a class="icon-aparat"></a>
                                </li>
                                <li class="socials__linkedin">
                                    <a class="icon-linkedin"></a>
                                </li>
                                <li class="socials__instagram">
                                    <a class="icon-instagram"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </div>
</template>

<script>
    import HeaderView from './components/Header.vue'
    import SearchView from './components/Search.vue'
    import InfoView from './components/Info.vue'
    import ReserveMainPageView from './components/ReserveMainPage.vue'
    export default {
        name: 'Index',
        components: {
            HeaderView,
            SearchView,
            InfoView,
            ReserveMainPageView
        }
    }

</script>


