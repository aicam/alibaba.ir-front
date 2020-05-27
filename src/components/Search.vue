<template>
    <section id="search-panels" class="searchPanel search-panels"
             style="background-image: url(../assets/img/hotel-bg.jpg);">
        <div class="searchPanel-cover"></div>
        <div class="panels">
            <div class="container">
                <ul class="searchPanel-segment">
                    <li class="col-xs-4 col-md-2">
                        <a>
                            <div class="svg-icon-wrapper">
                                <img src="../assets/img/plane1.png" class="main-navigation__search">

                            </div>
                            <p class="tabs-title mb-1">
                                پرواز داخلی
                            </p>
                        </a>
                    </li>
                    <li class="col-xs-4 col-md-2">
                        <a>
                            <div class="svg-icon-wrapper">
                                <img src="../assets/img/worldwide.png" class="main-navigation__search">
                            </div>
                            <p class="tabs-title mb-1">
                                پرواز خارجی
                            </p>
                        </a>
                    </li>
                    <li class="col-xs-4 col-md-2">
                        <a>
                            <div class="svg-icon-wrapper">
                                <img src="../assets/img/plane1.png" class="main-navigation__search">
                            </div>
                            <p class="tabs-title mb-1">
                                قطار
                            </p>
                        </a>
                    </li>
                    <li class="col-xs-4 col-md-2">
                        <a>
                            <div class="svg-icon-wrapper">
                                <img src="../assets/img/plane1.png" class="main-navigation__search">
                            </div>
                            <p class="tabs-title mb-1">
                                اتوبوس
                            </p>
                        </a>
                    </li>
                    <li class="col-xs-4 col-md-2">
                        <a>
                            <div class="svg-icon-wrapper">
                                <img src="../assets/img/plane1.png" class="main-navigation__search">
                            </div>
                            <p class="tabs-title mb-1">
                                تور
                            </p>
                        </a>
                    </li>
                    <li class="col-xs-4 col-md-2">
                        <a>
                            <div class="svg-icon-wrapper">
                                <img src="../assets/img/plane1.png" class="main-navigation__search">
                            </div>
                            <p class="tabs-title mb-1">
                                هتل خارجی و داخلی
                            </p>
                        </a>
                    </li>
                </ul>
                <div class="search-container row">
                    <form class="search-container row">
                        <div class="gap"></div>
                        <div class="col-xs-12-search col-md-4">
                            <div class="input-group multitab-picker">
                                <span class="input-group-addon">
                                    <i class="icon icon-location"></i>
                                </span>
                                <input type="text" placeholder="جستجوی مقصد یا هتل (داخلی و خارجی)" tabindex="1"
                                       class="form-control" wtx-context="D553F6DE-13F0-45CC-8BA3-B5484884E66F">
                            </div>
                        </div>
                        <div class="col-xs-12-search col-md-3">
                            <div data-test="alibabaDatepicker" class="alibaba-datepicker">
                                <div class="input-pair xs">
                                    <div data-test="departingDatePicker" class="input-group"><span
                                            class="input-group-addon"><i class="icon icon-calendar"></i></span>
                                        <input
                                                placeholder="ورود" class="form-control">
                                    </div>
                                    <div data-test="returningDatePicker" class="input-group"><span
                                            class="input-group-addon"><i class="icon icon-calendar"></i></span>
                                        <input
                                                placeholder="خروج" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12-search col-md-3">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="icon icon-passenger">
                                    </i>
                                </span>

                                <input type="text" placeholder="مسافران" class="form-control">
                            </div>
                        </div>
                        <div class="col-xs-12-search col-md-2">
                            <button class="btn btn-orange btn-block domestic-search">جستجو</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SearchView"
    }
</script>

<style scoped>

</style>
