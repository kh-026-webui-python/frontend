<template>
    <div class="container">
        <div class="row ">
            <div class="d-none d-xl-block col-xl-3 p-2 ">
                <ul class="list-group shadow">
                    <li v-for="filter in filters" v-bind:key="filter"
                        class="list-group-item text-left border-0">
                        <h3>{{ filter.filter_name }}</h3>
                        <ul class="list-group">
                            <li class="list-group-item border-0" v-for="(add_fil, index) in filter.add_fil"
                                v-bind:key="add_fil">
                                <div id="filters" class="form-check">
                                    <input class="form-check-input" type="checkbox" value=""
                                           v-bind:id="filter.filter_name + '_' + index">
                                    <label class="form-check-label "
                                           v-bind:for="filter.filter_name + '_' + index">
                                        {{ add_fil }}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="courses" class="col-xs-12 col-xl-9">
                <div class="input-group mb-3 mt-2 shadow">
                    <input type="text" class="form-control rounded-0" placeholder=" "
                           aria-label="Search" aria-describedby="Search">
                    <div class="input-group-append ">
                        <button class="btn btn-outline-secondary rounded-0" type="button">Search</button>
                    </div>
                </div>
                <div v-for="course in courses" v-bind:key="course.id" class="card-deck p-2">
                    <div class="card m-2 border-0 shadow">
                        <div class="card-body container">
                            <div class="row">
                                <h2 class="card-title text-center col-auto">
                                    <i>{{ course.name }}</i><br>
                                    <hr class="mt-1">
                                </h2>
                                <div class="text-center col-xl-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </div>  <!-- Hide on small -->
                                <div class="d-none d-xl-block col-xl-2">
                                    <h5>Tech: </h5>
                                    <h6 v-for="tech in course.tech" v-bind:key="tech">
                                        {{ tech }}
                                    </h6>
                                </div>
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
        name: "Courses",
        data() {
            return {
                filters:
                    [
                        {
                            filter_name: 'Direction',
                            add_fil: ['Software development', 'Business Analysis']
                        },
                        {
                            filter_name: 'Finance',
                            add_fil: ['Free', 'Paid']
                        },
                        {
                            filter_name: 'Status',
                            add_fil: ['Active', 'Planned']
                        }
                    ],
                courses:
                    [
                        {
                            id: 1,
                            name: "Python",
                            tech:
                                [
                                    'Python',
                                    'Django',
                                    'Postgresql'
                                ]
                        },
                        {
                            id: 2,
                            name: "Prolog",
                            tech:
                                [
                                    'Prolog',
                                    'Logical programming',
                                    'Backtracking'
                                ]
                        },
                        {
                            id: 3,
                            name: 'Lisp',
                            tech:
                                [
                                    'Lisp',
                                    'Tail recursion'
                                ]
                        }
                    ]
            }
        }
    }
</script>

<style scoped>
    hr {
        color: #eaebeb;
        height: 2px;
        background-color: #eaebeb;
        border-radius: 7px 7px 7px 7px;
        border: none;
    }

    .card {
        background: #f7f7f7;
    }

    .card-body:hover {
        background: #BFBFBF;
    }

    #courses {
        /*background: #9eebcf;*/
    }
</style>