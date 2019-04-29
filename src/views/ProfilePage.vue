<template>
    <div>
        <NavigationBar/>
        <b-container>
            <b-form-row>
                <b-col offset-md="4" class="text-left"><h3>Profile</h3>
                </b-col>
            </b-form-row>
            <b-form-row class="border content">
                <b-col md="4" class="profile-pic justify-content-center border">
                    <img src="../assets/img/no-avatar.gif" class="rounded-circle img-thumbnail" alt="...">
                    <b-col md="12">
                        <h4>User Name</h4>
                        <p>Applicant</p>
                        <p>
                            <a class="text-muted"><i class="glyphicon glyphicon-envelope"></i>
                                email@gmail.com</a> <br>
                            <a href="#" class="remove-decoration"> <i class="glyphicon glyphicon-phone"></i>+380 50 94
                                644</a>
                        </p>
                    </b-col>
                    <b-col class="text-left border">
                        <h4>Resume</h4>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        <p class="text-left">Joined: 15.04.19</p>

                    </b-col>
                </b-col>
                <b-col md="8" class="border information text-left p-4">
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
                        <b-form-group class="col-md-5">
                            <label>Last name:</label>
                            <b-form-input
                                    id="userLastName"
                                    type="text"
                                    class="profile-input"
                                    placeholder="Enter your last name"
                                    v-model="userLastName"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group class="col-md-5 mr-5">
                            <label>Email:</label>
                            <b-form-input
                                    id="userEmail"
                                    type="email"
                                    class="profile-input"
                                    placeholder="Enter your email"
                                    v-model="userEmail"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group class="col-md-5">
                            <label>Phone number:</label>
                            <b-form-input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    class="profile-input"
                                    v-model="userPhone"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group class="col-md-5 mr-5">
                            <label>Last name:</label>
                            <b-form-input
                                    type="text"
                                    class="profile-input"
                                    placeholder="Enter your last name"
                                    v-model="userLastName"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group class="col-md-5">
                            <label>Email:</label>
                            <b-form-input
                                    type="email"
                                    class="profile-input"
                                    placeholder="Enter your email"
                                    v-model="userEmail"
                            ></b-form-input>
                        </b-form-group>
                    </b-form-row>
                    <hr>
                    <b-col md="12" offset-md="9">
                        <b-button class="btn-hover btn-light mr-3" id="cancel-btn" type="reset">Cancel
                        </b-button>
                        <b-button class="save-button" id="save-btn" type="submit">Save
                        </b-button>
                    </b-col>
                </b-col>
            </b-form-row>
        </b-container>
    </div>
</template>

<script>

    import NavigationBar from "../components/NavigationBar/NavigationBar";

    export default {
        name: "Profile",
        components: {NavigationBar},
        data() {
            return {}
        }
    }
</script>

<style scoped>
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