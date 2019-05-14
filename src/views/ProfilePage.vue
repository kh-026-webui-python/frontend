<template>
    <div class="profilepage h-100 w-100 position-fixed">
        <NavigationBar/>
        <b-container>
            <b-form-row>
                <b-col offset-md="4"><h3 class="text-left">Profile</h3>
                </b-col>
            </b-form-row>
            <b-form-row class="content">
                <b-col md="4" class="picture-info border shadow ">
                    <b-col md="8" class="m-auto">
                        <img src="../assets/img/no-avatar.gif" class="rounded-circle img-thumbnail mt-3" alt="...">
                        <h4>{{userName}}</h4>
                        <p>Applicant</p>
                        <p>
                            <a class="text-muted">
                                {{userEmail}}</a> <br>
                        </p>
                    </b-col>
                    <hr>
                    <b-col class="text-left">
                        <h4>Resume</h4>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        <p class="text-left">Date joined: {{userDateJoined|moment}}</p>

                    </b-col>
                </b-col>
                <b-col md="8" class="main-info border shadow text-left p-5">
                    <b-form @submit.prevent='onSaveForm' ref="formProfile">
                        <b-form-row class="form-row">
                            <b-form-group class="col-md-5 mr-5">
                                <label>First name:</label>
                                <b-form-input
                                        id="userFirstName"
                                        type="text"
                                        class="profile-input"
                                        placeholder="Enter your name"
                                        v-model="userFirstName"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group class=" col-md-5
                            ">
                                <label><i class="fa fa-user"></i>Last name:</label>
                                <b-form-input
                                        id="userLastName"
                                        type="text"
                                        class="profile-input"
                                        placeholder="Enter your last name"
                                        v-model="userLastName"
                                ></b-form-input>
                            </b-form-group>
                        </b-form-row>
                        <b-form-row class="form-row">
                            <!--                        <b-form-group class="col-md-5 mr-5">-->
                            <!--                            <label><i class="material-icons">email</i>Email:</label>-->
                            <!--                            <b-form-input-->
                            <!--                                    id="userEmail"-->
                            <!--                                    type="email"-->
                            <!--                                    class="profile-input"-->
                            <!--                                    placeholder="Enter your email"-->
                            <!--                                    v-model="userEmail"-->
                            <!--                            ></b-form-input>-->
                            <!--                        </b-form-group>-->
                            <b-form-group class="col-md-5 mr-5">
                                <div class="d-flex">
                                    <i class="material-icons">phone</i>
                                    <label>Phone number:</label>
                                </div>
                                <b-form-input
                                        type="text"
                                        placeholder="Enter your phone number"
                                        class="profile-input"
                                        v-model="userPhone"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group class="col-md-5">
                                <div class="d-flex">
                                    <i class="material-icons">card_giftcard</i>
                                    <label>Birthday:</label>
                                </div>
                                <b-form-input
                                        type="text"
                                        class="profile-input"
                                        placeholder="Enter your birthday"
                                        v-model="userBirthday"
                                ></b-form-input>
                            </b-form-group>
                        </b-form-row>
                        <b-form-row>
                            <b-form-group class="col-md-5 mr-5">
                                <div class="d-flex">
                                    <i class="material-icons">g_translate</i>
                                    <label>English level:</label>
                                </div>
                                <b-form-select
                                        v-model="selectedEnglish"
                                        :options="optionsEnglish"
                                        class="profile-input"
                                ></b-form-select>
                            </b-form-group>
                            <b-form-group class="col-md-5">
                                <div class="d-flex">
                                    <i class="material-icons">location_city</i>
                                    <label class="">Location city:</label>
                                </div>
                                <b-form-select
                                        v-model="selectedLocation"
                                        :options="optionsLocation"
                                        class="profile-input"
                                ></b-form-select>
                            </b-form-group>
                        </b-form-row>
                        <hr>
                        <b-form-row>
                            <b-col md="12" offset-xs="9" offset-md="9">
                                <!--                                <b-button class="btn-hover btn-info "-->
                                <!--                                          id="edit-btn">-->
                                <!--                                    Edit information-->
                                <!--                                </b-button>-->
                                <b-button v-on:click="goBack" class="btn-hover btn-light mr-3" id="cancel-btn"
                                          type="reset">
                                    Cancel
                                </b-button>
                                <b-button class="save-button"
                                          id="save-btn"
                                          type="submit">
                                    Save
                                </b-button>
                            </b-col>
                        </b-form-row>
                    </b-form>
                </b-col>
            </b-form-row>

        </b-container>
    </div>
</template>

<script>

    import NavigationBar from "../components/NavigationBar/NavigationBar";
    import {getUserData, BASE} from "../vue-axios/axios-conf";


    export default {
        name: "Profile",
        components: {NavigationBar},
        data() {
            return {
                selectedLocation: '',
                selectedEnglish: '',
                userLastName: '',
                userFirstName: '',
                userPhone: '',
                userEmail: '',
                userName: '',
                userBirthday: '',
                userDateJoined: '',
            }
        },
        created() {
            this.fetchUserCredentials();
        },
        filters: {
            moment: function (date) {
                return (date.substr(0, 10))
            }
        },
        methods: {
            fetchUserCredentials() {
                getUserData().then((response) => {
                    this.userName = response.data.username;
                    this.userEmail = response.data.email;
                    this.userFirstName = response.data.first_name;
                    this.userLastName = response.data.last_name;
                    this.userBirthday = response.data.profile.birth_date;
                    this.userPhone = response.data.profile.phone_number;
                    this.optionsLocation = response.data.profile.choices_location;
                    this.optionsEnglish = response.data.profile.choices_english;
                    this.userDateJoined = response.data.date_joined;
                    if (response.data.profile.location === null) {
                        this.selectedLocation = this.optionsLocation[0];
                        this.$awn.info('Please select location!')
                    } else {
                        this.selectedLocation = response.data.profile.location;
                    }
                    //response.data.profile.english_level === this.optionsEnglish[0]
                    if (response.data.profile.english_level === null) {
                        this.selectedEnglish = this.optionsEnglish[0];
                        this.$awn.info('Please select level english!')
                    } else {
                        this.selectedEnglish = response.data.profile.english_level;
                    }

                }).catch((error) => {
                    if (error.response === undefined) {
                        console.log(error.response);
                        this.$awn.alert('Server temporarily unavailable');
                    } else if (error.response.data.message || error.response.status === 500) {
                        this.$awn.warning(error.response.data.message);
                    }
                });
            },
            goBack() {
                this.$router.go(-1);
            },
            onSaveForm() {

                const formData = new FormData(this.$refs.formProfile);
                let jsonObject = {'profile': {}};
                formData.set('first_name', this.userFirstName);
                formData.set('last_name', this.userLastName);
                formData.set('phone_number', this.userPhone);
                // formData.set('choices_english', this.selectedEnglish);
                formData.set('birth_date', this.userBirthday);
                // formData.set('choices_location', this.selectedLocation);
                for (const [key, value] of formData.entries()) {
                    jsonObject[key] = value
                }
                // for (const [key, value] of formData.entries()) {
                //     if (key === 'first_name' || key === 'last_name') {
                //         jsonObject[key] = value;
                //         continue;
                //     }
                //     jsonObject['profile'][key] = value
                // }
                console.log(formData)
                BASE.patch(`/api/profile/`, jsonObject)
                    .then((response) => {
                        console.log(response)
                        this.userFirstName = response.data.first_name;
                        this.userLastName = response.data.last_name;
                        this.userBirthday = response.data.profile.birth_date;
                        this.userPhone = response.data.profile.phone_number;
                        this.optionsLocation = response.data.profile.choices_location;
                        this.optionsEnglish = response.data.profile.choices_english;
                        this.$awn.success('Profile successfully updated.')
                    })
                    .catch((error) => {
                        if (error.response === undefined) {
                            // console.log(error.response);
                            this.$awn.alert('Server temporarily unavailable');
                        } else if (error.response.status === 500) {
                            this.$awn.warning(error.response.data.message);
                        }
                    });
            }
        }
        ,
    }
</script>

<style scoped>
    .profilepage {
        background-image: url(../assets/img/profile-bg.jpg);
        background-size: cover;
    }

    .content {
        background-color: #efe7f7;
    }

    .profile-input {
        padding: 2px 10px;;
        background-color: white;
        border: 1px solid #ced4da;
        font-size: 0.9rem;
        font-family: MuseoSansRegular;
    }

    #save-btn {
        border-color: #6e3e9b;
        background-color: #6e3e9b;
    }

    #save-btn:hover {
        border-color: #673b91;
        background-color: #673b91;
    }

</style>